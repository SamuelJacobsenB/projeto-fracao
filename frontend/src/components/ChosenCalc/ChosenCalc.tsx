import { Box, Rectangle, StaticFraction } from "../";
import { createRectangle } from "../../functions";
import type { FractionType, OperatorType } from "../../types";

import "./styles.css";

interface ChosenCalcProps {
  chosenFraction: FractionType[];
  chosenOperator: OperatorType;
}

export const ChosenCalc = ({
  chosenFraction,
  chosenOperator,
}: ChosenCalcProps) => {
  if (chosenFraction.length !== 2) {
    return null;
  }

  const r1 = createRectangle(chosenFraction[0].denominator);
  const r2 = createRectangle(chosenFraction[1].denominator);

  return (
    <Box number={2}>
      <h1>Cálculo escolhido</h1>
      <p>Representação das frações em repartições:</p>
      <div className="rectangle-area">
        <Rectangle
          width={r1.width}
          height={r1.height}
          numerator={chosenFraction[0].numerator}
        />
        <big>{chosenOperator}</big>
        <Rectangle
          width={r2.width}
          height={r2.height}
          numerator={chosenFraction[1].numerator}
        />
      </div>
      <hr />
      <p>Representação das frações em sua forma original:</p>
      <div className="fraction-area">
        <StaticFraction fraction={chosenFraction[0]} />
        <big>{chosenOperator}</big>
        <StaticFraction fraction={chosenFraction[1]} />
      </div>
    </Box>
  );
};
