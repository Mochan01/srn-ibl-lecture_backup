import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Paginate, PaginateProps } from "./Pagenate";

export default {
  title: "atoms/Paginate",
  component: Paginate
} as Meta;

const Template: Story<PaginateProps> = (args) => <Paginate {...args} />;

export const Sample: { args: PaginateProps } = Template.bind({});
Sample.args = {
};
