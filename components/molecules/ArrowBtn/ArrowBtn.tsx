import React, { FC } from "react";
import styled from "styled-components";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";

export interface ArrowBtnProps {
  id?: string;
  $dir: "prev" | "next";
}

const Main = styled.div`
  display: inline-block;
`;

export const ArrowBtn: FC<ArrowBtnProps> = ({
  id,
  $dir
}) => {
  return (
    <>
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.NEXT_ON } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.NEXT_OFF } as="image" />
      <Main id={ id }>
        { $dir === "next" &&
          <MiniBtn
            caption="次ページ"
            mutation={ MINI_BUTTON_MUTATIONS.NEXT_ON }
          /> }
        { $dir === "prev" &&
          <MiniBtn
            caption="前ページ"
            mutation={ MINI_BUTTON_MUTATIONS.PREV_ON }
          /> }
      </Main>
    </>
  );
};
