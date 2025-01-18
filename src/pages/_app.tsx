import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider, useTheme } from "next-themes";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

type Theme = "dark" | "light" | "system" | undefined;

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <HeroUIProvider>
        <Outlet />
        <Toaster theme={theme as Theme} />
      </HeroUIProvider>
    </ThemeProvider>
  );
};

export default App;
