import { Variant } from "../types";

export const getColor = (variant: Variant) => {
  switch (variant) {
    case "GRAY":
      return "#5A5A5A";
    case "RED":
      return "#fff";
    case "WHITE":
      return "#e2365f";
  }
};
