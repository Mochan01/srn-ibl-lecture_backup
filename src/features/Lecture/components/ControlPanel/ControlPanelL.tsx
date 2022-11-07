import React, { FC } from "react";
import styled from "styled-components";
import { ControlPanelA } from "./ControlPanelA";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface ControlPanelLProps {
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

/**
 * lecture_star_on.png
 * lecture_star_off.png
 */
const Bullet = styled.div<{ isActive: boolean }>(
  ({ isActive }) => `
  display: block;
  background-image: url(${ImageLecture});
  background-repeat: no-repeat;
  width: 41px;
  height: 38px;
  background-position: ${isActive ? "0 -2314px" : "0 -2272px"};
  margin: auto;
  cursor: pointer;
`
);

export const ControlPanelL: FC<ControlPanelLProps> = ({
  slideLen,
  slideIndex,
  onClick,
}) => {
  return (
    <ControlPanelA>
      <Wrapper>
        <Grid>
          {[...Array(slideLen)].map((x, i) => (
            <Bullet
              key={i}
              isActive={slideIndex === i + 1}
              onClick={() => onClick(i + 1)}
            />
          ))}
        </Grid>
      </Wrapper>
    </ControlPanelA>
  );
};
