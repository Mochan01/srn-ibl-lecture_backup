import React, { FC, useContext, useMemo } from "react";
import styled from "styled-components";
import {
  GetDataProviderContext,
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../../stores/providers";
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
  const getData = useContext(GetDataProviderContext);
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const slideLen = useMemo(
    () => getData()[getData().length - 1].progress.slide,
    [getData]
  );

  return (
    <Wrapper>
      <Grid>
        {[...Array(slideLen)].map((x, i) => (
          <Bullet
            key={i}
            isActive={progress.slide >= i + 1}
            onClick={() => {
              dispatch({
                type: "progress",
                val: { slide: i + 1, step: 1 },
              });
            }}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};
