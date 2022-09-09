import { useEffect, useState } from "react";
/**
 * オブジェクトが取るべきスケールを返す
 * @returns スケール
 */
export const useScalable = () => {
    const [percentage, setPercentage] = useState(1);
    useEffect(() => {
        const func = () => {
            const FULL_WIDTH = 1200;
            const ZERO = 100;
            let percentage = window.innerWidth / FULL_WIDTH;
            percentage = percentage * ZERO;
            percentage = Math.floor(percentage);
            percentage = percentage / ZERO;
            if (percentage > 1)
                return;
            setPercentage(percentage);
        };
        func();
        window.addEventListener("resize", func);
        return () => window.removeEventListener("resize", func);
    }, []);
    return percentage;
};
//# sourceMappingURL=useScalable.js.map