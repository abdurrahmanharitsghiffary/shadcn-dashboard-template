'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React, { ComponentProps, forwardRef } from 'react';

interface InputWithAdornmentProps extends ComponentProps<typeof Input> {
  rightAddornment?: React.ReactNode;
  leftAddornment?: React.ReactNode;
}

const InputWithAdornment = forwardRef<
  HTMLInputElement,
  InputWithAdornmentProps
>(({ rightAddornment, leftAddornment, className, ...props }, ref) => {
  return (
    <div className="relative flex items-center dark:bg-input/30 bg-transparent rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
      {leftAddornment ?? null}
      <Input
        ref={ref}
        className={cn(
          'border-0 focus-visible:ring-0 shadow-none !bg-transparent',
          className,
        )}
        {...props}
      />
      {rightAddornment ?? null}
    </div>
  );
});

InputWithAdornment.displayName = 'InputWithAdornment';

export default InputWithAdornment;
