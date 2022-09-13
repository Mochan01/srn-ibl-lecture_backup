import { StepListProviderState } from "../components/providers/StepListProvider/StepListProvider";
import { StepProps } from "../variable_types/StepProps";
interface UseGetStepListExport extends StepListProviderState {
    currentProgress: number;
    currentStep: StepProps;
}
export declare const useGetStepList: () => UseGetStepListExport;
export {};
