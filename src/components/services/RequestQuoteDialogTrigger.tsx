'use client';

import * as React from 'react';
import { DialogTrigger } from '@/components/ui/dialog'; // Import DialogTrigger from shadcn
import { RequestQuoteDialog } from './RequestQuoteDialog'; // Import the actual dialog content

interface RequestQuoteDialogTriggerProps {
  serviceTitle: string;
  children: React.ReactNode; // The button or element that triggers the dialog
}

export function RequestQuoteDialogTrigger({ serviceTitle, children }: RequestQuoteDialogTriggerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </DialogTrigger>
      <RequestQuoteDialog
        serviceTitle={serviceTitle}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
}
