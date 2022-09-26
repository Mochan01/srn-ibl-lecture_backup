/// <reference types="react" />
import "swiper/css/bundle";
import { FrameProps } from "../../atoms/Frame/Frame";
/**
 * レクチャー 本体
 */
export interface LectureProps extends FrameProps {
    onClickClose?: () => void;
    onClickPrev?: () => void;
    data?: object;
}
export declare const Lecture: (props: any) => JSX.Element;
