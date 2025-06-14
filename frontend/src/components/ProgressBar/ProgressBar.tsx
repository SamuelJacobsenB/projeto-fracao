import React from "react";

import "./styles.css";

interface ProgressBarProps {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  max: number;
}

export const ProgressBar = ({
  progress,
  setProgress,
  max,
}: ProgressBarProps) => {
  return (
    <div className="progress-container">
      <button
        onClick={() => setProgress(progress !== 1 ? progress - 1 : progress)}
      >
        {"<"}
      </button>
      <div className="bar-area">
        <p>
          {progress} de {max}
        </p>
        <div className="bar">
          <div
            className="progress"
            style={{ width: `${(progress / max) * 100}%` }}
          />
        </div>
      </div>
      <button
        onClick={() => setProgress(progress !== max ? progress + 1 : progress)}
      >
        {">"}
      </button>
    </div>
  );
};
