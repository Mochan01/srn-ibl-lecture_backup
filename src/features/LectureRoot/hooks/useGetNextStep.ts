import { useContext, useMemo } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import { JsonDataProviderContext, GlobalStateContext } from "../providers";
import { handleJsonData, getStepData, getSlideData } from "../utils";

export const useGetNextStep = (isStepEnd: boolean) => {
  const { progress } = useContext(GlobalStateContext);
  const data = useContext(JsonDataProviderContext);
  const getJsonData = handleJsonData(data, progress);

  const nextStep = useMemo(() => {
    if (!isStepEnd) return;

    // 回答画面があれば停止
    // 回答を押して進んでもらう
    const { next_steps } = getJsonData(getStepData);
    if (next_steps.next_step === "on_answer") return;

    // カウントダウンボックスが出る場所は停止
    // 「END」を押して進んでもらう
    if (next_steps.next_step === "countdown_end") return;

    // 最後のステップなら停止
    // 「次ページ」を押して進んでもらう
    if (
      getJsonData(getStepData).progress.step >= getJsonData(getSlideData).length
    )
      return;

    return getJsonData(getStepData).next_steps.goto_step;
  }, [isStepEnd, getJsonData]);

  return nextStep;
};
