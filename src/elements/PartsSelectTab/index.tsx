import React, { ElementType, FC, ReactNode } from "react";
import styled from "styled-components";

export const tabs = [
  "ミッションパーツ",
  "電源パーツ",
  "積載パーツ",
  "打ち上げロケット",
] as const;

export const keys = ["darkBlue", "white"] as const;

export type Variant = typeof keys[number];
export const variants: { [key in Variant]: string } = {
  darkBlue: `
    color: #F1F6F9;
    background-color: #007481;
    box-shadow: 0 0 0 1px #B2B2B2 inset;
  `,
  white: `
    color: #079BAB;
    background-color: #fff;
    box-shadow: 0 0 0 3px #079BAB inset;
  `,
} as const;

export interface TabGreenProps {
  variant: Variant;
  children?: ReactNode;
  elementType?: ElementType;
  onClick?: () => void;
  className?: string;
}
export const Tab = styled.div<TabGreenProps>(
  ({ variant }) => `
  ${variants[variant]}
  display: inline-block;
  // padding無視して文字を入れられるので横だけ削除
  padding: 10px 0;
  border-radius: 6px 6px 0 0;
  font-size: 24px;
  line-height: normal;
  cursor: pointer;
  white-space: noWrap;
  margin-left: 8px;
  text-align: center;
  &:first-child {
    margin-left: 0;
  }
`
);

export interface PartsSelectTabProps {
  onChange?: (index: number) => void;
  index: number;
  className?: string;
}

const Main = styled.div`
  display: flex;
`;

/**
 * 特別レクチャー(衛生組み立て画面）のパーツセレクト部分のタブ
 */
export const PartsSelectTab: FC<PartsSelectTabProps> = ({
  onChange,
  index,
}) => {
  return (
    <>
      <Main css="max-width: 1000px; ">
        {tabs.map((x, i) => (
          <Tab
            key={i}
            css="width: 25%;"
            variant={index === i ? "white" : "darkBlue"}
          >
            {x}
          </Tab>
        ))}
      </Main>
    </>
  );
};
