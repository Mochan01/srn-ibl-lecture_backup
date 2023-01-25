import { Variant } from "../types";

export const keys = ["GRAY", "RED", "WHITE"] as const;

export const variants: { [key in Variant]: string } = {
  /**
   * Answer_button_greyout.png
   */
  GRAY: "0 -3153px",
  /**
   * Answer_button_select.png
   */
  RED: "0 -3217px",
  /**
   * Answer_button.png
   */
  WHITE: "0 -3281px",
} as const;
