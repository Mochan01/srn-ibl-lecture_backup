import React, { createContext, useState } from "react";
export const IsSlideEndContext = createContext(null);
/**
 * リソースがロードされたか？を管理
 * @param param0
 * @returns
 */
export const IsSlideEndProvider = ({ children }) => {
    const [isSlideEnd, setIsSlideEnd] = useState(false);
    return (React.createElement(IsSlideEndContext.Provider, { value: { isSlideEnd, setIsSlideEnd } }, children));
};
//# sourceMappingURL=IsSlideEndProvider.js.map