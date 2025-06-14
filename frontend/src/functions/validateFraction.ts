import type { FractionType } from "../types";

export function validateFraction(fraction: FractionType): {
  isValid: boolean;
  error?: string;
} {
  const error: string[] = [];
  const { numerator, denominator } = fraction;

  if (numerator < 0 || numerator > 16) {
    error.push("O numerador deve estar entre 0 e 16.");
  }

  if (denominator < 1 || numerator > 16) {
    error.push("O denominador deve estar entre 1 e 16.");
  }

  if (!Number.isInteger(numerator)) {
    error.push("O numerador deve ser um número inteiro.");
  }

  if (!Number.isInteger(denominator)) {
    error.push("O denominador deve ser um número inteiro.");
  }

  return {
    isValid: error.length === 0,
    error: error.length > 0 ? error[0] : undefined,
  };
}
