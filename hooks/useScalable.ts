import { useEffect, useState } from "react";

/**
 * オブジェクトが取るべきスケールを返す
 * @returns スケール
 */
export const useScalable = (fullWidth: number): number => {

  const [percentage, setPercentage] = useState(1);

  useEffect(() => {

    const func = () => {
      const ZERO = 100;
      
      let percentage = window.innerWidth / fullWidth;
      percentage = percentage * ZERO;
      percentage = Math.floor(percentage);
      percentage = percentage / ZERO;

      if (percentage > 1) percentage = 1;
 
      setPercentage(percentage);
    };

    func();

    window.addEventListener("resize", func);
    return () => window.removeEventListener("resize", func);
  }, []);

  return percentage;
};
