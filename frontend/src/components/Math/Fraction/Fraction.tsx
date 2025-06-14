import React from "react";

import type { FractionType } from "../../../types";

import "./styles.css";

interface FractionProps {
  fraction: FractionType;
  setFraction: React.Dispatch<React.SetStateAction<FractionType>>;
}

export const Fraction = ({ fraction, setFraction }: FractionProps) => {
  return (
    <div className="fraction">
      <input
        type="number"
        value={fraction.numerator}
        onChange={(evt) =>
          setFraction({
            ...fraction,
            numerator: Number(evt.target.value),
          })
        }
        max={16}
        min={0}
        className="numerator"
      />
      <span className="separator" />
      <input
        type="number"
        value={fraction.denominator}
        onChange={(evt) =>
          setFraction({
            ...fraction,
            denominator: Number(evt.target.value),
          })
        }
        max={16}
        min={0}
        className="denominator"
      />
    </div>
  );
};
