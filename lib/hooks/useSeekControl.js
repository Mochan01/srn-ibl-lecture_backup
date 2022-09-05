"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSeekControl = void 0;
var react_1 = require("react");
/**
 * control the seek bar
 * @param points fix position
 * @param index initial index in the points
 * @param fixBasis the basis of which the position of trigger to fix
 * @returns
 */
var useSeekControl = function (points, index, fixBasis) {
    var _a = (0, react_1.useState)(points[index]), value = _a[0], setValue = _a[1];
    var getClosest = (0, react_1.useCallback)(function () {
        var closest;
        switch (fixBasis) {
            case "CENTER":
                closest = points.reduce(function (prev, curr) {
                    return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
                });
                break;
            case "EDGE":
                closest = points.reduce(function (prev, curr) {
                    return curr < value ? curr : prev;
                });
                break;
        }
        ;
        setValue(closest);
        return closest;
    }, [value]);
    return {
        value: value,
        setValue: setValue,
        getClosest: getClosest
    };
};
exports.useSeekControl = useSeekControl;
//# sourceMappingURL=useSeekControl.js.map