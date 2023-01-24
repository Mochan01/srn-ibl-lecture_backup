import React, { FC, useState } from "react";
import styled from "styled-components";
const ImgOpen = new URL(
  "../../assets/prod/button_visiblity_on.png",
  import.meta.url
).toString();
const ImgClose = new URL(
  "../../assets/prod/button_visiblity_off.png",
  import.meta.url
).toString();

export const isSelectedColor = "yellow" as const;

export const keys = ["OPEN", "CLOSE"] as const;

export const variants: { [key in Variant]: string } = {
  OPEN: `
    background-image: url(${ImgOpen});
    width: 24px;
    height: 24px;
  `,
  CLOSE: `
    background-image: url(${ImgClose});
    width: 24px;
    height: 24px;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  cursor: pointer;
`
);

const Main = styled.div`
  padding: 16px;
  width: 340px;
  height: 600px;
  /* 確認用必要無かったら消す */
  background-color: gray;
  position: relative;
`;
const STitleArea = styled.div`
  display: flex;
  text-align: center;
`;
const STitle = styled.div`
  color: #f1f6f9;
  font-size: 12px;
  line-height: 24px;
  margin-right: 8px;
`;

const SPartsArea = styled.div`
  width: 200px;
`;
const STextsArea = styled.div`
  width: 200px;
  position: absolute;
`;

// TODO:画面実装時に実際の画像サイズやpxなどを調整する
const SImagesArea = styled.div<Pick<RocketPreviewProps, "images">>`
  width: 300px;
  height: 540px;
  /* 配列の中の画像を重ねて表示する */
  background-image: ${({ images }) =>
    images.map((url) => `url(${url})`).join(",")};
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 20px;
  top: 40px;
  z-index: 0;
`;
const SPartTitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-top: 16px;
  color: #f1f6f9;
  opacity: 0.7;
`;

const SPartText = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  margin-top: 8px;
  color: #121d24;
  background-color: #9da9b1;
  display: inline-block;
  border-radius: 8px;
  opacity: 0.7;
`;

export interface RocketPreviewProps {
  images: string[];
  selectedPart?: string;
  missionParts?: string[];
  powerSupplyPart?: string;
  loadedPart?: string;
  rocket?: string;
  isShow?: boolean;
  className?: string;
}
/**
 * 特別レクチャー(衛生組み立て画面）の衛生・ロケット画像のプレビュー部分
 */
export const RocketPreview: FC<RocketPreviewProps> = ({
  images,
  selectedPart,
  missionParts,
  powerSupplyPart,
  loadedPart,
  rocket,
  isShow,
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
              <SPartTitle>ミッションパーツ</SPartTitle>
              {missionParts?.map((missionPart) => (
                <SPartText
                  key={missionPart}
                  css={
                    missionPart === selectedPart
                      ? `border: solid 4px ${isSelectedColor}`
                      : ""
                  }
                >
                  {missionPart}
                </SPartText>
              ))}
              <SPartTitle>電源パーツ</SPartTitle>
              <SPartText
                css={
                  powerSupplyPart === selectedPart
                    ? `border: solid 4px ${isSelectedColor}`
                    : ""
                }
              >
                {powerSupplyPart}
              </SPartText>
              <SPartTitle>積載パーツ</SPartTitle>
              <SPartText
                css={
                  loadedPart === selectedPart
                    ? `border: solid 4px ${isSelectedColor}`
                    : ""
                }
              >
                {loadedPart}
              </SPartText>
              <SPartTitle>打ち上げロケット</SPartTitle>
              <SPartText
                css={
                  rocket === selectedPart
                    ? `border: solid 4px ${isSelectedColor}`
                    : ""
                }
              >
                {rocket}
              </SPartText>
            </SPartsArea>
          )}
        </STextsArea>
      </Main>
    </>
  );
};
