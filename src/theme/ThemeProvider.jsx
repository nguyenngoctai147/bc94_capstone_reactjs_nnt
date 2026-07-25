import { ThemeProvider } from "flowbite-react";
import { flowbiteTheme } from "./flowbiteTheme";

export default function AppTheme(props) {
  const { children } = props;
  return <ThemeProvider theme={flowbiteTheme}>{children}</ThemeProvider>;
}
