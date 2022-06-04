import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    interactive: { control: "boolean" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <h3>Analytical applications</h3>
    <p>
      User interfaces that enable people to interact smoothly with data, ask
      better questions, and make better decisions.
    </p>
    <Button>Explore products</Button>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
  interactive: false,
};
