import "./styles.css";

interface RectangleProps {
  width: number;
  height: number;
  numerator: number;
}

export const Rectangle = ({ width, height, numerator }: RectangleProps) => {
  const isNegative = numerator < 0;

  let num = Math.abs(numerator);

  const numberOfRectangles = Math.max(
    1,
    Math.ceil(Math.abs(numerator) / (width * height))
  );

  return (
    <div className="rectangle-container">
      {Array.from({ length: numberOfRectangles }, (_, i) => {
        return (
          <div
            className="rectangle"
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${width}, 1fr)`,
              gridTemplateRows: `repeat(${height}, 1fr)`,
            }}
          >
            {Array.from({ length: width * height }, (_, j) => {
              num -= 1;

              return (
                <div
                  key={j}
                  className="rectangle-item"
                  style={{
                    backgroundColor: !isNegative
                      ? num >= 0
                        ? "#0d43b0"
                        : "lightgray"
                      : num >= 0
                      ? "red"
                      : "lightgray",
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
