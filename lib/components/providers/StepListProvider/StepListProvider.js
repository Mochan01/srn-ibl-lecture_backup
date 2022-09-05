"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepListProvider = exports.StepListContext = void 0;
var react_1 = __importStar(require("react"));
var StepsFactory_1 = require("../../../factories/StepsFactory");
exports.StepListContext = (0, react_1.createContext)(null);
var reducerFunc = function (state, action) {
    switch (action.type) {
        case "ADD":
            return __spreadArray(__spreadArray([], state, true), action.stepList, true);
        case "UPDATE":
            return action.stepList;
        case "INIT":
            return [StepsFactory_1.StepsFactory.getCurrentStepData(action.slideProgress, 0)];
    }
};
/**
 * ステップの進捗管理
 * @param param0
 * @returns
 */
var StepListProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useReducer)(reducerFunc, [StepsFactory_1.StepsFactory.getCurrentStepData(0, 0)]), stepList = _b[0], setStepList = _b[1];
    return (react_1.default.createElement(exports.StepListContext.Provider, { value: { stepList: stepList, setStepList: setStepList } }, children));
};
exports.StepListProvider = StepListProvider;
//# sourceMappingURL=StepListProvider.js.map