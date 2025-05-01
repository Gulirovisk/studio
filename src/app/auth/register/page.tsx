import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { UserPlus } from 'lucide-react';

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
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input id="name" placeholder="Seu Nome Completo" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seuemail@exemplo.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
           <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmar Senha</Label>
            <Input id="confirm-password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" variant="accent">Criar Conta</Button>
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
