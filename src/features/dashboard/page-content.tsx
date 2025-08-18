import { AppSidebar } from '@/features/dashboard/components/app-sidebar';
import { ChartAreaInteractive } from '@/features/dashboard/components/chart-area-interactive';
import { DataTable } from '@/features/dashboard/components/data-table';
import { SectionCards } from '@/features/dashboard/components/section-cards';
import { SiteHeader } from '@/features/dashboard/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import data from './data.json';
import { DateFilter } from './components/date-filter';
import { Button } from '@/components/ui/button';
import { ChartBarMultiple } from './components/bar-chart';
import { PieChartDemo } from './components/pie-chart';

export default function PageContent() {
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
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-6 flex gap-2 items-center">
                <DateFilter />
                <Button>Filter</Button>
              </div>
              <SectionCards />
              <div className="px-4 lg:px-6 flex flex-col gap-6">
                <div className="flex gap-4">
                  <PieChartDemo />
                  <ChartBarMultiple />
                </div>
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
