import React, { createContext, useState } from "react";
export const SlideProgressContext = createContext(null);
/**
 * スライドの進捗を管理
 * @param param0
 * @returns
 */
export const SlideProgressProvider = ({ children }) => {
    const [slideProgress, setSlideProgress] = useState(0);
    return (React.createElement(SlideProgressContext.Provider, { value: { slideProgress, setSlideProgress } }, children));
};
//# sourceMappingURL=SlideProgressProvider.js.map