"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimationFrame = void 0;
var react_1 = require("react");
var useAnimationFrame = function (isRunning, callback) {
    var requestRef = (0, react_1.useRef)();
    // callback関数に変更があった場合のみanimateを再生成する
    var animate = (0, react_1.useCallback)(function () {
        if (!isRunning)
            return;
        callback();
        requestRef.current = requestAnimationFrame(animate);
    }, [callback, isRunning]);
    // callback関数に変更があった場合は一度破棄して再度呼び出す
    (0, react_1.useEffect)(function () {
        requestRef.current = requestAnimationFrame(animate);
        return function () {
            if (requestRef.current) {
                return cancelAnimationFrame(requestRef.current);
            }
        };
    }, [animate]);
};
exports.useAnimationFrame = useAnimationFrame;
//# sourceMappingURL=useAnimationFrame.js.map