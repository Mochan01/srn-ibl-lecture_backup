import React, { useContext, FC } from "react";
import { GlobalStateContext, TimerContext } from "../providers";
import styled from "styled-components";

const Main = styled.div`
  background: #ddd;
  position: fixed;
  left: 20px;
  top: 60px;
  padding: 30px;
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Red = styled.span`
  color: red;
`;

const Green = styled.span`
  color: green;
`;

export const DebugWindow: FC = () => {
  const { timestamp, isPlaying, progress } =
    useContext(GlobalStateContext);
  const { time } = useContext(TimerContext);
  return (
    <Main>
      <div>
        キー：
        <span>{timestamp}</span>
      </div>
      <div>
        進捗：{progress.slide} / {progress.step}
      </div>
      <div>再生：{isPlaying ? <Green>再生</Green> : <Red>停止</Red>}</div>
      <div>
        タイマー：
        <span>{time}</span>
      </div>
    </Main>
  );
};
