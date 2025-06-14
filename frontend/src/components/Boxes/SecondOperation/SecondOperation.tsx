import { Box, Rectangle, StaticFraction } from "../..";
import { createRectangle } from "../../../functions";
import type { FractionType } from "../../../types";

import "./styles.css";

interface SecondOperationProps {
  fraction: FractionType;
  operator: string;
}

export const SecondOperation = ({
  fraction,
  operator,
}: SecondOperationProps) => {
  const rectangle = createRectangle(fraction.denominator);

  return (
    <Box number={3}>
      <h1>Realizando o cálculo</h1>
      {operator === "x" ? (
        <>
          <p>
            Para realizarmos a multiplicação, devemos multiplicar o numerador
            das 2 frações entre si, e logo em seguida o denominador das 2
            frações entre si.
          </p>
          <p>Obtemos assim:</p>
        </>
      ) : (
        <>
          <p>
            Para realizarmos a divisão, devemos multiplicar o numerador da
            primeira fração pelo denominador da segunda fração, e logo em
            seguida o denominador da primeira fração pelo numerador da segunda
            fração.
          </p>
          <p>Obtemos assim:</p>
        </>
      )}
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
