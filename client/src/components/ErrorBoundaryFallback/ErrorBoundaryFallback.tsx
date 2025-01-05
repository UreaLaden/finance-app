import { FC } from "react";
import { iFallbackComponent } from "../../utils/models";

export const ErrorBoundaryFallback: FC<iFallbackComponent> = ({ onReset }) => {
  return (
    <div>
      <h1>Something went wrong...</h1>
      <button onClick={onReset}>Try again</button>
    </div>
  );
};
