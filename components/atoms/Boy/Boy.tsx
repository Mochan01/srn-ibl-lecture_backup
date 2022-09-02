import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { BoySpeechProps } from "../../../variable_types/StepDataProps";

export interface BoyProps extends BoySpeechProps {
  onEnd?: () => void;
}

interface MainProps {
}

const Main = styled.div.attrs<MainProps>(
  (props) => ({
    style: {
    }
  })
)<MainProps>`
`;

export const Boy: FC<BoyProps> = ({
  boySpeechDuration,
  onEnd = () => {}
}) => {

  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(onEnd, boySpeechDuration);

    return () => clearTimeout(timer);
  }, [boySpeechDuration]);

  return (
    <>
      <Main />
    </>
  );
};
