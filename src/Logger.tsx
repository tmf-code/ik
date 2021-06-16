import React, { useRef } from "react";
import { distanceToTarget, IBone } from "src/math/solver";
import { V2 } from "src/math/v2";
import { useAnimationFrame } from "src/hooks/useAnimationFrame";

export const Logger = ({
  target,
  bones,
  basePosition,
}: {
  target: V2;
  bones: IBone[];
  basePosition: V2;
}) => {
  const distanceRef = useRef<HTMLTableCellElement>(null);

  useAnimationFrame(1, () => {
    if (!distanceRef.current) return;
    distanceRef.current.innerText = distanceToTarget(
      bones,
      basePosition,
      target
    ).toFixed(3);
  });

  return (
    <div style={{ position: "absolute", top: 0, left: 0, userSelect: "none" }}>
      <table>
        <tbody>
          <tr>
            <td>Distance</td>
            <td ref={distanceRef}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};