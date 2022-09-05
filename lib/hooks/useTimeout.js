"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = void 0;
var react_1 = require("react");
var useTimeout = function (_a) {
    var duration = _a.duration, onEnd = _a.onEnd;
    (0, react_1.useEffect)(function () {
        var timer;
        timer = setTimeout(onEnd, duration);
        return function () { return clearTimeout(timer); };
    }, []);
};
exports.useTimeout = useTimeout;
//# sourceMappingURL=useTimeout.js.map