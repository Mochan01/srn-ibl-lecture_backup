import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import React, { FC, useContext } from "react";
import {
  GlobalStateContext,
  JsonDataProviderContext,
} from "../../../../features/LectureRoot/providers";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  getStepData,
  handleJsonData,
} from "../../../../features/LectureRoot/utils";
import { useMoveProgress } from "../../../../features/LectureRoot/hooks";

export interface PrevBtnProps extends Pick<MiniBtnProps, "className"> {
  onLeave: () => void;
}

export const PrevBtn: FC<PrevBtnProps> = ({ onLeave, ...props }) => {
  const { progress } = useContext(GlobalStateContext);

  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const moveProgress = useMoveProgress();

  return (
    <MiniBtn
      {...props}
      caption="前ページ"
      variant="prevOn"
      hoverVariant="prevOff"
      onClick={() => {
        // スライドが最初の状態で戻ろうとしたらタイトルに戻したいとのこと
        if (getLectureData(getStepData).progress.slide === 1) {
          onLeave();
          return;
        }

        moveProgress({ slide: progress.slide - 1, step: 1 });
      }}
    />
  );
};
