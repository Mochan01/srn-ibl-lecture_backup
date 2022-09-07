import React from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
export const ReplayBtn = ({ active = false, onClick = () => { } }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.AGAIN_ON, as: "image" }),
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.AGAIN_OFF, as: "image" }),
        React.createElement(MiniBtn, { onClick: onClick, caption: "\u3082\u3046\u4E00\u5EA6", mutation: active
                ? MINI_BUTTON_MUTATIONS.AGAIN_ON
                : MINI_BUTTON_MUTATIONS.AGAIN_OFF })));
};
//# sourceMappingURL=ReplayBtn.js.map