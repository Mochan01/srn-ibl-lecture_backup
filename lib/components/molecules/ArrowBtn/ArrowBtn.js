import React from "react";
import styled from "styled-components";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
const Main = styled.div `
  display: inline-block;
`;
export const ArrowBtn = ({ id, $dir }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.NEXT_ON, as: "image" }),
        React.createElement("link", { rel: "preload", href: MINI_BUTTON_MUTATIONS.NEXT_OFF, as: "image" }),
        React.createElement(Main, { id: id },
            $dir === "next" &&
                React.createElement(MiniBtn, { caption: "\u6B21\u30DA\u30FC\u30B8", mutation: MINI_BUTTON_MUTATIONS.NEXT_ON }),
            $dir === "prev" &&
                React.createElement(MiniBtn, { caption: "\u524D\u30DA\u30FC\u30B8", mutation: MINI_BUTTON_MUTATIONS.PREVIOUS_ON }))));
};
//# sourceMappingURL=ArrowBtn.js.map