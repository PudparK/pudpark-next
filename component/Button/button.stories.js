import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

export default {
  component: Button,
  title: "PK Button",
};

export const Default = () => (
  <Button text="Practice Text" onClick={action("Clicked")} />
);
