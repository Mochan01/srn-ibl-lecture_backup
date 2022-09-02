import { StepDataProps } from "../variable_types/StepDataProps";

export const sound = "sample.mp3";

export const questions = [
  "アリスは川辺でおねえさんのよこにすわって",
  "なんにもすることがないのでとても退屈",
  "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。",
  "「絵や会話のない本なんて、なんの役にもたたないじゃないの」とアリスは"
];

export const stepA: StepDataProps = {
  stepProgress: 0,
  image: "sample_a.png",
  questions,
  correctIndex: 0,
  sound
};

export const stepB: StepDataProps = {
  stepProgress: 0,
  image: "sample_b.png",
  questions,
  correctIndex: 0,
  sound
};

export const stepC: StepDataProps = {
  stepProgress: 0,
  image: "sample_c.png",
  questions,
  correctIndex: 0,
  sound
};

export const steps: StepDataProps[] = [
  stepA,
  stepB,
  stepC
];
