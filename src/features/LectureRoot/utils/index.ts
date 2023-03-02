import { JsonData } from "../types";
import { Progress } from "src-ibl-lecture-master-unit/types/progress";
import { Lecture } from "src-ibl-lecture-master-unit/types";

type GetSlideData = (data: JsonData[], slide: number) => JsonData[];

type GetLastStepData = (data: JsonData[]) => JsonData;

type GetStepData = (
  data: JsonData[],
  slide: number,
  step: number
) => JsonData | undefined;

interface GetJsonData {
  (getData: GetSlideData): JsonData[];
  (getData: GetLastStepData): JsonData;
  (getData: GetStepData): JsonData;
}

export interface GetLectureData {
  (getData: GetSlideData): Lecture[];
  (getData: GetLastStepData): Lecture;
  (getData: GetStepData): Lecture;
}

interface Bundle {
  (steps: Lecture[], { slide, step }: Progress): GetLectureData;
  (steps: JsonData[], { slide, step }: Progress): GetJsonData;
}

export const getAudioPath = ({ audio }: JsonData) => audio.mp3;

/**
 * 現在の進捗にあたるスライドのデータを取得
 * @param data
 * @param slide
 * @returns
 */
export const getSlideData: GetSlideData = (data, slide) =>
  data.filter(({ progress }) => progress.slide === slide);

/**
 * すべてのデータのうち、最後のステップのデータを取得
 * @param data
 * @returns
 */
export const getLastStepData: GetLastStepData = (data) => data[data.length - 1];

/**
 * 現在の進捗にあたるステップのデータを取得
 * @param data
 * @param slide
 * @param step
 * @returns
 */
export const getStepData: GetStepData = (data, slide, step) =>
  data.find(
    ({ progress }) => progress.slide === slide && progress.step === step
  );

export const handleJsonData: Bundle =
  (steps, { slide, step }) =>
  (getData) =>
    getData(steps, slide, step) as JsonData[] & JsonData & Lecture[] & Lecture;
