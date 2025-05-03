'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

// Define the Zod schema for validation
const registerSchema = z.object({
  name: z.string().min(1, { message: "Nome completo é obrigatório." }),
  email: z.string().email({ message: "Email inválido." }).min(1, { message: "Email é obrigatório." }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres." }),
  confirmPassword: z.string().min(1, { message: "Confirmação de senha é obrigatória." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"], // Set the error path to confirmPassword field
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const { toast } = useToast();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register form submitted:', data);
    // Here you would typically call your registration API
    toast({
      title: "Tentativa de Registro",
      description: `Usuário: ${data.name}, Email: ${data.email}`,
    });
    // Reset form or handle success/error states
    // form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="seuemail@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Senha</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" variant="accent" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Criando...' : 'Criar Conta'}
        </Button>
      </form>
    </Form>
  );
}
