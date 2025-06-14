import React from "react";

import "./styles.css";

interface ErrorProps {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const Error = ({ error, setError }: ErrorProps) => {
  if (!error) {
    return null;
  }

  return (
    <div className="error">
      <p>{error}</p>
      <button onClick={() => setError("")}>⨯</button>
    </div>
  );
};
