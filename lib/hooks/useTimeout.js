import { useEffect } from "react";
export const useTimeout = ({ duration, onEnd }) => {
    useEffect(() => {
        let timer;
        timer = setTimeout(onEnd, duration);
        return () => clearTimeout(timer);
    }, []);
};
//# sourceMappingURL=useTimeout.js.map