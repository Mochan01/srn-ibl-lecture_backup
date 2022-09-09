import React, { useState } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
import { Interval } from "../../providers/Interval/Interval";
export const LectureEndBtn = ({ onClick = () => { } }) => {
    const [mutation, setMutation] = useState(MINI_BUTTON_MUTATIONS.LECTURE_END_ON);
    return (React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.LECTURE_END_ON, as: "image" }),
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.LECTURE_END_OFF, as: "image" }),
        React.createElement(MiniBtn, { onClick: onClick, caption: "\u30EC\u30AF\u30C1\u30E3\u30FC\u7D42\u4E86", mutation: mutation, hoverMutation: MINI_BUTTON_MUTATIONS.LECTURE_END_OFF }),
        React.createElement(Interval, { callback: () => {
                setMutation(s => s === MINI_BUTTON_MUTATIONS.LECTURE_END_ON
                    ? MINI_BUTTON_MUTATIONS.LECTURE_END_OFF
                    : MINI_BUTTON_MUTATIONS.LECTURE_END_ON);
            } })));
};
//# sourceMappingURL=LectureEndBtn.js.map