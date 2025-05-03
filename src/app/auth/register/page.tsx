'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { UserPlus } from 'lucide-react';
import { RegisterForm } from '@/components/auth/RegisterForm'; // Import the new RegisterForm component

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <UserPlus className="h-6 w-6 text-primary" /> Criar Nova Conta
          </CardTitle>
          <CardDescription>
            Junte-se ao ServiConecta para encontrar ou oferecer serviços e vagas.
          </CardDescription>
        </CardHeader>
        <CardContent>
           {/* Use the RegisterForm component */}
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          {/* Moved button inside RegisterForm */}
           <p className="text-center text-sm text-muted-foreground">
            Já possui uma conta?{' '}
            <Link href="/auth/login" className="text-primary hover:underline font-medium">
              Faça login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
