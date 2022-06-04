import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    minimal: { control: "boolean" },
    size: {
      control: { type: "radio" },
      options: ["small", "regular", "large"],
    },
    intent: {
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "danger"],
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...Default.args,
  children: "Button",
  loading: false,
  disabled: false,
  minimal: false,
  size: "small",
  intent: "default",
};
