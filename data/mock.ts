import { UnitTitleProps } from "../components/atoms/UnitTitle/UnitTitle";
import { StepProps } from "../variable_types/StepProps";

export const sound = "sample.mp3";

export const unitTitleProps: UnitTitleProps = {
  unitName: "Unit 21",
  unitTitle: "ダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストです"
};

export const questions = [
  "アリスは川辺でおねえさんのよこにすわって",
  "なんにもすることがないのでとても退屈",
  "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。",
  "「絵や会話のない本なんて、なんの役にもたたないじゃないの」とアリスは"
];

export const stepA: StepProps = {
  stepProgress: 0,
  image: "sample_a.png",
  questions,
  correctIndex: 0,
  sound
};

export const stepB: StepProps = {
  stepProgress: 0,
  image: "sample_b.png",
  questions,
  correctIndex: 0,
  sound
};

export const stepC: StepProps = {
  stepProgress: 0,
  image: "sample_c.png",
  questions,
  correctIndex: 0,
  sound
};

export const steps: StepProps[] = [
  stepA,
  stepB,
  stepC
];
