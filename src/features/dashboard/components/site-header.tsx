import { CommandMenu } from '@/components/ui/command-menu';
import InputWithAdornment from '@/components/ui/input-addornment';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/features/dashboard/components/theme-toggle';

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex gap-1 items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />

          <h1 className="text-base font-medium">Documents</h1>
        </div>

        <div className="flex justify-between gap-2">
          <InputWithAdornment
            placeholder="Search"
            rightAddornment={<CommandMenu />}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
