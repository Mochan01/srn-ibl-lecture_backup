import { useContext, useMemo } from "react";
import { JsonDataProviderContext, GlobalStateContext } from "../providers";
import { handleJsonData, getStepData, getSlideData } from "../utils";

export const useGetNextStep = (isStepEnd: boolean) => {
  const { progress } = useContext(GlobalStateContext);
  const data = useContext(JsonDataProviderContext);

  const nextStep = useMemo(() => {
    const getJsonData = handleJsonData(data, progress);
    if (!isStepEnd) return;

    const message = "Prevented next step ";

    // 回答画面があれば停止
    // 回答を押して進んでもらう
    const { next_steps } = getJsonData(getStepData);
    if (next_steps.next_step === "on_answer") {
      console.log(message + "by quiz");
      return;
    }

    // カウントダウンボックスが出る場所は停止
    // 「END」を押して進んでもらう
    if (next_steps.next_step === "countdown_end") {
      console.log(message + "count down");
      return;
    }

    // 最後のステップなら停止
    // 「次ページ」を押して進んでもらう
    if (
      getJsonData(getStepData).progress.step >= getJsonData(getSlideData).length
    ) {
      console.log(message + "because of last step");
      return;
    }

    return getJsonData(getStepData).next_steps.goto_step;
  }, [isStepEnd, data, progress]);

  return nextStep;
};
