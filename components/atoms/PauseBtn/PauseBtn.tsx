import React, { FC, useContext } from "react";
import styled from "styled-components";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";

export interface PauseBtnProps {
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
}) => {

  const { play, setPlay } = useContext(PlayContext);

  return (
    <>
      <button onClick={ () => setPlay(s => !s) }>
        { play ? "一時停止" : "再生" }
      </button>
    </>
  );
};
