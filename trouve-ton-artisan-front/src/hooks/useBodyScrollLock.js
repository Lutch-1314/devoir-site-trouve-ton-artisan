import { useEffect } from "react";

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isLocked);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isLocked]);
};

export default useBodyScrollLock;