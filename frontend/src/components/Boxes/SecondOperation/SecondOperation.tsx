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
            Para realizar a multiplicação de frações, multiplicamos os
            numeradores entre si, obtendo o novo numerador. Em seguida,
            multiplicamos os denominadores entre si, obtendo o novo denominador.
          </p>
          <p>Assim, chegamos ao seguinte resultado:</p>
        </>
      ) : (
        <>
          <p>
            Para realizar a divisão de frações, utilizamos a regra do produto
            cruzado: multiplicamos o numerador da primeira fração pelo
            denominador da segunda, e o denominador da primeira fração pelo
            numerador da segunda.
          </p>
          <p>Assim, chegamos ao seguinte resultado:</p>
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
