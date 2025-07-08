import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="
        fixed z-50 right-4 
        top-4 sm:top-4       /* desktop & tablets */
        [@media(max-width:768px)]:top-20  /* mobile: push down */
        bg-background/80 backdrop-blur-sm 
        border border-border/50 
        hover:bg-accent/50 transition-all duration-300
      "
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;
