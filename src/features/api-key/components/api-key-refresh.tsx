'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy } from 'lucide-react';
import React, { ComponentProps, useState } from 'react';

type ApiKeyRefreshProps = {
  apiKey?: string;
  label?: string;
} & ComponentProps<typeof Input>;

export default function ApiKeyRefresh({
  apiKey: ak,
  label,
  ...props
}: ApiKeyRefreshProps) {
  const [apiKey, setApiKey] = useState(ak);

  const handleRefresh = () => {
    setApiKey(crypto.randomUUID());
  };

  const uniqueID = crypto.randomUUID();
  const htmlID = 'api-key-refresh-' + uniqueID;

  return (
    <div className="flex gap-2 flex-col">
      <Label htmlFor={htmlID}>{label}</Label>
      <div className="flex items-center gap-2">
        <Input
          id={htmlID}
          disabled
          value={apiKey?.slice(0, 3) + '...' + apiKey?.slice(-3)}
          {...props}
        />
        <Button variant="outline" size="icon" onClick={handleRefresh}>
          <Copy />
        </Button>
      </div>
    </div>
  );
}
