import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { MainComponentProps } from "../../../types";
import { GlobalDispatchContext } from "../../../features/LectureRoot/providers";
const ImageTitle = new URL(
  "../../../assets/prod/lecture_title.png",
  import.meta.url
).toString();

export interface TitleBaseProps
  extends Pick<MainComponentProps, "unitName" | "unitTitle"> {
  onClickSkip?: () => void;
  className?: string;
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
  height: fit-content;
`;

const Base = styled.div`
  width: 1007px;
  height: 468px;
  background-image: url(${ImageTitle});
  /* lecture_title_base.png */
  background-position: 0 0;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  position: absolute;
  padding: 40px 32px;
  width: 575px;
  height: 345px;
  left: 389px;
  top: 81px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
  align-self: center;
  cursor: pointer;
`;

const SkipBtn = styled.div<{ isStart: boolean }>(
  ({ isStart }) => `
  visibility: ${isStart ? "visible" : "hidden"};
  width: 180px;
  height: 59px;
  background-image: url(${ImageTitle});
  /* lecture_title_skip.png */
  background-position: 0 -518px;
  cursor: pointer;
`
);

export const TitleBase: FC<TitleBaseProps> = ({
  unitName,
  unitTitle,
  onClickSkip,
  className,
}) => {
  const dispatch = useContext(GlobalDispatchContext);
  const [isStart, setIsStart] = useState(false);

  return (
    <Main {...{ className }}>
      <Base>
        <Wrapper>
          {isStart && (
            <UnitName dangerouslySetInnerHTML={{ __html: unitName }} />
          )}
          {isStart && (
            <UnitTitle dangerouslySetInnerHTML={{ __html: unitTitle }} />
          )}
          {!isStart && (
            <StartBtn
              role="button"
              onClick={() => {
                setIsStart(true);
                dispatch({ type: "isPlaying", val: true });
              }}
            />
          )}
        </Wrapper>
      </Base>
      <SkipBtn
        role="button"
        onClick={() => {
          if (!onClickSkip) return;
          onClickSkip();
        }}
        {...{ isStart }}
      />
    </Main>
  );
};
