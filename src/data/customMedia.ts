import { generateMedia, MediaGenerator } from "styled-media-query";

export interface DeviceProps<T> {
  pc?: T;
  tb?: T;
  sp?: T;
}

const customMediaProperty: DeviceProps<number> = {
  pc: 1025, // 以上
  tb: 1024, // 以下
  sp: 480   // 以下
};

const customMediaPropertyPx = Object.keys(customMediaProperty).reduce(
  (after, key) => ({
    ...after,
    [key]: customMediaProperty[key] + "px"
  }),
  {}
);

const customMedia = generateMedia(customMediaPropertyPx) as MediaGenerator<DeviceProps<number>, any>;
export default customMedia;
