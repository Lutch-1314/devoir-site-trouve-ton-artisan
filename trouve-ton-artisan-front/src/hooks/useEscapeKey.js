import { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [callback]);
};

export default useEscapeKey;
