import "./styles.css";

interface RectangleProps {
  width: number;
  height: number;
  numerator: number;
}

export const Rectangle = ({ width, height, numerator }: RectangleProps) => {
  let num = numerator + 1;

  const numberOfRectangles = Math.ceil(numerator / (width * height)) || 1;

  return (
    <div className="rectangle-container">
      {numberOfRectangles > 0 &&
        Array.from({ length: numberOfRectangles }, (_, i) => (
          <div
            className="rectangle"
            key={i}
            style={{
              gridTemplateColumns: `repeat(${width}, 1fr)`,
              gridTemplateRows: `repeat(${height}, 1fr)`,
            }}
          >
            {Array.from({ length: width * height }, (_, i) => {
              num -= 1;

              return (
                <div
                  key={i}
                  className="rectangle-item"
                  style={{
                    backgroundColor: num > 0 ? "#0d43b0" : "lightgray",
                  }}
                />
              );
            })}
          </div>
        ))}
    </div>
  );
};
