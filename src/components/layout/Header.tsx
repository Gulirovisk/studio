import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, Wrench, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">ServiConecta</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="/jobs"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Vagas
          </Link>
           <Link
            href="/post"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Publicar
          </Link>
          <Button variant="outline" size="sm" asChild>
             <Link href="/auth/login">
              <User className="mr-2 h-4 w-4" /> Entrar
             </Link>
          </Button>
           <Button variant="accent" size="sm" asChild>
             <Link href="/auth/register">
               Criar Conta
             </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Wrench className="h-6 w-6 text-primary" />
                <span className="text-primary">ServiConecta</span>
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Wrench className="h-5 w-5" />
                Serviços
              </Link>
              <Link
                href="/jobs"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Briefcase className="h-5 w-5" />
                Vagas
              </Link>
               <Link
                href="/post"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                 {/* Using a placeholder icon as 'Post' is generic */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                Publicar
              </Link>
              <div className="mt-auto flex flex-col gap-4">
                 <Button variant="outline" asChild>
                    <Link href="/auth/login">
                     <User className="mr-2 h-4 w-4" /> Entrar
                    </Link>
                 </Button>
                  <Button variant="accent" asChild>
                    <Link href="/auth/register">
                      Criar Conta
                    </Link>
                 </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
