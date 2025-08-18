'use client';

import { useCallback, useRef, useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string, duration?: number) => Promise<boolean>;

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copy: CopyFn = useCallback(async (text, duration = 2000) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);

      // Clear previous timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Reset after duration
      if (duration > 0) {
        timeoutRef.current = setTimeout(() => {
          setCopiedText(null);
          timeoutRef.current = null;
        }, duration);
      }

      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}
