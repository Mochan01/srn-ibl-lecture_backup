import React, { FC } from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export interface LectureBaseProps {
  onClick?: () => void;
}

/* lecture_base.png */
const Main = styled.div`
	width: 1286px;
	height: 965px;
  background-image: url(${ ImageLecture });
  background-repeat: no-repeat;
  background-position: 0 0;
`;

export const LectureBase: FC<LectureBaseProps> = () => <Main />;
