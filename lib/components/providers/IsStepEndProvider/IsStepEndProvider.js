import React, { createContext, useState } from "react";
export const IsStepEndContext = createContext(null);
/**
 * リソースがロードされたか？を管理
 * @param param0
 * @returns
 */
export const IsStepEndProvider = ({ children }) => {
    const [isStepEnd, setIsStepEnd] = useState(false);
    return (React.createElement(IsStepEndContext.Provider, { value: { isStepEnd, setIsStepEnd } }, children));
};
//# sourceMappingURL=IsStepEndProvider.js.map