import { useContext, useMemo } from "react";
import { StepListContext, StepListProviderState } from "../components/providers/StepListProvider/StepListProvider";
import { StepProps } from "../variable_types/StepProps";

interface UseGetStepListExport extends StepListProviderState {
  currentProgress: number
  currentStep: StepProps;
}

export const useGetStepList = (): UseGetStepListExport => {

  const { stepList, setStepList } = useContext(StepListContext);

  const currentProgress = useMemo(() => {
    return stepList.length && stepList[stepList.length - 1].stepProgress;
  }, [JSON.stringify(stepList)]);

  const currentStep = useMemo(() => {
    return stepList.length && stepList.filter(x => x.stepProgress === currentProgress)[0];
  }, [JSON.stringify(stepList)]);

  return {
    stepList,
    setStepList,
    currentProgress,
    currentStep
  };
};
