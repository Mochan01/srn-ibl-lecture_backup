export interface UseTimeoutProps {
    duration: number;
    onEnd: () => void;
}
export declare const useTimeout: ({ duration, onEnd }: UseTimeoutProps) => void;
