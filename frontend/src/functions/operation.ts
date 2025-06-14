import type { FractionType, OperatorType } from "../types";

export function operation(
  fractions: FractionType[],
  operator: OperatorType
): FractionType {
  const [f1, f2] = fractions;

  let numerator: number;
  let denominator: number;

  switch (operator) {
    case "+":
      numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
      denominator = f1.denominator * f2.denominator;
      break;
    case "-":
      numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
      denominator = f1.denominator * f2.denominator;
      break;
    case "x":
      numerator = f1.numerator * f2.numerator;
      denominator = f1.denominator * f2.denominator;
      break;
    case "/":
      numerator = f1.numerator * f2.denominator;
      denominator = f1.denominator * f2.numerator;
      break;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }

  return { numerator, denominator };
}
