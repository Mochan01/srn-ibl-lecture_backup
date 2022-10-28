import React, { FC } from "react";
import styled from "styled-components";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

const variants = {
  /* lecture_button_again_on.png */
  againOn: "0 -2420px",
  /* lecture_button_again_off.png */
  againOff: "0 -2356px",
  /* lecture_button_next_on.png */
  nextOn: "0 -2804px",
  /* lecture_button_next_off.png */
  nextOff: "0 -2740px",
  /* lecture_button_previous_on.png */
  prevOn: "0 -3060px",
  /* lecture_button_previous_off.png */
  prevOff: "0 -2996px",
  /* lecture_button_play_on.png */
  playOn: "0 -2932px",
  /* lecture_button_play_off.png */
  playOff: "0 -2868px",
  /* lecture_button_stop_on.png */
  pauseOn: "0 -3380px",
  /* lecture_button_stop_off.png */
  pauseOff: "0 -3316px",
  /* lecture_button_stop_on.png */
  lectureEndOn: "0 -3380px",
  /* lecture_button_stop_off.png */
  lectureEndOff: "0 -3316px",
} as const;

export interface MiniBtnProps {
  variant: keyof typeof variants;
  hoverVariant: keyof typeof variants;
  caption: string;
  onClick?: () => void;
  className?: string;
}

const Button = styled.div<Pick<MiniBtnProps, "variant" | "hoverVariant">>`
  background-image: url(${ImageLecture});
  background-position: ${({ variant }) => variants[variant]};
  background-repeat: no-repeat;
  width: 102px;
  height: 60px;
  cursor: pointer;
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
  caption,
  onClick,
  className,
}) => {
  return (
    <div role="button" tabIndex={0} {...{ onClick, className }}>
      <Button {...{ variant, hoverVariant }} />
      <Label>{caption}</Label>
    </div>
  );
};
