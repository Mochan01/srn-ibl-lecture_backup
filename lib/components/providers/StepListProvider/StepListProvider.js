import React, { createContext, useReducer, useContext } from "react";
import { FactoryContext } from "../FactoryProvider/FactoryProvider";
export const StepListContext = createContext(null);
const reducerFunc = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, ...action.stepList];
        case "UPDATE":
            return action.stepList;
    }
};
/**
 * ステップの進捗管理
 * @param param0
 * @returns
 */
export const StepListProvider = ({ children }) => {
    const factory = useContext(FactoryContext);
    const [stepList, setStepList] = useReducer(reducerFunc, [factory.getCurrentStepData(0, 0)]);
    return (React.createElement(StepListContext.Provider, { value: { stepList, setStepList } }, children));
};
//# sourceMappingURL=StepListProvider.js.map