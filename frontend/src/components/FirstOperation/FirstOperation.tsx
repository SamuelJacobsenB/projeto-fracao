import { Box, Rectangle, StaticFraction } from "../";
import { createRectangle } from "../../functions";
import type { FractionType } from "../../types";

import "./styles.css";

interface FirstOperationProps {
  fraction: FractionType;
}

export const FirstOperation = ({ fraction }: FirstOperationProps) => {
  const rectangle = createRectangle(fraction.denominator);

  return (
    <Box number={4}>
      <h1>Realizando o cálculo</h1>
      <p>
        Agora devemos apenas realizar o cálculo entre os numeradores
        anteriormente encontrados:
      </p>
      <div className="result-area">
        <div>
          <StaticFraction fraction={fraction} />
        </div>
        <big>=</big>
        <div>
          <Rectangle
            width={rectangle.width}
            height={rectangle.height}
            numerator={fraction.numerator}
          />
        </div>
      </div>
    </Box>
  );
};
