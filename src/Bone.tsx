import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import {
  BoxBufferGeometry,
  BufferGeometry,
  Color,
  Group,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshNormalMaterial,
  Vector3,
} from "three";
import { IBone } from "./App";

export const Bone = ({ joint, length, child }: IBone) => {
  const rotationRef = useRef<Group>();
  const translationRef = useRef<Mesh<BoxBufferGeometry, MeshNormalMaterial>>();

  useFrame(() => {
    if (!rotationRef.current) return;
    if (!translationRef.current) return;
    rotationRef.current.rotation.set(0, 0, joint.angle);
    translationRef.current.position.set(length, 0, 0);
  });

  const line: Line = useMemo(() => {
    const points = [new Vector3(), new Vector3(length, 0, 0)];
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({ color: new Color("#8B008B") });

    return new Line(geometry, material);
  }, [length]);

  return (
    <group ref={rotationRef}>
      <mesh ref={translationRef}>
        <sphereBufferGeometry args={[0.4, 100, 100]} />
        <meshNormalMaterial />
        {child && <Bone {...child} />}
      </mesh>
      <primitive object={line} />
    </group>
  );
};
