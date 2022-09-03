
import { useEffect } from "react";

export interface UseTimeoutProps {
  duration: number;
  onEnd: () => void;
}

export const useTimeout = ({ duration, onEnd }: UseTimeoutProps) => {

  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(onEnd, duration);

    return () => clearTimeout(timer);
  }, []);

};
