import { Box, Rectangle, StaticFraction } from "../..";
import { createRectangle, simplifyFraction } from "../../../functions";
import type { FractionType } from "../../../types";

import "./styles.css";

interface SimplifyFractionProps {
  fraction: FractionType;
  number: number;
}

export const SimplifyFraction = ({
  fraction,
  number,
}: SimplifyFractionProps) => {
  const simplifiedFraction = simplifyFraction(fraction);
  const divisor = fraction.numerator / simplifiedFraction.numerator;

  const rectangle = createRectangle(simplifiedFraction.denominator);

  return (
    <Box number={number}>
      <h1>Simplificando a fração</h1>
      <p>
        Agora devemos tentar simplicar a fração, para que seja mias fácil de
        visualização.
      </p>
      <p>
        Para isso devemos tentar achar o maior número que divida tanto o
        numerador quanto o denominador.
      </p>
      {divisor > 1 ? (
        <p>
          Temos como maior divisor o numero {divisor}, pois tanto o numerado
          quanto o numerador podem ser divididos por ele:
        </p>
      ) : (
        <p>
          Como não há nenhum divisor em comum entre o numerador e o denominador,
          o resultado é a própria fração:
        </p>
      )}
      <div className="result-area">
        <div className="result">
          <StaticFraction fraction={simplifiedFraction} />
          {(simplifiedFraction.denominator === 1 ||
            simplifiedFraction.numerator === 0) && (
            <>
              <big>=</big>
              <big>{simplifiedFraction.numerator}</big>
            </>
          )}
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
