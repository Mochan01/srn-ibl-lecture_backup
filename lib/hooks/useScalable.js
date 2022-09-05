"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScalable = void 0;
var react_1 = require("react");
/**
 * オブジェクトが取るべきスケールを返す
 * @returns スケール
 */
var useScalable = function () {
    var _a = (0, react_1.useState)(1), percentage = _a[0], setPercentage = _a[1];
    (0, react_1.useEffect)(function () {
        var func = function () {
            var FULL_WIDTH = 1920;
            var ZERO = 100;
            var percentage = window.innerWidth / FULL_WIDTH;
            percentage = percentage * ZERO;
            percentage = Math.floor(percentage);
            percentage = percentage / ZERO;
            if (percentage > 1)
                return;
            setPercentage(percentage);
        };
        func();
        window.addEventListener("resize", func);
        return function () { return window.removeEventListener("resize", func); };
    }, []);
    return percentage;
};
exports.useScalable = useScalable;
//# sourceMappingURL=useScalable.js.map