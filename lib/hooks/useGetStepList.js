import { useContext, useMemo } from "react";
import { StepListContext } from "../components/providers/StepListProvider/StepListProvider";
export const useGetStepList = () => {
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
//# sourceMappingURL=useGetStepList.js.map