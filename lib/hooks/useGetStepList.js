import { useContext, useMemo } from "react";
import { StepListContext } from "../components/providers/StepListProvider/StepListProvider";
export const useGetStepList = () => {
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
//# sourceMappingURL=useGetStepList.js.map