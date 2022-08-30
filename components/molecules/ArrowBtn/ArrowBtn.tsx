import React, { FC } from "react";
import styled from "styled-components";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";

export interface ArrowBtnProps {
  id?: string;
  dir: "prev" | "next";
}

interface MainProps {
  dir: ArrowBtnProps["dir"];
}

const Main = styled.div<MainProps>`
  transform: ${ ({ dir }) => dir === "prev" ? "scale(-1, 1)": "none" };
`;

export const ArrowBtn: FC<ArrowBtnProps> = ({
  id,
  dir
}) => {
  return (
    <>
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.NEXT_ON } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.NEXT_OFF } as="image" />
      <Main id={ id } dir={ dir }>
        <MiniBtn mutation={ MINI_BUTTON_MUTATIONS.NEXT_ON } />
      </Main>
    </>
  );
};
