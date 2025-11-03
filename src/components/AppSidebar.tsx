import { Plus, Home, Inbox, Settings, Bell } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenuButton,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

interface AppSidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function AppSidebar({ searchTerm, setSearchTerm }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Bazaar
        </h1>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <Input
          className="rounded-2xl"
          type="text"
          placeholder="Search Bazaar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <Link to="/sell">
          <Button className="w-full" variant="outline">
            Sell item <Plus />
          </Button>
        </Link>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
