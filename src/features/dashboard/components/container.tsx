import { cn } from '@/lib/utils';
import React from 'react';

type DashboardContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function DashboardContainer({
  className,
  ...props
}: DashboardContainerProps) {
  return (
    <div
      className={cn('@container/main flex flex-1 flex-col gap-2', className)}
      {...props}
    />
  );
}
