import { useEffect, useState } from "react";

interface NavigatorStandalone extends Navigator {
  standalone?: boolean;
}

function UseIsPwa() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const nav = window.navigator as NavigatorStandalone;
      setIsPWA(
        window.matchMedia("(display-mode: standalone)").matches ||
          nav.standalone === true,
      );
    }
  }, []);

  return isPWA;
}

export default UseIsPwa;
