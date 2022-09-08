/// <reference types="react" />
import "swiper/css/bundle";
import { FrameProps } from "../../atoms/Frame/Frame";
export interface LectureProps extends FrameProps {
    onClickClose?: () => void;
    data?: object;
}
export declare const Lecture: (props: any) => JSX.Element;
