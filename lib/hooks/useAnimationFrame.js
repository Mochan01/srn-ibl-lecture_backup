import { useCallback, useEffect, useRef } from "react";
export const useAnimationFrame = (isRunning, callback) => {
    const requestRef = useRef();
    // callback関数に変更があった場合のみanimateを再生成する
    const animate = useCallback(() => {
        if (!isRunning)
            return;
        callback();
        requestRef.current = requestAnimationFrame(animate);
    }, [callback, isRunning]);
    // callback関数に変更があった場合は一度破棄して再度呼び出す
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) {
                return cancelAnimationFrame(requestRef.current);
            }
        };
    }, [animate]);
};
//# sourceMappingURL=useAnimationFrame.js.map