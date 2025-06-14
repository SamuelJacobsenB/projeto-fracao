import "./styles.css";

interface BoxProps {
  children?: React.ReactNode;
  number?: number;
}

export const Box = ({ number, children }: BoxProps) => {
  return (
    <div className="box">
      {number && <span className="box-number">{number}</span>}
      {children}
    </div>
  );
};
