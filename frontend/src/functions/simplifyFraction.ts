import type { FractionType } from "../types";

export function simplifyFraction(fraction: FractionType): FractionType {
  let numerator = fraction.numerator;
  let denominator = fraction.denominator;

  const smaller = Math.min(numerator, denominator);

  for (let i = 2; i <= smaller; i++) {
    while (numerator % i === 0 && denominator % i === 0) {
      numerator /= i;
      denominator /= i;
    }
  }

  return {
    numerator: numerator,
    denominator: denominator,
  };
}
