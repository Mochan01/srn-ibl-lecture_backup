import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  width: 94px;
  height: 150px;
`;

export const SUnit = styled.div`
  text-align: center;
`;

export const STitle = styled.div<{ overFlag: boolean }>`
  height: 40px;
  width: 94px;
  line-height: 21px;
  margin-bottom: 8px;
  padding-top: 8px;
  color: ${({ overFlag }) => (overFlag ? "#FF0000" : "#5a5a5a")};
  font-size: 18px;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  display: flex;
`;

export const SGraph = styled.div`
  position: relative;
`;

export const SAlertImage = styled.img`
  height: 27px;
  width: 27px;
  left: 35px;
  bottom: -26px;
  position: absolute;
  z-index: 1;
`;

export const SPie = styled.div<{
  gradient: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  width: 94px;
  height: 94px;
  font-size: 16px;
  color: #5a5a5a;
  font-weight: 700;
  background-image: radial-gradient(#f2f2f2 55%, transparent 56%),
    conic-gradient(${(props) => props.gradient});
  border-radius: 50%;
  position: absolute;
`;
