import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState, cloneElement, isValidElement } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SidebarProvider>
      <AppSidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="flex-1 overflow-auto">
        {isValidElement(children)
          ? cloneElement(children, { searchTerm } as any)
          : children}
      </main>
    </SidebarProvider>
  );
}
