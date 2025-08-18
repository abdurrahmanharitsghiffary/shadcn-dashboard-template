import DashboardLayout from '@/features/dashboard/components/layout';
import React from 'react';

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
