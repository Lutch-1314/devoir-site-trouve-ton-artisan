import { useEffect } from "react";

const useBodyScrollLock = (menuOpen) => {
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);
};

export default useBodyScrollLock;
