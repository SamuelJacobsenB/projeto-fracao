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
        Para facilitar a compreensão, vamos tentar simplificar a fração,
        tornando sua visualização mais intuitiva.
      </p>
      <p>
        A simplificação de frações consiste em encontrar o maior número que
        possa dividir tanto o numerador quanto o denominador sem deixar resto,
        reduzindo assim a fração para sua forma mais simples.
      </p>
      {divisor > 1 ? (
        <p>
          O maior divisor comum entre o numerador e o denominador é{" "}
          <strong>{divisor}</strong>. Isso significa que podemos dividir ambos
          por esse número, tornando a fração mais simples e fácil de
          interpretar.
        </p>
      ) : (
        <p>
          Não há nenhum divisor comum além de 1 entre o numerador e o
          denominador, o que indica que a fração já está na sua forma mais
          simplificada.
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
            numerator={simplifiedFraction.numerator}
          />
        </div>
      </div>
    </Box>
  );
};
