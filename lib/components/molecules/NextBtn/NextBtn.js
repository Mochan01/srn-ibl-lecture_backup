import React, { useEffect, useState } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
import { classNames } from "../../../data/ClassNames";
import { Interval } from "../../providers/Interval/Interval";
export const NextBtn = ({ isBlink = false }) => {
    const [mutation, setMutation] = useState(MINI_BUTTON_MUTATIONS.NEXT_ON);
    useEffect(() => setMutation(MINI_BUTTON_MUTATIONS.NEXT_ON), [isBlink]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: classNames.arrowNext },
            React.createElement(MiniBtn, { caption: "\u6B21\u30DA\u30FC\u30B8", mutation: mutation, hoverMutation: MINI_BUTTON_MUTATIONS.NEXT_OFF })),
        isBlink &&
            React.createElement(Interval, { callback: () => {
                    setMutation(s => s === MINI_BUTTON_MUTATIONS.NEXT_ON
                        ? MINI_BUTTON_MUTATIONS.NEXT_OFF
                        : MINI_BUTTON_MUTATIONS.NEXT_ON);
                } })));
};
//# sourceMappingURL=NextBtn.js.map