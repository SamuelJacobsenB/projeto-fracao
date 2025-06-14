interface RectangleType {
  width: number;
  height: number;
}

export function createRectangle(num: number): RectangleType {
  let width: number;
  let height: number;

  for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
    if (num % i === 0) {
      width = i;
      height = num / i;
      break;
    }
  }

  return { width: width!, height: height! };
}
