import React, { createContext, useState } from "react";
export const PlayContext = createContext(null);
/**
 * 再生 / 停止の状態を管理
 * @param param0
 * @returns
 */
export const PlayProvider = ({ children }) => {
    const [play, setPlay] = useState(false);
    return (React.createElement(PlayContext.Provider, { value: { play, setPlay } }, children));
};
//# sourceMappingURL=PlayProvider.js.map