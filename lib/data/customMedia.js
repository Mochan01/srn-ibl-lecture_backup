import { generateMedia } from "styled-media-query";
const customMediaProperty = {
    pc: 1025,
    tb: 1024,
    sp: 480 // 以下
};
const customMediaPropertyPx = Object.keys(customMediaProperty).reduce((after, key) => (Object.assign(Object.assign({}, after), { [key]: customMediaProperty[key] + "px" })), {});
const customMedia = generateMedia(customMediaPropertyPx);
export default customMedia;
//# sourceMappingURL=customMedia.js.map