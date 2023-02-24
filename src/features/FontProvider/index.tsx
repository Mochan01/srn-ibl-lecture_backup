import React, { FC, ReactNode, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

export interface FontProviderProps {
  children?: ReactNode;
}

const Main = styled.div`
  &,
  & * {
    font-family: "UDデジタル教科書体 M";
  }
`;

/**
 * 子要素へWebフォントを有効化する
 * @param props
 * @returns
 */
export const FontProvider: FC<FontProviderProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const fragment = document
      .createRange()
      .createContextualFragment(
        "<script type='text/javascript' src='//typesquare.com/3/tsst/script/ja/typesquare.js?633ea7bd343c47439fc12036ac1e02e5' charset='utf-8'></script>"
      );

    ref.current.prepend(fragment);
  }, []);

  return <Main {...{ ref }} {...props} />;
};
