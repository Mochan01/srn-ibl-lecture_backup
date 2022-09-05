"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNarration = void 0;
var react_1 = require("react");
var use_sound_1 = require("use-sound");
/**
 * ナレーション再生
 * @param sound
 * @param onend
 */
var useNarration = function (sound) {
    var _a = (0, react_1.useState)(false), soundLoaded = _a[0], setSoundLoaded = _a[1];
    var _b = (0, use_sound_1.useSound)(sound, {
        onload: function () {
            setSoundLoaded(true);
        },
        volume: .1
    }), play = _b[0], stop = _b[1].stop;
    (0, react_1.useEffect)(function () {
        if (!soundLoaded)
            return;
        play();
        return function () { return stop(); };
    }, [soundLoaded]);
};
exports.useNarration = useNarration;
//# sourceMappingURL=useNarration.js.map