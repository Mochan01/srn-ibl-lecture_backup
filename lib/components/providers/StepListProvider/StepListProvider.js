import React, { createContext, useReducer } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
export const StepListContext = createContext(null);
const reducerFunc = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, ...action.stepList];
        case "UPDATE":
            return action.stepList;
        case "INIT":
            return [StepsFactory.getCurrentStepData(action.slideProgress, 0)];
    }
};
/**
 * ステップの進捗管理
 * @param param0
 * @returns
 */
export const StepListProvider = ({ children }) => {
    const [stepList, setStepList] = useReducer(reducerFunc, [StepsFactory.getCurrentStepData(0, 0)]);
    return (React.createElement(StepListContext.Provider, { value: { stepList, setStepList } }, children));
};
//# sourceMappingURL=StepListProvider.js.map