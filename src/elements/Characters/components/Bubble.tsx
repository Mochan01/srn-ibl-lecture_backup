import React, { FC, ReactNode } from "react";
import styled from "styled-components";
const ImageCommon = new URL(
  "../../../assets/prod/close_character_spritesheet.png",
  import.meta.url
).toString();

export interface BubbleProps {
  className?: string;
  children?: ReactNode;
}

const Main = styled.div`
  background-image: url(${ImageCommon});
  background-repeat: no-repeat;
  background-position: 0 -4851px;
  width: 293px;
  height: 221px;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  overflow: hidden;
  line-height: 30px;
  font-size: 20px;
  font-family: "UD デジタル 教科書体 N-B";
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  width: 200px;
`;

/**
 * キャラが喋るときの吹き出し
 * https://www.notion.so/1ca89cdacc8a4907b2894b2c29d86ba8#7f06b246a2c443f5b6a38d04d3f84089
 * @param param0
 * @returns
 */
export const Bubble: FC<BubbleProps> = ({ className, children }) => {
  return (
    <Main className={className}>
      <Wrapper dangerouslySetInnerHTML={{ __html: String(children) }} />
    </Main>
  );
};
