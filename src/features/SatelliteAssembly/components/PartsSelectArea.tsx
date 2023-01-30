import React, { FC } from "react";
import styled from "styled-components";
import { PartsSelectBtn } from "../../../elements/PartsSelectBtn";
import { PartsSelectSlider } from "../../../elements/PartsSelectSlider";
import { PartsSelectTab } from "../../../elements/PartsSelectTab";
import { PartDetailUnit } from "./PartDetailUnit";
const Main = styled.div``;
export const backGroundWhiteColor = "#fafbfd " as const;
const PartDetailArea = styled.div`
  height: 340px;
  width: 680px;
  position: relative;
  background-color: ${backGroundWhiteColor};
`;
const BtnArea = styled.div`
  position: absolute;
  top: 285px;
  right: 40px;
`;
const SSelectArea = styled.div`
  background-color: ${backGroundWhiteColor};
  height: 500px;
  width: 680px;
`;

const tmpPartsSelectSliderProps = {
  selectIndex: 0,
  selectedIndexes: [1, 2],
  items: [
    { name: "ああああああああ", image: "https://placekitten.com/116/116" },
    { name: "いいいいいいい", image: "https://placekitten.com/117/116" },
    { name: "うううううう", image: "https://placekitten.com/118/116" },
    { name: "えええええ", image: "https://placekitten.com/119/116" },
    { name: "おおおお", image: "https://placekitten.com/112/116" },
  ],
  onSelect: (i: number) => console.log(`${i}番目を選択した`),
};
export const PartsSelectArea: FC = () => {
  return (
    <Main>
      <PartsSelectTab index={0} onChange={() => console.log("tabClick")} />
      <SSelectArea>
        <PartDetailArea>
          <PartDetailUnit />
          <BtnArea>
            <PartsSelectBtn
              isSelected={true}
              onClick={() => console.log("click")}
            />
          </BtnArea>
        </PartDetailArea>
        <PartsSelectSlider {...tmpPartsSelectSliderProps} />
      </SSelectArea>
    </Main>
  );
};
