import React, { createContext, useState } from "react";
export const ResourceLoadedContext = createContext(null);
/**
 * リソースがロードされたか？を管理
 * @param param0
 * @returns
 */
export const ResourceLoadedProvider = ({ children }) => {
    const [resourceLoaded, setResourceLoaded] = useState(false);
    return (React.createElement(ResourceLoadedContext.Provider, { value: { resourceLoaded, setResourceLoaded } }, children));
};
//# sourceMappingURL=ResourceLoadedProvider.js.map