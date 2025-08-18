import React from 'react';
import DashboardContainer from '../dashboard/components/container';
import ApiKeyDisplay from '../api-key/components/api-key-display';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function PageContent() {
  return (
    <DashboardContainer>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <h1 className="text-4xl font-bold mx-4 lg:mx-6">Settings</h1>
        <div className="px-4 lg:px-6 flex flex-col gap-6">
          <div className="flex gap-4 w-full">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex gap-2 flex-col">
                  <Label htmlFor="username">Username</Label>
                  <div className="flex items-center gap-2">
                    <Input id="username" defaultValue="Crypto Store" />
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center gap-2">
                    <Input disabled id="email" defaultValue="admin@gmail.com" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled variant="secondary">
                  Update Profile
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <ApiKeyDisplay
                  label="Sanbox API Key"
                  apiKey="lolerasdjsalkdhsdhsahdiopop"
                  placeholder="Sandbox API Key"
                />
                <ApiKeyDisplay
                  label="Production API Key"
                  apiKey="lolerasdjsalkdhsdhsahdiopop"
                  placeholder="Production API Key"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
}
