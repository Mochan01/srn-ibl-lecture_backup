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
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.PREV_ON } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.PREV_OFF } as="image" />
      <Main id={ id }>
        <MiniBtn
          caption={
            $dir === "next"
              ? "次ページ"
              : "前ページ"
          }
          mutation={
            $dir === "next"
              ? MINI_BUTTON_MUTATIONS.NEXT_ON
              : MINI_BUTTON_MUTATIONS.PREV_ON
          }
          hoverMutation={
            $dir === "next"
              ? MINI_BUTTON_MUTATIONS.NEXT_OFF
              : MINI_BUTTON_MUTATIONS.PREV_OFF
          }
        />
      </Main>
    </>
  );
};
