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
        Para realizar operações com frações, é fundamental que elas tenham o
        mesmo denominador. Caso não tenham, precisamos ajustá-las para que
        possam ser comparadas ou calculadas corretamente.
      </p>
      <p>
        Para isso, multiplicamos os denominadores entre si, garantindo que todas
        as frações compartilhem uma base comum. Em seguida, ajustamos os
        numeradores, multiplicando cada um pelo denominador da outra fração,
        preservando assim o valor original das frações, mas permitindo operações
        como soma e subtração.
      </p>
      <p>
        Como{" "}
        <strong>
          {chosenFraction[0].denominator} x {chosenFraction[1].denominator} ={" "}
          {chosenFraction[0].denominator * chosenFraction[1].denominator}
        </strong>
        , então temos:
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
