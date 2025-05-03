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
const jobSchema = z.object({
  title: z.string().min(1, { message: "Título da vaga é obrigatório." }),
  company: z.string().min(1, { message: "Nome da empresa é obrigatório." }),
  category: z.string().min(1, { message: "Categoria é obrigatória." }),
  jobType: z.string().min(1, { message: "Tipo de contratação é obrigatório." }),
  description: z.string().min(10, { message: "Descrição deve ter pelo menos 10 caracteres." }),
  location: z.string().min(1, { message: "Localização é obrigatória." }),
  salary: z.string().optional(),
  contact: z.string().min(1, { message: "Informação de contato/candidatura é obrigatória." }),
});

type JobFormValues = z.infer<typeof jobSchema>;

export function JobForm() {
  const { toast } = useToast();
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: '',
      company: '',
      category: '',
      jobType: '',
      description: '',
      location: '',
      salary: '',
      contact: '',
    },
  });

  const onSubmit = (data: JobFormValues) => {
    console.log('Job form submitted:', data);
    // Here you would typically call your API to post the job
    toast({
      title: "Vaga Enviada para Publicação",
      description: `Título: ${data.title}, Empresa: ${data.company}`,
    });
    // Reset form or handle success/error states
    // form.reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalhes da Vaga</CardTitle>
        <CardDescription>Forneça informações sobre a oportunidade de emprego.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título da Vaga</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Auxiliar de Cozinha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Restaurante Saboroso" {...field} />
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
                          <SelectItem value="restaurante">Restaurante</SelectItem>
                          <SelectItem value="varejo">Varejo</SelectItem>
                          <SelectItem value="hotelaria">Hotelaria</SelectItem>
                          <SelectItem value="logistica">Logística</SelectItem>
                          <SelectItem value="ti">Tecnologia</SelectItem>
                          <SelectItem value="saude">Saúde</SelectItem>
                          {/* Add more categories */}
                    </SelectContent>
                   </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Contratação</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                     <FormControl>
                       <SelectTrigger>
                         <SelectValue placeholder="Selecione o tipo" />
                       </SelectTrigger>
                    </FormControl>
                     <SelectContent>
                          <SelectItem value="full-time">Tempo Integral</SelectItem>
                          <SelectItem value="part-time">Meio Período</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="internship">Estágio</SelectItem>
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
                  <FormLabel>Descrição da Vaga</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva as responsabilidades, requisitos, etc." {...field} />
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
                  <FormLabel>Localização da Vaga</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: São Paulo, SP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salário/Remuneração (Opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: R$ 1.800 ou A combinar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Como se candidatar / Contato</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Enviar email para rh@empresa.com ou Link da vaga" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" variant="primary" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Publicando...' : 'Publicar Vaga'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
