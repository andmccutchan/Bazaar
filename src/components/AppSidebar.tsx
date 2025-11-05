import {
  Plus,
  Home,
  Inbox,
  Settings,
  Bell,
  Shirt,
  Search,
  Plug,
  School,
  Sofa,
  BrushCleaning,
  Hammer,
  Microwave,
  BookType,
  Flower2,
  Turntable,
  PencilRuler,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenuButton,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
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

const categories = [
  {
    title: "Clothing",
    icon: Shirt,
    url: "#",
  },
  {
    title: "Electronics",
    icon: Plug,
    url: "#",
  },
  {
    title: "Furnitrue",
    icon: Sofa,
    url: "#",
  },
  {
    title: "Cleaning",
    icon: BrushCleaning,
    url: "#",
  },
  {
    title: "Tools",
    icon: Hammer,
    url: "#",
  },
  {
    title: "Appliances",
    icon: Microwave,
    url: "#",
  },
  {
    title: "Books",
    icon: BookType,
    url: "#",
  },
  {
    title: "Plants",
    icon: Flower2,
    url: "#",
  },
  {
    title: "Entertainment",
    icon: Turntable,
    url: "#",
  },
  {
    title: "School supplies",
    icon: PencilRuler,
    url: "#",
  },
];

interface AppSidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function AppSidebar({ searchTerm, setSearchTerm }: AppSidebarProps) {
  return (
    <Sidebar className="relative h-full border-r">
      <SidebarHeader>Find what you're looking for</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Input
            className="rounded-2xl"
            type="text"
            placeholder="Search Bazaar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SidebarMenu className="my-2">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon size={48} />
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
        </SidebarGroup>
        <hr />
        <SidebarGroup>
          <SidebarHeader>Categories</SidebarHeader>
          <SidebarMenu>
            {categories.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuSubButton className="flex w-full" asChild>
                  <div>
                    <item.icon />
                    <p>{item.title}</p>
                  </div>
                </SidebarMenuSubButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
