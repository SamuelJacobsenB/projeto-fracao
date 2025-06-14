import { Box, Rectangle, StaticFraction } from "../..";
import { createRectangle } from "../../../functions";
import type { FractionType, OperatorType } from "../../../types";

import "./styles.css";

interface EqualizeBasesProps {
  chosenFraction: FractionType[];
  chosenOperator: OperatorType;
}

export const EqualizeBases = ({
  chosenFraction,
  chosenOperator,
}: EqualizeBasesProps) => {
  if (chosenFraction.length !== 2) {
    return null;
  }

  const denominator =
    chosenFraction[0].denominator * chosenFraction[1].denominator;

  const rectangle = createRectangle(denominator);

  const f1: FractionType = {
    numerator: chosenFraction[0].numerator * chosenFraction[1].denominator,
    denominator,
  };

  const f2: FractionType = {
    numerator: chosenFraction[1].numerator * chosenFraction[0].denominator,
    denominator,
  };

  return (
    <Box number={3}>
      <h1>Igualar Bases</h1>
      <p>
        Para realizar operações com frações, é necessário que elas tenham o
        mesmo denominador (se ainda não tiverem).
      </p>
      <p>
        Portanto, podemos multiplicar as bases (denominadores) entre si, e
        multiplicar os numeradores pelo denominador da outra fração, para que as
        frações fiquem com o mesmo denominador.
      </p>
      <p>
        Como {chosenFraction[0].denominator} x {chosenFraction[1].denominator} ={" "}
        {chosenFraction[0].denominator * chosenFraction[1].denominator}, então
        temos:
      </p>
      <div className="rectangle-area">
        <Rectangle
          width={rectangle.width}
          height={rectangle.height}
          numerator={f1.numerator}
        />
        <big>{chosenOperator}</big>
        <Rectangle
          width={rectangle.width}
          height={rectangle.height}
          numerator={f2.numerator}
        />
      </div>
      <hr />
      <p>Representação das frações em sua forma original:</p>
      <div className="fraction-area">
        <StaticFraction fraction={f1} />
        <big>{chosenOperator}</big>
        <StaticFraction fraction={f2} />
      </div>
    </Box>
  );
};
