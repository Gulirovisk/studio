import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, DollarSign, Clock, Calendar } from 'lucide-react'; // Added job icons
import Image from 'next/image'; // Import Image component

// Mock data for jobs - replace with actual data fetching
const jobs = [
  { id: 1, title: "Auxiliar de Cozinha", category: "Restaurante", location: "São Paulo, SP", type: "Tempo Integral", salary: "R$ 1.800", image: "https://picsum.photos/400/260", description: "Auxiliar no preparo de alimentos, limpeza e organização da cozinha.", company: "Restaurante Saboroso", datePosted: "2024-07-21", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 2, title: "Vendedor(a) de Loja", category: "Varejo", location: "Rio de Janeiro, RJ", type: "Meio Período", salary: "R$ 1.200 + Comissão", image: "https://picsum.photos/400/261", description: "Atendimento ao cliente, organização da loja e vendas.", company: "Moda Chic Boutique", datePosted: "2024-07-20", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 3, title: "Recepcionista Bilíngue", category: "Hotelaria", location: "Belo Horizonte, MG", type: "Tempo Integral", salary: "R$ 2.500", image: "https://picsum.photos/400/262", description: "Recepcionar hóspedes, realizar check-in/check-out, atender telefone.", company: "Hotel Estrela", datePosted: "2024-07-19", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 4, title: "Motorista Entregador", category: "Logística", location: "Curitiba, PR", type: "Tempo Integral", salary: "R$ 2.200", image: "https://picsum.photos/400/263", description: "Realizar entregas de mercadorias na região metropolitana. CNH B.", company: "Entrega Rápida Log", datePosted: "2024-07-18", icon: <Briefcase className="h-5 w-5 text-primary" /> },
];

export default function JobsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Vagas de Emprego</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-secondary rounded-lg shadow-sm">
         <div className="relative flex-grow w-full md:w-auto">
          <Input
            type="text"
            placeholder="Buscar vaga (ex: vendedor, auxiliar)"
            className="pl-10"
          />
           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
         <div className="relative flex-grow w-full md:w-auto">
          <Input
            type="text"
            placeholder="Localização (ex: Rio de Janeiro)"
            className="pl-10"
          />
           <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="restaurante">Restaurante</SelectItem>
            <SelectItem value="varejo">Varejo</SelectItem>
            <SelectItem value="hotelaria">Hotelaria</SelectItem>
            <SelectItem value="logistica">Logística</SelectItem>
            <SelectItem value="ti">Tecnologia</SelectItem>
            <SelectItem value="saude">Saúde</SelectItem>
            {/* Add more categories */}
          </SelectContent>
        </Select>
         <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Tipo de Vaga" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="full-time">Tempo Integral</SelectItem>
            <SelectItem value="part-time">Meio Período</SelectItem>
            <SelectItem value="freelance">Freelance</SelectItem>
             <SelectItem value="internship">Estágio</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="accent" className="w-full md:w-auto">
          <Search className="mr-2 h-4 w-4" /> Filtrar
        </Button>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="relative h-48 w-full">
               {/* Added placeholder image with AI hint */}
              <Image
                src={job.image}
                alt={job.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={`${job.category} job workplace`}
              />
            </div>
            <CardHeader>
               <div className="flex justify-between items-start">
                 <div>
                    <CardTitle className="text-xl mb-1 flex items-center gap-2">
                        {job.icon} {job.title}
                    </CardTitle>
                     <Badge variant="secondary">{job.category}</Badge>
                 </div>
                  <Badge variant="outline">{job.type}</Badge>
               </div>
               <CardDescription className="pt-2 text-sm">{job.company}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{job.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 text-xs text-muted-foreground border-t pt-4">
                <div className="flex justify-between w-full">
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                     </div>
                </div>
                 <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Publicado em {new Date(job.datePosted).toLocaleDateString('pt-BR')}</span>
                 </div>
            </CardFooter>
              <div className="p-4 border-t bg-secondary/50">
                 <Button className="w-full" variant="primary">Candidatar-se</Button>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
