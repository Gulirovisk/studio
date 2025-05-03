'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

// Define the Zod schema for validation
const serviceSchema = z.object({
  title: z.string().min(1, { message: "Título do serviço é obrigatório." }),
  category: z.string().min(1, { message: "Categoria é obrigatória." }),
  description: z.string().min(10, { message: "Descrição deve ter pelo menos 10 caracteres." }),
  location: z.string().min(1, { message: "Localização é obrigatória." }),
  price: z.string().optional(),
  // Add validation for image if needed (e.g., file type, size)
  image: z.any().optional(),
});

type ServiceFormValues = z.infer<typeof serviceSchema>;

export function ServiceForm() {
  const { toast } = useToast();
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: '',
      category: '',
      description: '',
      location: '',
      price: '',
      image: null,
    },
  });

  const onSubmit = (data: ServiceFormValues) => {
    console.log('Service form submitted:', data);
    // Here you would typically call your API to post the service
    toast({
      title: "Serviço Enviado para Publicação",
      description: `Título: ${data.title}, Categoria: ${data.category}`,
    });
    // Reset form or handle success/error states
    // form.reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalhes do Serviço</CardTitle>
        <CardDescription>Descreva o serviço que você oferece.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do Serviço</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Encanador Profissional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="reparos">Reparos Domésticos</SelectItem>
                      <SelectItem value="eletrica">Instalações Elétricas</SelectItem>
                      <SelectItem value="jardinagem">Jardinagem</SelectItem>
                      <SelectItem value="pintura">Pintura</SelectItem>
                      <SelectItem value="limpeza">Limpeza</SelectItem>
                      <SelectItem value="aulas">Aulas Particulares</SelectItem>
                      {/* Add more categories */}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição Detalhada</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva os detalhes do serviço, sua experiência, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Localização (ou área de atendimento)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: São Paulo, SP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço (Opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: R$ 100/hora ou A combinar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foto (Opcional)</FormLabel>
                  <FormControl>
                     {/* Input for file upload - needs more handling for actual upload */}
                    <Input type="file" onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" variant="primary" className="w-full" disabled={form.formState.isSubmitting}>
               {form.formState.isSubmitting ? 'Publicando...' : 'Publicar Serviço'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
