import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { CommonProps } from "../../../types";
import { GlobalDispatchContext } from "../../../features/LectureRoot/providers";
import { TitleBase as Main } from "../../../elements/TitleBase";
import {
  NavigationButtons,
  NavigationButtonsProps,
} from "../../../elements/NavigationButtons";
const ImageTitle = new URL(
  "../../../assets/prod/lecture_title.png",
  import.meta.url
).toString();

export interface MissionSelectBaseProps
  extends NavigationButtonsProps,
    Pick<CommonProps, "unitName" | "unitTitle"> {
  onClickSkip?: () => void;
  className?: string;
}

const UnitName = styled.h1`
  font-size: 40px;
  line-height: 1;
  margin-bottom: 40px;
  color: #1a6cf1;
  font-weight: bold;
`;

const UnitTitle = styled.h2`
  font-size: 30px;
  color: #5a5a5a;
`;

const StartBtn = styled.div`
  width: 252px;
  height: 80px;
  background-image: url(${ImageTitle});
  /* lecture_title_start.png */
  background-position: 0 -581px;
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const ButtonArea = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 130px;
`;

export const MissionSelectBase: FC<MissionSelectBaseProps> = ({
  unitName,
  unitTitle,
  missionSelect,
  onClick,
  ...props
}) => {
  const dispatch = useContext(GlobalDispatchContext);
  const [isStart, setIsStart] = useState(false);

  return (
    <>
      <Main
        {...props}
        css="position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;"
      >
        {isStart ? (
          <>
            <UnitName dangerouslySetInnerHTML={{ __html: unitName }} />
            <UnitTitle dangerouslySetInnerHTML={{ __html: unitTitle }} />
          </>
        ) : (
          <StartBtn
            role="button"
            onClick={() => {
              setIsStart(true);
              dispatch({ type: "isPlaying", val: true });
            }}
          />
        )}
      </Main>
      {isStart && (
        <ButtonArea>
          <NavigationButtons {...{ onClick, missionSelect }} />
        </ButtonArea>
      )}
    </>
  );
};
