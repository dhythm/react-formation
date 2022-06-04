import { Button as _Button } from "@joshdschneider/formation";
import { ComponentProps, FC } from "react";

export const Button: FC<ComponentProps<typeof _Button>> = ({
  ref,
  ...props
}) => <_Button {...props} />;
