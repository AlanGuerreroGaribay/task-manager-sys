import { createContext } from "react";
import { ErrorContextType } from "../../types/errorContext.type";

export const ErrorContext = createContext<ErrorContextType | undefined>(
  undefined
);
