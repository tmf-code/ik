import { Canvas } from '@react-three/fiber'
import { MathUtils, Solve2D, V2 } from 'inverse-kinematics'
import React, { useEffect, useRef, useState } from 'react'
import { useAnimationFrame } from '../../hooks/useAnimationFrame'
import { Base } from './components/Base'
import { JointTransforms } from './components/JointTransforms'
import { Logger } from './components/Logger'
import { Target } from './components/Target'
import { useControls } from 'leva'

const base: Solve2D.JointTransform = { position: [0, 0], rotation: 0 }

export default function ConstrainedGlobalRotation() {
  const [target, setTarget] = useState([500, 50] as V2)
  const [links, setLinks] = useState<Solve2D.Link[]>([])

  const { linkCount, linkLength, endEffectorRotation } = useControls({
    linkCount: { value: 4, min: 0, max: 50, step: 1 },
    linkLength: { value: 200, min: 1, max: 200, step: 10 },
    endEffectorRotation: { value: 0, min: -180, max: 180, step: 15 },
  })

  useEffect(() => {
    setLinks(makeLinks(linkCount, linkLength))
  }, [linkCount, linkLength])

  useAnimationFrame(60, () => {
    const knownRangeOfMovement = linkCount * linkLength

    function learningRate(errorDistance: number): number {
      const relativeDistanceToTarget = MathUtils.clamp(errorDistance / knownRangeOfMovement, 0, 1)
      const cutoff = 0.1

      if (relativeDistanceToTarget > cutoff) {
        return 10e-6
      }

      // result is between 0 and 1
      const remainingDistance = relativeDistanceToTarget / 0.02
      const minimumLearningRate = 10e-7

      return minimumLearningRate + remainingDistance * 10e-7
    }

    const result = Solve2D.solve(links, base, target, {
      learningRate,
      acceptedError: 10,
    }).links

    const jointTransforms = Solve2D.getJointTransforms(result, base)
    const currentRotation = jointTransforms.effectorRotation
    const targetRotation = (endEffectorRotation * Math.PI) / 180
    const deltaRotation = targetRotation - currentRotation
    if (result.length > 0) {
      result[result.length - 1]!.rotation! += deltaRotation
    }
    links.forEach((_, index) => {
      links[index] = result[index]!
    })
  })

  return (
    <div
      onClick={({ clientX, clientY }) =>
        setTarget([clientX - window.innerWidth / 2, -clientY + window.innerHeight / 2])
      }
    >
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'aquamarine',
        }}
        orthographic
        linear
        camera={{ near: -1000 }}
      >
        <JointTransforms links={links} base={base} />
        <Base base={base} links={links} />
        <Target position={target} />
      </Canvas>
      <Logger target={target} links={links} base={base} />
    </div>
  )
}

const makeLinks = (linkCount: number, linkLength: number): Solve2D.Link[] =>
  Array.from({ length: linkCount }).map(() => {
    return {
      length: linkLength,
    }
  })