import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState, cloneElement, isValidElement } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { House, Store, CircleUserRound, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-between items-center border-b p-2 bg-sidebar">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Bazaar
        </h1>
        <NavigationMenu className="mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">
                  <House className="size-7" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/bazaar">
                  <Store className="size-7" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/account">
                  <CircleUserRound className="size-7" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <SidebarProvider>
        <AppSidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="flex-1 overflow-auto bg-background dark:bg-background">
          <SidebarTrigger className="block md:hidden" />
          {isValidElement(children)
            ? cloneElement(children, { searchTerm } as any)
            : children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
