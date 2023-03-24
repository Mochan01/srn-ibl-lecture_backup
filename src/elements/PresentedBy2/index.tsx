import React, { FC } from "react";
import styled from "styled-components";
const ImageLecture = new URL(
  "../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface PresentedBy2Props {
  className?: string;
}

const Main = styled.div`
  width: 236px;
  height: 64px;
  background-image: url(${ImageLecture});
  background-position: 0 -3734px;
`;

export const PresentedBy2: FC<PresentedBy2Props> = (props) => <Main {...props} />;
