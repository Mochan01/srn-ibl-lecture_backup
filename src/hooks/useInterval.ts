import { useEffect } from "react";

/**
 * ボタンを点滅させる用
 * @param callback 
 */
export const useInterval = (callback: () => void) => {

  useEffect(() => {
    const interval = setInterval(callback, 1000);
    return () => clearInterval(interval);
  }, []);

};
