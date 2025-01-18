import { Button } from "@heroui/react";
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const Icon = theme === "dark" ? LucideSun : LucideMoon;

  return (
    <Button isIconOnly onPress={toggleTheme} variant="light">
      <Icon />
    </Button>
  );
}
