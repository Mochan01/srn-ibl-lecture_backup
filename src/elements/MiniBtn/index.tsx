import React, { FC } from "react";
import styled from "styled-components";
const ImageLecture = new URL(
  "../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

const variants = {
  /* lecture_button_next_flashing_1.png */
  flashing1: "0 -2513px",
  /* lecture_button_next_flashing_2.png */
  flashing2: "0 -2577px",
  /* lecture_button_again_on.png */
  againOn: "0 -2321px",
  /* lecture_button_again_off.png */
  againOff: "0 -2257px",
  /* lecture_button_next_on.png */
  nextOn: "0 -2705px",
  /* lecture_button_next_off.png */
  nextOff: "0 -2641px",
  /* lecture_button_previous_on.png */
  prevOn: "0 -2961px",
  /* lecture_button_previous_off.png */
  prevOff: "0 -2897px",
  /* lecture_button_play_on.png */
  playOn: "0 -2833px",
  /* lecture_button_play_off.png */
  playOff: "0 -2769px",
  /* lecture_button_stop_on.png */
  pauseOn: "0 -3089px",
  /* lecture_button_stop_off.png */
  pauseOff: "0 -3025px",
  /* lecture_button_end_on.png */
  lectureEndOn: "0 -2449px",
  /* lecture_button_end_off.png */
  lectureEndOff: "0 -2385px",
} as const;

export interface MiniBtnProps {
  variant: keyof typeof variants;
  hoverVariant: keyof typeof variants;
  isActive?: boolean;
  caption: string;
  onClick?: () => void;
  className?: string;
}

const Button = styled.div<
  Pick<MiniBtnProps, "variant" | "hoverVariant" | "isActive">
>`
  background-image: url(${ImageLecture});
  background-position: ${({ variant }) => variants[variant]};
  background-repeat: no-repeat;
  width: 102px;
  height: 60px;
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  filter: ${({ isActive }) => (isActive ? "none" : "brightness(50%)")};
  position: relative;
  margin-bottom: 4px;
  &:hover {
    background-position: ${({ hoverVariant }) => variants[hoverVariant]};
  }
`;

const TEXT_H = 14;
const Label = styled.p`
  bottom: -${TEXT_H + 2}px;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  font-size: ${TEXT_H}px;
  height: ${TEXT_H}px;
  color: #fff;
`;

export const MiniBtn: FC<MiniBtnProps> = ({
  variant,
  hoverVariant,
  isActive = true,
  caption,
  onClick,
  className,
}) => {
  return (
    <div
      // role="button"
      tabIndex={0}
      {...{ onClick, className }}
      css={isActive ? "cursor: pointer" : ""}
    >
      <Button {...{ variant, hoverVariant, isActive }} />
      <Label>{caption}</Label>
    </div>
  );
};
