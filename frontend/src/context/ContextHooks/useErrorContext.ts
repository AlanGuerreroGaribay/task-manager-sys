import { useContext } from "react";
import { ErrorContextType } from "../../types/errorContext.type";
import { ErrorContext } from "../ErrorContext/ErrorContext";

export const useErrorContext = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useErrorContext must be used within an ErrorProvider");
  }
  return context;
};
