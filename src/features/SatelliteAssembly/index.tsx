import React, { FC } from "react";
import { LectureFrame } from "../../elements/LectureFrame";

export interface SatelliteAssemblyProps {
  /**
   * 特別レクチャー用のデータをjson化したもの
   */
  data: object;
}

/**
 * 衛生組み立て画面
 */
export const SatelliteAssembly: FC<SatelliteAssemblyProps> = ({ data }) => {
  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      {/* ここに衛生組み立て画面の実装を書く */}
    </LectureFrame>
  );
};
