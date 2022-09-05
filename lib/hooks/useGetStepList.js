"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetStepList = void 0;
var react_1 = require("react");
var StepListProvider_1 = require("../components/providers/StepListProvider/StepListProvider");
var useGetStepList = function () {
    var _a = (0, react_1.useContext)(StepListProvider_1.StepListContext), stepList = _a.stepList, setStepList = _a.setStepList;
    var currentProgress = (0, react_1.useMemo)(function () {
        return stepList && stepList.length - 1;
    }, [JSON.stringify(stepList)]);
    return {
        stepList: stepList,
        setStepList: setStepList,
        currentProgress: currentProgress
    };
};
exports.useGetStepList = useGetStepList;
//# sourceMappingURL=useGetStepList.js.map