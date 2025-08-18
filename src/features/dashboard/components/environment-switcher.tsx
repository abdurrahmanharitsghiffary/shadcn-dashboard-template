'use client';

import * as React from 'react';
import { ChevronsUpDown, Plus, Radio } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { IconSandbox } from '@tabler/icons-react';
import { useUiStore } from '@/store/ui';

const environments = [
  {
    name: 'Production',
    logo: Radio,
    environment: 'live' as const,
  },
  {
    name: 'Sandbox',
    logo: IconSandbox,
    environment: 'sandbox' as const,
  },
];

export function EnvironmentSwitcher() {
  const { isMobile } = useSidebar();

  const environment = useUiStore((c) => c.environment);
  const { setEnvironment } = useUiStore();

  const activeEnvironment = environments.find(
    (e) => e.environment === environment,
  );

  if (!activeEnvironment) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <activeEnvironment.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeEnvironment.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  Environment
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Environment
            </DropdownMenuLabel>
            {environments.map((environment, index) => (
              <DropdownMenuItem
                key={environment.name}
                onClick={() => setEnvironment(environment.environment)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <environment.logo className="size-3.5 shrink-0" />
                </div>
                {environment.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
