import React, { FC, useContext } from "react";
import styled from "styled-components";
import {
  getLastStepData,
  handleJsonData,
} from "../../../../features/LectureRoot/utils";
import {
  JsonDataProviderContext,
  GlobalStateContext,
} from "../../../../features/LectureRoot/providers";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import { useMoveProgress } from "../../../../features/LectureRoot/hooks";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface PageBulletProps {
  slideLen: number;
  slideIndex: number;
  onClick: (i: number) => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  height: 100%;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 6px;
  row-gap: 4px;
`;

/* lecture_star_on.png */
/* lecture_star_off.png */
const Bullet = styled.div<{ isActive: boolean }>(
  ({ isActive }) => `
  display: block;
  background-image: url(${ImageLecture});
  background-repeat: no-repeat;
  width: 41px;
  height: 38px;
  background-position: ${isActive ? "0 -2215px" : "0 -2173px"};
  margin: auto;
  cursor: pointer;
`
);

export const PageBullet: FC = () => {
  const { progress } = useContext(GlobalStateContext);
  const moveProgress = useMoveProgress();

  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  return (
    <Wrapper>
      <Grid>
        {[...Array(getLectureData(getLastStepData).progress.slide)].map(
          (x, i) => (
            <Bullet
              key={i}
              isActive={progress.slide >= i + 1}
              onClick={() => moveProgress({ slide: i + 1, step: 1 })}
            />
          )
        )}
      </Grid>
    </Wrapper>
  );
};
