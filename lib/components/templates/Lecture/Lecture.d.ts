/// <reference types="react" />
import "swiper/css/bundle";
import { LectureFrameProps } from "../../atoms/LectureFrame/LectureFrame";
/**
 * レクチャー 本体
 */
export interface LectureProps extends LectureFrameProps {
    onClickClose?: () => void;
    onClickPrev?: () => void;
    data?: object;
}
export declare const Lecture: (props: any) => JSX.Element;
