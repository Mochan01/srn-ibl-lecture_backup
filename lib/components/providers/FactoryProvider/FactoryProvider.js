import React, { createContext } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
export const FactoryContext = createContext(null);
/**
 * インスタンス
 * ｓrn-ibl-lecture/factories/StepsFactory.ts
 * を下に渡すためのProvider
 * @param param0
 * @returns
 */
export const FactoryProvider = ({ children, data }) => {
    const factory = new StepsFactory(data);
    return (React.createElement(FactoryContext.Provider, { value: factory }, children));
};
//# sourceMappingURL=FactoryProvider.js.map