import { useState } from "react";

import { Box, Fraction, NavBar } from "../components";
import type { FractionType } from "../types";

import "./styles.css";

function App() {
  const [f1, setF1] = useState<FractionType>({
    numerator: 1,
    denominator: 1,
  });

  const [f2, setF2] = useState<FractionType>({
    numerator: 1,
    denominator: 1,
  });

  return (
    <>
      <NavBar />
      <main>
        <Box number={1}>
          <h1>Faça operações com frações</h1>
          <p>Insira o numerator e o denominador das frações abaixo:</p>
          <div className="fraction-area">
            <Fraction fraction={f1} setFraction={setF1} />
            <Fraction fraction={f2} setFraction={setF2} />
          </div>
        </Box>
      </main>
    </>
  );
}

export default App;
