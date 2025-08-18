import { ChartAreaInteractive } from '@/features/dashboard/components/chart-area-interactive';
import { DataTable } from '@/features/dashboard/components/data-table';
import { SectionCards } from '@/features/dashboard/components/section-cards';

import data from './data.json';
import { DateFilter } from './components/date-filter';
import { Button } from '@/components/ui/button';
import { ChartBarMultiple } from './components/bar-chart';
import { PieChartDemo } from './components/pie-chart';
import DashboardContainer from './components/container';
import { IconFileExport } from '@tabler/icons-react';

export default function PageContent() {
  return (
    <DashboardContainer>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <h1 className="text-4xl font-bold mx-4 lg:mx-6">Overview</h1>
        <div className="px-4 lg:px-6 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <DateFilter />
            <Button variant="outline">Filter</Button>
          </div>
          <Button variant="secondary">
            Export <IconFileExport />
          </Button>
        </div>
        <SectionCards />
        <div className="px-4 lg:px-6 flex flex-col gap-6">
          <div className="flex gap-4 flex-col lg:flex-row">
            <PieChartDemo />
            <ChartBarMultiple />
          </div>
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </div>
    </DashboardContainer>
  );
}
