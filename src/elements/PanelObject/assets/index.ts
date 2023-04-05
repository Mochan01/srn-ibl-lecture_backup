import { css } from "styled-components";

const distance = 200;

export const keyframes = css`
  @keyframes none {
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideup {
    from {
      transform: translateY(-${distance}px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slidedown {
    from {
      transform: translateY(${distance}px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideleft {
    from {
      transform: translateX(${distance}px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideright {
    from {
      transform: translateX(-${distance}px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes enlarge {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
`;
