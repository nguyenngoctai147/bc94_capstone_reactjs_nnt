import { createTheme } from "flowbite-react";

export const flowbiteTheme = createTheme({
  button: {
    color: {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300",
    },
  },

  navbar: {
    root: {
      base: "border-b bg-white shadow-sm",
    },
  },

  card: {
    root: {
      base: "rounded-xl shadow-md",
    },
  },
});
