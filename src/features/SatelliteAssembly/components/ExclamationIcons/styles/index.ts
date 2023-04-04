import styled from "styled-components";
const ImageAlert = new URL(
  "../../../../../assets/prod/icon_alert.png",
  import.meta.url
).toString();

const width = 140;
const iconSize = 25;

export const ExclamationIcon = styled.div<{ index: number }>`
  height: ${iconSize}px;
  width: ${iconSize}px;
  top: -12px;
  left: ${width}px;
  position: absolute;
  z-index: 1;
  left: ${({ index }) => width + 172 * index}px;
  background-image: url(${ImageAlert});
  background-size: cover;
  background-repeat: no-repeat;
`;
