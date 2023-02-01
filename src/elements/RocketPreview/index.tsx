import React, { FC, useState } from "react";
import { Battery, Bus, Rocket } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { MissionParts } from "../../features/SatelliteAssembly/types";
const ImgOpen = new URL(
  "../../assets/prod/button_visiblity_on.png",
  import.meta.url
).toString();
const ImgClose = new URL(
  "../../assets/prod/button_visiblity_off.png",
  import.meta.url
).toString();

export const isSelectedColor = "#FFFF00" as const;

export const keys = ["OPEN", "CLOSE"] as const;

export const variants: { [key in Variant]: string } = {
  OPEN: `
    background-image: url(${ImgOpen});
  `,
  CLOSE: `
    background-image: url(${ImgClose});
  `,
} as const;

export type Variant = typeof keys[number];
export interface IconProps {
  variant: Variant;
  className?: string;
}
export const Icon = styled.div<IconProps>(
  ({ variant }) => `
  ${variants[variant]}
  width: 32px;
  height: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  cursor: pointer;
`
);

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 32px;
  padding-top: 32px;
  position: relative;
`;
const STitleArea = styled.div`
  height: 32px;
  display: flex;
  text-align: center;
`;
const STitle = styled.div`
  color: #f1f6f9;
  font-size: 20px;
  line-height: 32px;
  margin-right: 8px;
`;

const SPartsArea = styled.div`
  width: 512px;
  display: flex;
  justify-content: space-between;
`;
const STextsArea = styled.div`
  width: 200px;
  position: absolute;
`;

// TODO:画面実装時に実際の画像サイズやpxなどを調整する
const SImagesArea = styled.div<Pick<RocketPreviewProps, "images">>`
  width: 512px;
  height: 760px;
  /* 配列の中の画像を重ねて表示する */
  background-image: ${({ images }) =>
    images.map((url) => `url(${url})`).join(",")};
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 32px;
  top: 98px;
  z-index: 0;
`;
const SPartTitle = styled.div`
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
  margin-top: 16px;
  color: #f1f6f9;
`;

const SPartText = styled.div`
  width: 176px;
  font-size: 16px;
  line-height: 18px;
  margin-top: 8px;
  color: #1e3c64;
  background-color: #fafbfd;
  display: block;
  border-radius: 6px;
  opacity: 0.5;
  cursor: pointer;
`;

export interface PreviewItem
  extends Pick<
    Rocket | Bus | Battery | MissionParts,
    "part_id" | "part_name" | "category_id"
  > {}

export interface RocketPreviewProps {
  images: string[];
  selectedPart?: string;
  missionParts?: PreviewItem[];
  batteryPart?: PreviewItem;
  busPart?: PreviewItem;
  rocket?: PreviewItem;
  isShow?: boolean;
  onClick: (partItem: PreviewItem) => void;
  className?: string;
}

/**
 * 特別レクチャー(衛生組み立て画面）の衛生・ロケット画像のプレビュー部分
 */
export const RocketPreview: FC<RocketPreviewProps> = ({
  images,
  selectedPart,
  missionParts,
  batteryPart,
  busPart,
  rocket,
  isShow,
  onClick,
}) => {
  const [isShowParts, setIsShowParts] = useState(isShow);
  return (
    <>
      <Main>
        <SImagesArea images={images} />
        <STextsArea>
          <STitleArea>
            <STitle>選んだパーツ一覧</STitle>
            <Icon
              onClick={() => setIsShowParts((isShowParts) => !isShowParts)}
              variant={isShowParts ? "OPEN" : "CLOSE"}
            />
          </STitleArea>
          {isShowParts && (
            <SPartsArea>
              <div>
                <SPartTitle>ミッションパーツ</SPartTitle>
                {missionParts?.map((missionPart) => (
                  <SPartText
                    key={missionPart.part_id}
                    onClick={() => onClick(missionPart)}
                    css={
                      missionPart.part_id === selectedPart
                        ? `border: solid 3px ${isSelectedColor}`
                        : "padding: 3px"
                    }
                  >
                    {missionPart.part_name}
                  </SPartText>
                ))}
              </div>
              <div>
                <SPartTitle>電源パーツ</SPartTitle>
                {batteryPart && (
                  <SPartText
                    onClick={() => onClick(batteryPart)}
                    css={
                      batteryPart?.part_id === selectedPart
                        ? `border: solid 3px ${isSelectedColor}`
                        : "padding: 3px"
                    }
                  >
                    {batteryPart?.part_name}
                  </SPartText>
                )}
                <SPartTitle>積載パーツ</SPartTitle>
                {busPart && (
                  <SPartText
                    onClick={() => onClick(busPart)}
                    css={
                      busPart?.part_id === selectedPart
                        ? `border: solid 3px ${isSelectedColor}`
                        : "padding: 3px"
                    }
                  >
                    {busPart?.part_name}
                  </SPartText>
                )}
                <SPartTitle>打ち上げロケット</SPartTitle>
                {rocket && (
                  <SPartText
                    onClick={() => onClick(rocket)}
                    css={
                      rocket?.part_id === selectedPart
                        ? `border: solid 3px ${isSelectedColor}`
                        : "padding: 3px"
                    }
                  >
                    {rocket?.part_name}
                  </SPartText>
                )}
              </div>
            </SPartsArea>
          )}
        </STextsArea>
      </Main>
    </>
  );
};
