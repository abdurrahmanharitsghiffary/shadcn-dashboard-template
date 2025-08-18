import React from 'react';
import DashboardContainer from '../dashboard/components/container';
import ApiKeyRefresh from '../api-key/components/api-key-refresh';

export default function PageContent() {
  return (
    <DashboardContainer>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <h1 className="text-4xl font-bold mx-4 lg:mx-6">Settings</h1>
        <div className="px-4 lg:px-6 flex flex-col gap-6">
          <div className="flex gap-4 flex-col max-w-md">
            <ApiKeyRefresh
              label="Sanbox API Key"
              apiKey="lolerasdjsalkdhsdhsahdiopop"
              placeholder="Sandbox API Key"
            />

            <ApiKeyRefresh
              label="Production API Key"
              apiKey="lolerasdjsalkdhsdhsahdiopop"
              placeholder="Production API Key"
            />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
}
