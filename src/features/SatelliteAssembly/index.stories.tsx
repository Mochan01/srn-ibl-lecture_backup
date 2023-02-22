import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { SatelliteAssembly, SatelliteAssemblyProps } from ".";
import masterData from "../../assets/data/satellite_assembly_mock.json";

export default {
  title: "features/SatelliteAssembly",
  component: SatelliteAssembly,
} as Meta;

const template: Story<SatelliteAssemblyProps> = (args) => (
  <SatelliteAssembly {...args} />
);

export const sample = template.bind({});
sample.args = {
  selectedMissionID: "mission_1",
  masterData,
  onClick: () => console.log("打ち上げ開始！")
};
