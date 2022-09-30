import React from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
export const ReplayBtn = ({ onClick = () => { } }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(MiniBtn, { onClick: onClick, caption: "\u3082\u3046\u4E00\u5EA6", mutation: MINI_BUTTON_MUTATIONS.AGAIN_ON, hoverMutation: MINI_BUTTON_MUTATIONS.AGAIN_OFF })));
};
//# sourceMappingURL=ReplayBtn.js.map