import { Card as _Card } from "@joshdschneider/formation";
import { ComponentProps, FC } from "react";

export const Card: FC<ComponentProps<typeof _Card>> = ({ ref, ...props }) => (
  <_Card {...props} />
);
