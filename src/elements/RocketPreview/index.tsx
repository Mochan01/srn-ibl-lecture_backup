import { url } from "inspector";
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

const SImagesArea = styled.div<Pick<RocketPreviewProps, "image">>`
  width: 512px;
  height: 760px;
  /* 配列の中の画像を重ねて表示する */
  background-image: ${({ image }) => `url(${image})`};
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
const SSelectWrapper = styled.div`
  margin-top: 8px;
  border-radius: 9px;
  object-fit: cover;
`;
const SPartText = styled.div`
  width: 176px;
  padding-top: 7px;
  padding-bottom: 5px;
  padding-left: 7px;
  font-size: 16px;
  line-height: 18px;
  color: #1e3c64;
  /* 文字が透過されてしまうためrgbaで設定 */
  background-color: rgba(250, 251, 253, 0.5);
  display: block;
  border-radius: 6px;
  cursor: pointer;
`;

export interface PreviewItem
  extends Pick<
    Rocket | Bus | Battery | MissionParts,
    "part_id" | "part_name" | "category_id"
  > {}

export interface RocketPreviewProps {
  image: string;
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
  image,
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
        <SImagesArea image={image} />
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
                  <>
                    <SSelectWrapper
                      css={
                        missionPart.part_id === selectedPart
                          ? `border: solid 3px ${isSelectedColor}`
                          : "padding: 3px"
                      }
                    >
                      <SPartText
                        key={missionPart.part_id}
                        onClick={() => onClick(missionPart)}
                      >
                        {missionPart.part_name}
                      </SPartText>
                    </SSelectWrapper>
                  </>
                ))}
              </div>
              <div>
                <SPartTitle>電源パーツ</SPartTitle>
                {batteryPart && (
                  <SSelectWrapper
                    css={
                      batteryPart?.part_id === selectedPart
                        ? `border: solid 3px ${isSelectedColor}`
                        : "padding: 3px"
                    }
                  >
                    <SPartText onClick={() => onClick(batteryPart)}>
                      {batteryPart?.part_name}
                    </SPartText>
                  </SSelectWrapper>
                )}
                <SPartTitle>積載パーツ</SPartTitle>
                {busPart && (
                  <SSelectWrapper
                    css={
                      busPart?.part_id === selectedPart
                        ? `border: solid 3px ${isSelectedColor}`
                        : "padding: 3px"
                    }
                  >
                    <SPartText onClick={() => onClick(busPart)}>
                      {busPart?.part_name}
                    </SPartText>
                  </SSelectWrapper>
                )}
                <SPartTitle>打ち上げロケット</SPartTitle>
                {rocket && (
                  <SSelectWrapper
                    css={
                      rocket?.part_id === selectedPart
                        ? `border: solid 3px ${isSelectedColor}`
                        : "padding: 3px"
                    }
                  >
                    <SPartText onClick={() => onClick(rocket)}>
                      {rocket?.part_name}
                    </SPartText>
                  </SSelectWrapper>
                )}
              </div>
            </SPartsArea>
          )}
        </STextsArea>
      </Main>
    </>
  );
};
