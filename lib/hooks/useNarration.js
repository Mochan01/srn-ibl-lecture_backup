import { useEffect, useState } from "react";
import { useSound } from "use-sound";
/**
 * ナレーション再生
 * @param sound
 * @param onend
 */
export const useNarration = (sound) => {
    const [soundLoaded, setSoundLoaded] = useState(false);
    const [play, { stop }] = useSound(sound, {
        onload: () => {
            setSoundLoaded(true);
        },
        volume: .1
    });
    useEffect(() => {
        if (!soundLoaded)
            return;
        play();
        return () => stop();
    }, [soundLoaded]);
};
//# sourceMappingURL=useNarration.js.map