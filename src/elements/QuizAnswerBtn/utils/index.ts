import { Variant } from "../types";

export const getColor = (variant: Variant) => {
  switch (variant) {
    case "GRAY":
      return "#222222";
    case "RED":
      return "#fff";
    case "WHITE":
      return "#e2365f";
  }
};
