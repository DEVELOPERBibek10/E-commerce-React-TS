import useTheme from "../Context/themeProvider";
import Btn from "./Btn";
import { NavigationMenu } from "./ui/navigation-menu";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <nav
      id="navBar"
      className=" border-bottom border-2 shadow-lg fixed left-0 right-0 top-0 z-10"
    >
      <NavigationMenu>
        <div className="w-screen flex items-center justify-between">
          <div className="px-6">
            <img src="/logo.svg" width={145} alt="logo" />
          </div>
          <div className="flex items-center gap-3 px-8">
            <div className="pr-12">
              <Btn isCart={true} other={null} />
            </div>
            <div
              className={`flex items-center cursor-pointer transition-transform duration-500 ${
                isDark ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
              ) : (
                <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
              )}
            </div>
          </div>
        </div>
      </NavigationMenu>
    </nav>
  );
};

export default Header;
