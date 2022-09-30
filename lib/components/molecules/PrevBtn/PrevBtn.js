import React from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
import { classNames } from "../../../data/ClassNames";
export const PrevBtn = ({}) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: classNames.arrowPrev },
            React.createElement(MiniBtn, { caption: "\u524D\u30DA\u30FC\u30B8", mutation: MINI_BUTTON_MUTATIONS.PREV_ON, hoverMutation: MINI_BUTTON_MUTATIONS.PREV_OFF }))));
};
//# sourceMappingURL=PrevBtn.js.map