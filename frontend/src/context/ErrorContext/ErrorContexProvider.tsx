import { useState } from "react";
import { ErrorContext } from "./ErrorContext";

export const ErrorContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [error, setErrorMessage] = useState<string | null>(null);

  const setError = (message: string) => setErrorMessage(message);
  const clearError = () => setErrorMessage(null);

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
