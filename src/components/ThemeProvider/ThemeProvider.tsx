import { ThemeProvider as _ThemeProvider } from "@joshdschneider/formation";
import { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <_ThemeProvider theme="light">{children}</_ThemeProvider>
);
