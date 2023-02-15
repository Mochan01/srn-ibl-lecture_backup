import React, { FC, useEffect } from "react";
import { keys } from "./config";
import { LaunchBg } from "./components/LaunchBg";
import { LottieObject } from "../../elements/LottieObject";
import { lottiePath } from "../../data/lottiePath";
import lottie from "lottie-web";
import styled from "styled-components";
const scane1_bg = new URL(
  "../../assets/prod/scane1_bg.png",
  import.meta.url
).toString();
const scane2_bg = new URL(
  "../../assets/prod/scane2_bg.png",
  import.meta.url
).toString();

export interface LaunchAnimationProps {
  scene: typeof keys[number];
  // > ロケットと衛星はユーザーが選択したパーツを表示したいため、アニメーションをプログラムで組む必要がある
  // https://www.notion.so/8f048516867b4679a6e6c41d1cf9c044?pvs=4#69a3acb5fda948ffb779ecbe53904c5c
  rocketID: string;
  busID: string;
  batteryID: string;
}

const Main = styled.div`
  position: relative;
  & > * {
    position: absolute;
  }
`;

/**
 * svgアニメーションを用いた演出 ロケット発射から人工衛星の切り離しまで
 * @param param0
 * @returns
 */
export const LaunchAnimation: FC<LaunchAnimationProps> = ({
  scene,
  rocketID,
  busID,
  batteryID,
}) => {
  // lottieオブジェクトの再生や停止などはここで行う
  useEffect(() => {
    lottie.play("object1");
  }, [scene]);

  return (
    <Main>
      {/** 背景 */}
      <LaunchBg img={scene === "injection" ? scane2_bg : scane1_bg} />
      {/** ↓ これは仮のLottieオブジェクトです */}
      {scene === "standby" && (
        <LottieObject path={lottiePath["tesuto.json"]} name="object1" />
      )}
    </Main>
  );
};
