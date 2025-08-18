'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { Check, Copy } from 'lucide-react';
import React, { ComponentProps, useState } from 'react';

type ApiKeyDisplayProps = {
  apiKey?: string;
  label?: string;
} & ComponentProps<typeof Input>;

export default function ApiKeyDisplay({
  apiKey: ak,
  label,
  ...props
}: ApiKeyDisplayProps) {
  const [copiedText, copy] = useCopyToClipboard();
  const [apiKey, setApiKey] = useState(ak);
  const isMounted = useIsMounted();

  const handleRefresh = async () => {
    const newApiKey = crypto.randomUUID();
    setApiKey(newApiKey);
    await copy(newApiKey);
  };

  const uniqueID = crypto.randomUUID();
  const htmlID = 'api-key-refresh-' + uniqueID;

  // Placeholder to avoid SSR Mismatch because the uniqueID will be generated two times in client side and server side, and make the button disabled on the SSR
  if (!isMounted) {
    return (
      <div className="flex gap-2 flex-col">
        <Label htmlFor="placeholder-id">{label}</Label>
        <div className="flex items-center gap-2">
          <Input
            id="placeholder-id"
            disabled
            value={apiKey?.slice(0, 3) + '....' + apiKey?.slice(-2)}
            {...props}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                disabled
                variant="outline"
                size="icon"
                onClick={handleRefresh}
              >
                {copiedText ? <Check /> : <Copy />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copiedText ? 'Copied' : 'Copy to Clipboard'}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2 flex-col">
      <Label htmlFor={htmlID}>{label}</Label>
      <div className="flex items-center gap-2">
        <Input
          id={htmlID}
          disabled
          value={apiKey?.slice(0, 3) + '....' + apiKey?.slice(-2)}
          {...props}
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" onClick={handleRefresh}>
              {copiedText ? <Check /> : <Copy />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copiedText ? 'Copied' : 'Copy to Clipboard'}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
