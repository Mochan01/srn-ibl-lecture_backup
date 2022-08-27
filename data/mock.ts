import { StepNarrationProps } from "../components/molecules/Slide/Slide";

export const sound = "sample.mp3";

export const stepA: StepNarrationProps = {
  image: "sample_a.png",
  sound
};

export const stepB: StepNarrationProps = {
  image: "sample_b.png",
  sound
};

export const stepC: StepNarrationProps = {
  image: "sample_c.png",
  sound
};

export const steps: StepNarrationProps[] = [
  stepA,
  stepB,
  stepC
];
