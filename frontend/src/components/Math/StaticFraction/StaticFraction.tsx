import type { FractionType } from "../../../types";

import "./styles.css";

interface StaticFractionProps {
  fraction: FractionType;
}

export const StaticFraction = ({ fraction }: StaticFractionProps) => {
  const isNegative = fraction.numerator < 0;
  const absoluteNumerator = Math.abs(fraction.numerator);

  return (
    <div className="static-fraction">
      {isNegative && <span>-</span>}
      <div className="static-fraction-container">
        <big>{absoluteNumerator}</big>
        <span className="separator" />
        <big>{fraction.denominator}</big>
      </div>
    </div>
  );
};
