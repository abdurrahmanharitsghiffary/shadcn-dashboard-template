'use client';

import * as React from 'react';
import {
  AudioWaveform,
  Bitcoin,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Group,
  Home,
  Inbox,
  Map,
  PieChart,
  Radio,
  Search,
  Settings,
  Settings2,
  Sparkles,
  SquareTerminal,
  User,
  Users,
} from 'lucide-react';

import { NavMain } from '@/features/dashboard/components/nav-main';
import { NavProjects } from '@/features/dashboard/components/nav-projects';
import { NavUser } from '@/features/dashboard/components/nav-user';
import { TeamSwitcher } from '@/features/dashboard/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { IconSandbox } from '@tabler/icons-react';
import { EnvironmentSwitcher } from './environment-switcher';
import { NavPlain } from './nav-plain';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navPlain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Transactions',
      url: '#',
      icon: Bitcoin,
    },
    {
      title: 'Manage Users',
      url: '#',
      icon: Users,
    },
    {
      title: 'Custody',
      url: '#',
      icon: User,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex flex-col">
          {open && (
            <div className="p-2 flex flex-col gap-4">
              <span className="text-2xl font-bold">MTR Developer Platform</span>
              <div className="flex gap-1 flex-col">
                <span className="font-semibold">Toko Crypto</span>
                <span className="text-xs text-muted-foreground">
                  admin@gmail.com
                </span>
              </div>
            </div>
          )}

          <EnvironmentSwitcher />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavPlain items={data.navPlain} />
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
