"use client"

import * as React from "react"
import {
  Home,
  Mic,
  Folder,
  Volume2,
  Music,
} from "lucide-react"

import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Main",
      items: [
        {
          title: "Home",
          url: "/app",
          icon: Home,
        },
        {
          title: "Studio",
          url: "/app/studio",
          icon: Mic,
        },
        {
          title: "Projects",
          url: "/app/projects",
          icon: Folder,
        },
      ],
    },
    {
      title: "Assets",
      items: [
        {
          title: "Voices",
          url: "/app/voices",
          icon: Volume2,
        },
        {
          title: "Sound Effects",
          url: "/app/sound-effects",
          icon: Music,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link href={item.url} prefetch={true}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

