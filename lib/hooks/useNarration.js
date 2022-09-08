import { useEffect, useState } from "react";
import { useSound } from "use-sound";
/**
 * ナレーション再生
 * @param sound
 * @param onLoaded
 */
export const useNarration = (sound, onLoaded) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [play, { stop }] = useSound(sound, {
        onload: () => {
            setIsLoaded(true);
            onLoaded();
        },
        volume: .1
    });
    useEffect(() => {
        if (!isLoaded)
            return;
        play();
        return () => stop();
    }, [isLoaded]);
};
//# sourceMappingURL=useNarration.js.map