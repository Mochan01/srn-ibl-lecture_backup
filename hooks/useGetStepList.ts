import { useContext, useMemo } from "react";
import { StepListContext, StepListProviderState } from "../components/providers/StepListProvider/StepListProvider";

interface UseGetStepListExport extends StepListProviderState {
  currentProgress: number
}

export const useGetStepList = (): UseGetStepListExport => {

  const { stepList, setStepList } = useContext(StepListContext);

  const currentProgress = useMemo(() => {
    return stepList && stepList.length - 1;
  }, [JSON.stringify(stepList)]);

  return {
    stepList,
    setStepList,
    currentProgress
  };
};
