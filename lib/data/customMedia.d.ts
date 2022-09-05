import { MediaGenerator } from "styled-media-query";
export interface DeviceProps<T> {
    pc?: T;
    tb?: T;
    sp?: T;
}
declare const customMedia: MediaGenerator<DeviceProps<number>, any>;
export default customMedia;
