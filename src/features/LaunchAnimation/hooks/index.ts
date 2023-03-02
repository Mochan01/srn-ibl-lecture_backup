import { useEffect } from "react";
import lottie from "lottie-web";
import { keys } from "../config";

/**
 * lottieオブジェクトの再生や停止などはここで行う
 * @param launch_key 
 * @param isStart 
 */
export const useControlAnimation = (launch_key: typeof keys[number], isStart = false) => {
  useEffect(() => {
    lottie.stop("countdown");
    lottie.stop("rocket");
    lottie.stop("smog");
    lottie.stop("injectionObject");

    if (!isStart) return;

    switch (launch_key) {
      // standbyは特に動かすものないので今のところはナシ
      // case "standby":
      //   break;
      case "countdown":
        lottie.play("countdown");
        break;
      case "launch":
        lottie.play("rocket");
        lottie.play("smog");
        break;
      case "injection":
        lottie.play("injectionObject");
        break;
    }
  }, [launch_key, isStart]);
};
