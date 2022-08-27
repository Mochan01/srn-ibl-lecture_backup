import React, { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PauseContext } from "../../providers/PauseProvider/PauseProvider";
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

  const { setStepsProgress } = useContext(StepsProgressContext);
  const { pause, setPause } = useContext(PauseContext);

  // 再生 / 停止したとき
  useEffect(() => {
    if (pause) {
      setStepsProgress(null);
      return;
    }

    setStepsProgress(0);
  }, [pause]);

  return (
    <>
      <button onClick={ () => setPause(s => !s) }>
        { pause ? "再生" : "一時停止" }
      </button>
    </>
  );
};
