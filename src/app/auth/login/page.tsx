'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { LogIn } from 'lucide-react';
import { LoginForm } from '@/components/auth/LoginForm'; // Import the new LoginForm component

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <LogIn className="h-6 w-6 text-primary" /> Entrar na sua Conta
          </CardTitle>
          <CardDescription>
            Acesse sua conta para gerenciar seus serviços e vagas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Use the LoginForm component */}
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
           {/* Moved button inside LoginForm */}
          <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <Link href="/auth/register" className="text-primary hover:underline font-medium">
              Crie uma agora
            </Link>
          </p>
           <p className="text-center text-sm text-muted-foreground mt-2">
              <Link href="#" className="text-primary hover:underline">
                  Esqueceu a senha?
              </Link>
           </p>
        </CardFooter>
      </Card>
    </div>
  );
}
