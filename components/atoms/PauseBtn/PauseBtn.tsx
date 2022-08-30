import React, { FC } from "react";
import styled from "styled-components";

export interface PauseBtnProps {
  isPlay: boolean;
  onClick?: () => void;
}

interface MainProps {
}

const Main = styled.div.attrs<MainProps>(
  (props) => ({
    style: {
    }
  })
)<MainProps>`
`;

export const PauseBtn: FC<PauseBtnProps> = ({
 isPlay,
 onClick = () => {}
}) => {
  return (
    <>
      <button onClick={ onClick }>
        { isPlay ? "一時停止" : "再生" }
      </button>
    </>
  );
};
