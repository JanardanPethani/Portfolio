"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LinkTransition from "./LinkTransition";
// import VisitorCount from "./VisitorCount";

const MENUS = [
  { title: "Home", path: "/" },
  { title: "Experience", path: "/experience" },
  { title: "Blogs", path: "/blog-list" },
];

const NavBar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const path = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      <NavigationMenu className="mx-auto mt-2">
        <NavigationMenuList>
          {MENUS.map((menu) => (
            <NavigationMenuItem key={menu.path}>
              <LinkTransition
                href={menu.path}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:backdrop-blur-sm",
                  path === menu.path && "border-b-2 border-primary"
                )}
              >
                {menu.title}
              </LinkTransition>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="fixed z-10 top-2 right-2 flex items-center gap-2">
        {/* <VisitorCount /> */}

        {/* Theme icon toggle */}
        {mounted && resolvedTheme && (
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {resolvedTheme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: 0, scale: 1, opacity: 0 }}
                  animate={{ rotate: 360, scale: 1.2, opacity: 1 }}
                  exit={{ rotate: 0, scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "inline-block" }}
                >
                  <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 0, scale: 1, opacity: 0 }}
                  animate={{ rotate: 360, scale: 1.2, opacity: 1 }}
                  exit={{ rotate: 0, scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "inline-block" }}
                >
                  <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        )}
      </div>
    </>
  );
};

export default NavBar;
