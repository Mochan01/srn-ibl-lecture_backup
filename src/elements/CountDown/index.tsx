import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useTimer } from "use-timer";

const ImageBase = new URL(
  "../../assets/prod/lecture_countdown_base.png",
  import.meta.url
).toString();
const ImageEndOn = new URL(
  "../../assets/prod/lecture_countdown_button_end_on.png",
  import.meta.url
).toString();
const ImageEndOff = new URL(
  "../../assets/prod/lecture_countdown_button_end_off.png",
  import.meta.url
).toString();

const Main = styled.div`
  background-image: url(${ImageBase});
  background-repeat: no-repeat;
  background-size: contain;
  width: 280px;
  height: 54px;
  position: relative;
`;
const TEXT_H = 46;
const STimer = styled.div`
  font-size: ${TEXT_H}px;
  letter-spacing: 2.76px;
  margin-left: 10px;
  padding: 4px;
  color: #ffffff;
  display: flex;
`;

const STime = styled.div`
  padding-top: 4px;
`;
const SColon = styled.div``;

export interface SEndButtonProps {
  variant: "on" | "off";
}

const SEndButton = styled.div<SEndButtonProps>`
  background-image: ${(props) =>
    props.variant === "on" ? `url(${ImageEndOn})` : `url(${ImageEndOff})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 110px;
  height: 41px;
  position: absolute;
  right: 4px;
  top: 6px;
`;

export interface CountDownProps {
  initialTimeSeconds: number;
  onEnd: () => void;
  className?: string;
}

/**
 * totalSecondsを元に分と秒を"00"のフォーマットで返す
 * @param totalSeconds
 * @returns
 */
const secondsToMinutesAndSeconds = (totalSeconds: number) => {
  let minutes = "00";
  let seconds = "00";
  if (totalSeconds <= 0) return { minutes, seconds };
  minutes = ("0" + Math.floor(totalSeconds / 60)).slice(-2);
  seconds = ("0" + (totalSeconds % 60)).slice(-2);
  return { minutes, seconds };
};

/**
 * カウントダウンを表示する
 */
export const CountDown: FC<CountDownProps> = ({
  initialTimeSeconds,
  onEnd,
}) => {
  const { time } = useTimer({
    autostart: true,
    initialTime: initialTimeSeconds,
    timerType: "DECREMENTAL",
  });

  // timeが0未満になった場合は一秒ごとにonとoffが切り替わる
  const variant = useMemo(
    () => (time <= 0 ? (time % 2 === 0 ? "on" : "off") : "on"),
    [time]
  );

  // 表示用の分と秒
  const { minutes, seconds } = secondsToMinutesAndSeconds(time);

  const onClick = () => {
    if (time <= 0) {
      onEnd();
      return;
    }
    // timeが0より大きい場合は確認のメッセージを出す
    if (window.confirm("本当に終了しますか？")) {
      onEnd();
      return;
    }
  };
  return (
    <Main>
      <SEndButton variant={variant} onClick={onClick} />
      <STimer>
        <STime>{minutes}</STime>
        <SColon>:</SColon>
        <STime>{seconds}</STime>
      </STimer>
    </Main>
  );
};
