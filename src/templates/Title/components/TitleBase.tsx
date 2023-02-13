import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { GlobalDispatchContext } from "../../../features/LectureRoot/providers";
import { TitleBase as Main } from "../../../elements/TitleBase";
import { UnitInfo } from "../../../types/UnitInfo";
const ImageTitle = new URL(
  "../../../assets/prod/lecture_title.png",
  import.meta.url
).toString();

export interface TitleBaseProps extends UnitInfo {
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

const SkipBtn = styled.div`
  width: 180px;
  height: 59px;
  background-image: url(${ImageTitle});
  /* lecture_title_skip.png */
  background-position: 0 -518px;
  cursor: pointer;
  position: absolute;
  right: 455px;
  bottom: 219px;
`;

export const TitleBase: FC<TitleBaseProps> = ({
  unitName,
  unitTitle,
  onClickSkip,
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
        <SkipBtn
          role="button"
          onClick={() => {
            onClickSkip && onClickSkip();
          }}
        />
      )}
    </>
  );
};
