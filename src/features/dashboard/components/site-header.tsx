import { CommandMenu } from '@/components/ui/command-menu';
import InputWithAdornment from '@/components/ui/input-addornment';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/features/dashboard/components/theme-toggle';
import ProfileAvatar from './profile-avatar';

export function SiteHeader() {
  return (
    <header className="flex backdrop-blur-xl h-(--header-height) sticky top-0 z-40 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex gap-1 items-center">
          <SidebarTrigger className="-ml-1 size-9" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-6"
          />

          {/* <h1 className="text-lg font-bold">Overview</h1> */}
        </div>

        <div className="flex items-center justify-between gap-3">
          <InputWithAdornment
            className="lg:w-80"
            placeholder="Search"
            rightAddornment={<CommandMenu />}
          />
          <ThemeToggle />
          <ProfileAvatar
            name="shadcn"
            email="m@example.com"
            avatar="/avatars/shadcn.jpg"
          />
        </div>
      </div>
    </header>
  );
}
