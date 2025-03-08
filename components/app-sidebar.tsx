"use client"

import { Home, Laptop2Icon, MailIcon, NotebookIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useCallback } from "react";

const items = [
  {
    title: "Home",
    url: "home",
    icon: Home
  },
  {
    title: "Experience",
    url: "work",
    icon: Laptop2Icon
  },
  {
    title: "Testimonials",
    url: "feedback",
    icon: NotebookIcon
  },
  {
    title: "Contact",
    url: "contact",
    icon: MailIcon
  }
]

export function AppSidebar() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-medium">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`#${item.url}`} onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.url);
                      }}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex gap-x-2 items-start p-2 rounded-md hover:bg-gray-200 cursor-pointer duration-300">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/111674354?v=4" alt="@shadcn" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-y-1 text-sm">
            <span>Aashman Verma</span>
            <span className="text-xs">Developer</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}