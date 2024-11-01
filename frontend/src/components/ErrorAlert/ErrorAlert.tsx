import React, { useEffect, useState } from "react";
import { useErrorContext } from "../../context/ContextHooks/useErrorContext";

const ErrorAlert: React.FC = () => {
  const { error, clearError } = useErrorContext();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [error]);

  return (
    <>
      {error && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#000000c5] flex justify-center items-center transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onTransitionEnd={() => !visible && clearError()}
        >
          <div className="h-40 bg-red-500 text-white p-4 rounded z-50 flex flex-col justify-center ">
            <p>{error}</p>
            <button
              onClick={clearError}
              className="bg-red-800 text-sm underline p-2 mt-6 hover:text-red-200 "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
