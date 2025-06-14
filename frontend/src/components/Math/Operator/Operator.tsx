import React from "react";

import type { OperatorType } from "../../../types";

import "./styles.css";

interface OperatorProps {
  operator: OperatorType;
  setOperator: React.Dispatch<React.SetStateAction<OperatorType>>;
}

export const Operator = ({ operator, setOperator }: OperatorProps) => {
  return (
    <div className="operator">
      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value as OperatorType)}
        name="select-operator"
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
      </select>
    </div>
  );
};
