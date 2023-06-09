import { CSSProp } from "styled-components";

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
