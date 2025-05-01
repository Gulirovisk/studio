import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Search, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 pt-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
        Bem-vindo ao ServiConecta!
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
        Conectando profissionais autônomos a clientes e oportunidades de emprego locais. Encontre o serviço que precisa ou a vaga ideal para você.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
          <Link href="/services">
            Explorar Serviços <Search className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="accent" asChild>
          <Link href="/jobs">
            Ver Vagas de Emprego <Briefcase className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
       <p className="text-sm text-muted-foreground pt-8">
        Quer divulgar seu serviço ou vaga?{' '}
        <Link href="/post" className="text-primary hover:underline font-medium">
          Publique agora <ArrowRight className="inline h-4 w-4" />
        </Link>
      </p>
    </div>
  );
}
