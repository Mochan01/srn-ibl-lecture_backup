import { StepListProviderState } from "../components/providers/StepListProvider/StepListProvider";
interface UseGetStepListExport extends StepListProviderState {
    currentProgress: number;
}
export declare const useGetStepList: () => UseGetStepListExport;
export {};
