'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

// Define the Zod schema for validation
const quoteSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório." }),
  email: z.string().email({ message: "Email inválido." }).min(1, { message: "Email é obrigatório." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface RequestQuoteDialogProps {
  serviceTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RequestQuoteDialog({ serviceTitle, open, onOpenChange }: RequestQuoteDialogProps) {
  const { toast } = useToast();
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    console.log('Quote request submitted:', { serviceTitle, ...data });
    // Here you would typically call your API to send the quote request
    toast({
      title: "Pedido de Orçamento Enviado",
      description: `Solicitação para "${serviceTitle}" enviada com sucesso!`,
    });
    form.reset();
    onOpenChange(false); // Close the dialog on successful submission
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Solicitar Orçamento: {serviceTitle}</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para solicitar um orçamento. O prestador entrará em contato.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu Nome Completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seuemail@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Telefone (Opcional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(XX) XXXXX-XXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva o que você precisa, informe detalhes relevantes..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
                </Button>
              <Button type="submit" variant="primary" disabled={form.formState.isSubmitting}>
                 {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Pedido'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
