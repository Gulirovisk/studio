'use client'; // Make page a client component for interactions

import * as React from 'react'; // Import React for useState
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, DollarSign, Calendar } from 'lucide-react'; // Removed Clock, used Calendar
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast'; // Import useToast

// Mock data for jobs - replace with actual data fetching
const allJobs = [
  { id: 1, title: "Auxiliar de Cozinha", category: "Restaurante", location: "São Paulo, SP", type: "Tempo Integral", salary: "R$ 1.800", image: "https://picsum.photos/400/260", description: "Auxiliar no preparo de alimentos, limpeza e organização da cozinha.", company: "Restaurante Saboroso", datePosted: "2024-07-21", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 2, title: "Vendedor(a) de Loja", category: "Varejo", location: "Rio de Janeiro, RJ", type: "Meio Período", salary: "R$ 1.200 + Comissão", image: "https://picsum.photos/400/261", description: "Atendimento ao cliente, organização da loja e vendas.", company: "Moda Chic Boutique", datePosted: "2024-07-20", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 3, title: "Recepcionista Bilíngue", category: "Hotelaria", location: "Belo Horizonte, MG", type: "Tempo Integral", salary: "R$ 2.500", image: "https://picsum.photos/400/262", description: "Recepcionar hóspedes, realizar check-in/check-out, atender telefone.", company: "Hotel Estrela", datePosted: "2024-07-19", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 4, title: "Motorista Entregador", category: "Logística", location: "Curitiba, PR", type: "Tempo Integral", salary: "R$ 2.200", image: "https://picsum.photos/400/263", description: "Realizar entregas de mercadorias na região metropolitana. CNH B.", company: "Entrega Rápida Log", datePosted: "2024-07-18", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 5, title: "Desenvolvedor Web Jr", category: "Tecnologia", location: "Remoto", type: "Tempo Integral", salary: "R$ 3.500", image: "https://picsum.photos/400/264", description: "Desenvolver e manter aplicações web utilizando React e Node.js.", company: "Tech Solutions", datePosted: "2024-07-22", icon: <Briefcase className="h-5 w-5 text-primary" /> },
  { id: 6, title: "Estagiário de Marketing", category: "Marketing", location: "São Paulo, SP", type: "Estágio", salary: "R$ 1.500", image: "https://picsum.photos/400/265", description: "Auxiliar na criação de campanhas, gestão de redes sociais e análise de métricas.", company: "Digital Boost", datePosted: "2024-07-23", icon: <Briefcase className="h-5 w-5 text-primary" /> }
];

// Helper function to normalize string for comparison
const normalizeString = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function JobsPage() {
  const { toast } = useToast(); // Initialize useToast hook
  const [searchTerm, setSearchTerm] = React.useState('');
  const [locationFilter, setLocationFilter] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState('all');
  const [typeFilter, setTypeFilter] = React.useState('all');
  const [filteredJobs, setFilteredJobs] = React.useState(allJobs);

  const applyFilters = React.useCallback(() => {
    let jobsToFilter = allJobs;

    // Filter by search term (title or description)
    if (searchTerm) {
      const normalizedSearch = normalizeString(searchTerm);
      jobsToFilter = jobsToFilter.filter(job =>
        normalizeString(job.title).includes(normalizedSearch) ||
        normalizeString(job.description).includes(normalizedSearch)
      );
    }

    // Filter by location
    if (locationFilter) {
      const normalizedLocation = normalizeString(locationFilter);
      jobsToFilter = jobsToFilter.filter(job =>
        normalizeString(job.location).includes(normalizedLocation)
      );
    }

    // Filter by category
    if (categoryFilter !== 'all') {
      jobsToFilter = jobsToFilter.filter(job =>
        normalizeString(job.category) === normalizeString(categoryFilter)
      );
    }

    // Filter by job type
    if (typeFilter !== 'all') {
        jobsToFilter = jobsToFilter.filter(job =>
            // Map internal value to display value if needed, or compare directly
            (typeFilter === 'full-time' && job.type === 'Tempo Integral') ||
            (typeFilter === 'part-time' && job.type === 'Meio Período') ||
            (typeFilter === 'freelance' && job.type === 'Freelance') || // Assuming Freelance exists
            (typeFilter === 'internship' && job.type === 'Estágio')
        );
    }


    setFilteredJobs(jobsToFilter);
  }, [searchTerm, locationFilter, categoryFilter, typeFilter]); // Add typeFilter dependency


  // Apply filters when any filter state changes
  React.useEffect(() => {
    applyFilters();
  }, [applyFilters]); // applyFilters already includes dependencies

  const handleApplyClick = (jobTitle: string) => {
    // Simulate application submission or redirection
    console.log(`Applying for job: ${jobTitle}`);
    toast({
      title: "Candidatura Iniciada",
      description: `Você iniciou o processo de candidatura para a vaga de ${jobTitle}.`,
    });
    // In a real app, this might redirect to an external application link
    // or open a modal with an application form.
  };


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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
         <div className="relative flex-grow w-full md:w-auto">
          <Input
            type="text"
            placeholder="Localização (ex: Rio de Janeiro)"
            className="pl-10"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
           <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="Restaurante">Restaurante</SelectItem>
            <SelectItem value="Varejo">Varejo</SelectItem>
            <SelectItem value="Hotelaria">Hotelaria</SelectItem>
            <SelectItem value="Logística">Logística</SelectItem>
            <SelectItem value="Tecnologia">Tecnologia</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            {/* Add more categories */}
          </SelectContent>
        </Select>
         <Select value={typeFilter} onValueChange={setTypeFilter}>
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
         {/* Filter button can trigger explicit filtering if needed,
             but useEffect handles it reactively now */}
        {/* <Button variant="accent" className="w-full md:w-auto" onClick={applyFilters}>
          <Search className="mr-2 h-4 w-4" /> Filtrar
        </Button> */}
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
           filteredJobs.map((job) => (
            <Card key={job.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill // Use fill instead of layout="fill"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Add sizes prop for responsiveness
                  style={{ objectFit: "cover" }} // Use style object for objectFit
                  data-ai-hint={`${job.category} job workplace`}
                  priority={job.id <= 3} // Prioritize loading images for initial view
                  loading={job.id > 3 ? 'lazy' : 'eager'} // Lazy load images outside initial view
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
                <p className="text-sm text-muted-foreground line-clamp-3">{job.description}</p>
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
                   {/* Add onClick handler */}
                   <Button
                      className="w-full"
                      variant="primary"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Candidatar-se
                    </Button>
               </div>
            </Card>
          ))
        ) : (
           <p className="col-span-full text-center text-muted-foreground">Nenhuma vaga encontrada com os filtros selecionados.</p>
        )}
      </div>
    </div>
  );
}
