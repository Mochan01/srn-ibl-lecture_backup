import React, { FC, useContext, useEffect } from "react";
import styled from "styled-components";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { StepsProgressContext } from "../../providers/StepsProgressProvider/StepsProgressProvider";

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
  const { setStepsProgress } = useContext(StepsProgressContext);

  useEffect(() => {
    if (play) return;
    setStepsProgress(0);
  }, [play]);

  return (
    <>
      <button onClick={ () => setPlay(s => !s) }>
        { play ? "一時停止" : "再生" }
      </button>
    </>
  );
};
