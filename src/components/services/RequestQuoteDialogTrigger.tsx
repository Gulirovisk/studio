'use client';

import * as React from 'react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog'; // Import Dialog from shadcn
import { RequestQuoteDialog } from './RequestQuoteDialog'; // Import the actual dialog content

interface RequestQuoteDialogTriggerProps {
  serviceTitle: string;
  children: React.ReactNode; // The button or element that triggers the dialog
}

export function RequestQuoteDialogTrigger({ serviceTitle, children }: RequestQuoteDialogTriggerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    // Wrap with the Dialog root component
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      {/* Render the dialog content conditionally or always, Dialog handles visibility */}
      {isOpen && <RequestQuoteDialog serviceTitle={serviceTitle} onOpenChange={setIsOpen} />}
    </Dialog>
  );
}
