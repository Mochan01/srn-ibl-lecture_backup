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
  launch_key: typeof keys[number];
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
    width: 960px;
    height: 540px;
  }
`;

/**
 * svgアニメーションを用いた演出 ロケット発射から人工衛星の切り離しまで
 * @param param0
 * @returns
 */
export const LaunchAnimation: FC<LaunchAnimationProps> = ({
  launch_key,
  rocketID,
  busID,
  batteryID,
}) => {
  // lottieオブジェクトの再生や停止などはここで行う
  useEffect(() => {
    if (launch_key === "standby") {
      lottie.stop("rocket");
    }
    if (launch_key === "countdown") {
      lottie.stop("rocket");
      lottie.play("countdown");
    }
    if (launch_key === "launch") {
      lottie.play("rocket");
      lottie.play("smog");
    }
    if (launch_key === "injection") {
      lottie.play("injectionObject");
    }
  }, [launch_key]);

  return (
    <Main>
      {/** 背景 */}
      <LaunchBg img={launch_key === "injection" ? scane2_bg : scane1_bg} />
      {(launch_key === "standby" || launch_key === "countdown" || launch_key === "launch") && (
        <LottieObject
          path={lottiePath[`scene1_rocket_${rocketID}.json`]}
          name="rocket"
        />
      )}
      {launch_key === "countdown" && (
        <>
          <LottieObject
            path={lottiePath["scene1_rocket_countdown.json"]}
            name="countdown"
          />
        </>
      )}
      {launch_key === "launch" && (
        <>
          <LottieObject
            path={lottiePath["scene1_rocket_launch_smog.json"]}
            name="smog"
          />
        </>
      )}
      {launch_key === "injection" && (
        <>
          <LottieObject
            path={lottiePath[`scene2_satellitebus_${busID}.json`]}
            name="injectionObject"
          />
          <LottieObject
            path={lottiePath[`scene2_solarcell_${batteryID}.json`]}
            name="injectionObject"
          />
          <LottieObject
            path={lottiePath[`scene2_rocket_${rocketID}.json`]}
            name="injectionObject"
          />
        </>
      )}
    </Main>
  );
};
