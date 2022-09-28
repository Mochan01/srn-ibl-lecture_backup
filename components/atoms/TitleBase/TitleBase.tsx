import React, { FC, useState } from "react";
import styled from "styled-components";
const ImageTitle = new URL("../../../assets/prod/lecture_title.png", import.meta.url).toString();

export interface TitleBaseProps {
  unitName: string;
  unitTitle: string;
  onClick: () => void;
  className?: string;
}

const Main = styled.div`
  width: 1007px;
  height: 468px;
  background-image: url(${ ImageTitle });
  background-position: 0 0;
  background-repeat: no-repeat;
  position: relative;
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
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
    color: #1a6cf1;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    color: #5a5a5a;
  }
`;

const StartBtn = styled.div`
  width: 252px;
  height: 80px;
  background-image: url(${ ImageTitle });
  background-position:0 -472px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const TitleBase: FC<TitleBaseProps> = ({
  unitName,
  unitTitle,
  onClick,
  className
}) => {

  const [isShow, setShow] = useState(true);

  return (
    <Main className={ className }>
      <Wrapper>
        { !isShow &&
          <div>
            <h1>{ unitName }</h1>
            <h2>{ unitTitle }</h2> 
          </div> }
        { isShow &&
          <StartBtn onClick={ () => {
            onClick();
            setShow(false);
          } }/> }
      </Wrapper>
    </Main>
  );
};
