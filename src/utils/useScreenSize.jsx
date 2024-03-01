import { useEffect, useState } from "react";

function useScreenSize() {
  const [windwoSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function updateWindowSize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return windwoSize;
}

export default useScreenSize;
