import { useEffect } from "react";

const useHeaderHeight = () => {
  useEffect(() => {
    const header = document.querySelector(".header");

    const updateHeight = () => {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
};

export default useHeaderHeight;