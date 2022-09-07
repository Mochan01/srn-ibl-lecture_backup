import React, { createContext, useState } from "react";
export const RunSeekContext = createContext(null);
/**
 * シークバー アニメーション管理
 * @param param0
 * @returns
 */
export const RunSeekProvider = ({ children }) => {
    const [isRunSeek, setIsRunSeek] = useState(false);
    return (React.createElement(RunSeekContext.Provider, { value: { isRunSeek, setIsRunSeek } }, children));
};
//# sourceMappingURL=RunSeekProvider.js.map