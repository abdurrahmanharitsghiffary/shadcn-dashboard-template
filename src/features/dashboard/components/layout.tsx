import { AppSidebar } from '@/features/dashboard/components/app-sidebar';
import { SiteHeader } from '@/features/dashboard/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 14)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col overflow-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
