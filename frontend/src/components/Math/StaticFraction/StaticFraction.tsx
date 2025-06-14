import type { FractionType } from "../../../types";

import "./styles.css";

interface StaticFractionProps {
  fraction: FractionType;
}

export const StaticFraction = ({ fraction }: StaticFractionProps) => {
  return (
    <div className="fraction">
      <big>{fraction.numerator}</big>
      <span className="separator" />
      <big>{fraction.denominator}</big>
    </div>
  );
};
