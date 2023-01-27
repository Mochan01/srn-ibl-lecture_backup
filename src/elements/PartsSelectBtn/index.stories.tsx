import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PartsSelectBtn, PartsSelectBtnProps } from ".";

export default {
  title: "elements/PartsSelectBtn",
  component: PartsSelectBtn,
} as Meta;

const template: Story<PartsSelectBtnProps> = (args) => (
  <PartsSelectBtn {...args} />
);

const selectIndex = 0;
let selectedIndexes = [1, 2];
export const sample = template.bind({});
sample.args = {
  onClick: () => {
    console.log("isSelectedが更新される処理を実装");
    // 以下は例
    // 選択中の場合は削除する
    if (selectedIndexes.includes(selectIndex)) {
      selectedIndexes = selectedIndexes.filter(
        (index) => index !== selectIndex
      );
      console.log(selectedIndexes);
      return;
    }
    // 選択していない場合は追加する
    selectedIndexes.push(selectIndex);
    console.log(selectedIndexes);
  },
  isSelected: selectedIndexes.includes(selectIndex),
};
