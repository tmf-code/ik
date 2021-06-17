import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { Base } from './components/Base'
import { DebugForwardPass } from './components/DebugForwardPass'
import { Solve2D, V2 } from 'ik'
import { Target } from './components/Target'
import { Logger } from './components/Logger'

const bones: Solve2D.Bone[] = [
  { rotation: 0, length: 50 },
  { rotation: 0, constraint: Math.PI, length: 200 },
  { rotation: 0, constraint: Math.PI, length: 200 },
  { rotation: 0, constraint: Math.PI, length: 200 },
]

const basePosition: V2 = [0, 0]

function TwoDimension() {
  const [targetPosition, setTargetPosition] = useState([500, 50] as V2)
  return (
    <div
      onClick={(event) => {
        const position = [event.clientX - window.innerWidth / 2, -event.clientY + window.innerHeight / 2] as V2
        setTargetPosition(position)
      }}
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
        <Base position={basePosition} sequence={bones} target={targetPosition} />
        <DebugForwardPass bones={bones} basePosition={basePosition} />
        <Target position={targetPosition} />
      </Canvas>
      <Logger target={targetPosition} bones={bones} basePosition={basePosition} />
    </div>
  )
}

export default TwoDimension