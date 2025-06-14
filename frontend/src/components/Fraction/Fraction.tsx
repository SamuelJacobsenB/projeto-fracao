import React from "react";

import type { FractionType } from "../../types";

import "./styles.css";

interface FractionProps {
  fraction: FractionType;
  setFraction: React.Dispatch<React.SetStateAction<FractionType>>;
}

export const Fraction = ({ fraction, setFraction }: FractionProps) => {
  function verifyNumerator(numerator: number): boolean {
    return numerator >= 0 && numerator <= 16;
  }

  function verifyDenominator(denominator: number): boolean {
    return denominator >= 1 && denominator <= 16;
  }

  return (
    <div className="fraction">
      <input
        type="number"
        value={fraction.numerator}
        onChange={(e) => {
          const numerator = Number(e.target.value);

          setFraction({
            ...fraction,
            numerator: verifyNumerator(numerator)
              ? numerator
              : fraction.numerator,
          });
        }}
        max={16}
        min={0}
        className="numerator"
      />
      <span className="separator" />
      <input
        type="number"
        value={fraction.denominator}
        onChange={(e) => {
          const denominator = Number(e.target.value);

          setFraction({
            ...fraction,
            denominator: verifyDenominator(denominator)
              ? denominator
              : fraction.denominator,
          });
        }}
        max={16}
        min={1}
        className="denominator"
      />
    </div>
  );
};
