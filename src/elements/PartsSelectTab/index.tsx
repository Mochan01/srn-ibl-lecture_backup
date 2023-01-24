import React, { ElementType, FC, ReactNode, useState } from "react";
import styled from "styled-components";

export const tabs = [
  "ミッションパーツ",
  "電源パーツ",
  "積載パーツ",
  "打ち上げロケット",
] as const;

export const keys = ["darkBlue", "white"] as const;

export type Variant = typeof keys[number];

/* TODO: 色は画面実装時に再設定 */
export const variants: { [key in Variant]: string } = {
  darkBlue: `
    color: #F1F6F9;
    background-color: #11548a;
    box-shadow: 0 0 0 1px #B2B2B2 inset;
  `,
  white: `
    color: black;
    background-color: #fff;
    box-shadow: 0 0 0 3px #B2B2B2 inset;
  `,
} as const;

const Main = styled.div`
  /* TODO: 画面実装時に再設定 */
  width: 1000px;
  display: flex;
`;

export interface TabProps {
  variant: Variant;
  children?: ReactNode;
  elementType?: ElementType;
  onClick?: () => void;
  className?: string;
}
export const Tab = styled.div<TabProps>(
  ({ variant }) => `
  ${variants[variant]}
  width: 25%;
  display: inline-block;
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
  onChange: (index: number) => void;
  index: number;
  className?: string;
}

/**
 * 特別レクチャー(衛生組み立て画面）のパーツセレクト部分のタブ
 */
export const PartsSelectTab: FC<PartsSelectTabProps> = ({
  onChange,
  index,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(index);
  const onClick = (index: number) => {
    onChange(index);
    setSelectedIndex(index);
  };
  return (
    <Main>
      {tabs.map((x, i) => (
        <Tab
          key={i}
          variant={i === selectedIndex ? "white" : "darkBlue"}
          onClick={() => onClick(i)}
        >
          {x}
        </Tab>
      ))}
    </Main>
  );
};
