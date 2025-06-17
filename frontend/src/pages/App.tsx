import { useEffect, useState } from "react";

import {
  Box,
  ChosenCalc,
  Fraction,
  NavBar,
  Operator,
  Error,
  FirstOperation,
  EqualizeBases,
  SimplifyFraction,
  SecondOperation,
  ProgressBar,
} from "../components";
import { operation, validateFraction } from "../functions";
import type { FractionType, OperatorType } from "../types";

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
  const [operator, setOperator] = useState<OperatorType>("+");

  const [error, setError] = useState<string>("");

  const [chosenFraction, setChosenFraction] = useState<FractionType[]>([]);
  const [chosenOperator, setChosenOperator] = useState<OperatorType>("+");
  const [firstResult, setFirstResult] = useState<FractionType>({
    numerator: 1,
    denominator: 1,
  });

  const [progress, setProgress] = useState(1);

  function resetFields() {
    setF1({ numerator: 1, denominator: 1 });
    setF2({ numerator: 1, denominator: 1 });
    setFirstResult({ numerator: 1, denominator: 1 });
    setOperator("+");

    setChosenFraction([]);
    setChosenOperator("+");

    setProgress(1);
  }

  function chooseCalc() {
    const f1Validation = validateFraction(f1);
    const f2Validation = validateFraction(f2);

    if (!f1Validation.isValid) {
      setError(f1Validation.error || "Frações inválidas.");
      return;
    }

    if (!f2Validation.isValid) {
      setError(f2Validation.error || "Frações inválidas.");
      return;
    }

    if (f2.numerator === 0 && operator === "/") {
      setError("Não é possível dividir por zero.");
      return;
    }

    const result = operation([f1, f2], operator);

    setError("");
    setFirstResult(result);
    setChosenFraction([f1, f2]);
    setChosenOperator(operator);
  }

  function showBox() {
    const main = document.querySelector("main");

    if (main) {
      main.childNodes.forEach((child) => {
        if (child instanceof HTMLElement && child.id.startsWith("box")) {
          child.classList.add("hidden");
        }
      });

      main.childNodes.forEach((child) => {
        if (
          child instanceof HTMLElement &&
          child.id.endsWith(progress.toString())
        ) {
          child.classList.remove("hidden");
        }
      });
    }
  }

  useEffect(showBox, [progress, chosenFraction]);

  return (
    <>
      <NavBar />
      <main>
        <Box number={1}>
          <h1>Faça operações com frações</h1>
          <p>Insira o numerator e o denominador das frações abaixo:</p>
          <Error error={error} setError={setError} />

          <div className="fraction-area">
            <Fraction fraction={f1} setFraction={setF1} />
            <Operator operator={operator} setOperator={setOperator} />
            <Fraction fraction={f2} setFraction={setF2} />
          </div>

          <div className="btn-area">
            <button className="btn btn-reset" onClick={resetFields}>
              Apagar campos
            </button>

            {chosenFraction.length === 0 && (
              <button className="btn btn-calculate" onClick={chooseCalc}>
                Realizar cálculo
              </button>
            )}
          </div>
        </Box>

        {chosenFraction.length > 0 && (
          <ChosenCalc
            chosenFraction={chosenFraction}
            chosenOperator={chosenOperator}
          />
        )}

        {chosenFraction.length > 0 &&
          (chosenOperator === "+" || chosenOperator === "-") && (
            <>
              <EqualizeBases
                chosenFraction={chosenFraction}
                chosenOperator={chosenOperator}
              />
              <FirstOperation fraction={firstResult} />
            </>
          )}

        {chosenFraction.length > 0 &&
          (chosenOperator === "x" || chosenOperator === "/") && (
            <SecondOperation fraction={firstResult} operator={chosenOperator} />
          )}

        {chosenFraction.length > 0 && (
          <SimplifyFraction
            fraction={firstResult}
            number={chosenOperator === "+" || chosenOperator === "-" ? 5 : 4}
          />
        )}

        {chosenFraction.length > 0 && (
          <ProgressBar
            progress={progress}
            setProgress={setProgress}
            max={chosenOperator === "+" || chosenOperator === "-" ? 5 : 4}
          />
        )}
      </main>
    </>
  );
}

export default App;
