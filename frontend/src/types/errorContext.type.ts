export type ErrorContextType = {
  error: string | null;
  setError: (message: string) => void;
  clearError: () => void;
};
