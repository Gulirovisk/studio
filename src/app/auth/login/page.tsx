import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LogIn } from 'lucide-react';

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
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email ou Nome de Usuário</Label>
            <Input id="email" type="email" placeholder="seuemail@exemplo.com" required />
          </div>
          <div className="space-y-2">
             <div className="flex items-center justify-between">
                 <Label htmlFor="password">Senha</Label>
                 <Link href="#" className="text-sm text-primary hover:underline">
                     Esqueceu a senha?
                 </Link>
             </div>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" variant="primary">Entrar</Button>
          <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <Link href="/auth/register" className="text-primary hover:underline font-medium">
              Crie uma agora
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
