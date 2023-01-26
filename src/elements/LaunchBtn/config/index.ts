import { Variant } from "../types";

const ImageOff = new URL(
  "../../../assets/prod/button_launch_off.png",
  import.meta.url
).toString();
const ImageBefore = new URL(
  "../../../assets/prod/button_launch_before_click.png",
  import.meta.url
).toString();
const ImageAfter = new URL(
  "../../../assets/prod/button_launch_after_click.png",
  import.meta.url
).toString();

export const keys = ["OFF", "BEFORE", "AFTER"] as const;

export const variants: { [key in Variant]: string } = {
  OFF: ImageOff,
  BEFORE: ImageBefore,
  AFTER: ImageAfter,
} as const;
