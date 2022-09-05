import React from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
export const PlayBtn = ({ isPlay = false, onClick = () => { } }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.PLAY_ON, as: "image" }),
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.PLAY_OFF, as: "image" }),
        React.createElement(MiniBtn, { onClick: onClick, caption: !isPlay ? "再生" : "一時停止", mutation: !isPlay
                ? MINI_BUTTON_MUTATIONS.PLAY_ON
                : MINI_BUTTON_MUTATIONS.PLAY_OFF })));
};
//# sourceMappingURL=PlayBtn.js.map