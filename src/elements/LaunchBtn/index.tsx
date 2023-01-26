import React, { FC } from "react";
import styled from "styled-components";
import { Variant } from "./types";
import { variants } from "./config";

export interface LaunchBtnProps {
  variant: Variant;
  onClick?: () => void;
  className?: string;
}

const Main = styled.div<Pick<LaunchBtnProps, "variant">>(
  ({ variant }) => `
  width: 246px;
  height: 59px;
  background-image: url(${variants[variant]});
  background-repeat: no-repeat;
  cursor: ${variant === "BEFORE" ? "pointer" : "auto"};
  position: relative;
`
);

export const LaunchBtn: FC<LaunchBtnProps> = ({
  variant,
  onClick: fn,
  className,
}) => {
  const onClick = () => variant === "BEFORE" && fn && fn();
  return <Main role="button" {...{ onClick, variant, className }}></Main>;
};
