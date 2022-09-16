import { useEffect, useState } from "react";
export const useResizeWindow = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    useEffect(() => {
        const setWindowSize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", setWindowSize);
        return () => window.removeEventListener("resize", setWindowSize);
    }, []);
    return [windowWidth, windowHeight];
};
//# sourceMappingURL=useResizeWindow.js.map