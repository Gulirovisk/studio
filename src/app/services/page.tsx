'use client'; // Make page a client component for dialog interaction & filtering

import * as React from 'react'; // Import React for useState
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Calendar, Settings, Hammer, Paintbrush, Sparkles, Utensils } from 'lucide-react'; // Added icons
import Image from 'next/image';
import { RequestQuoteDialogTrigger } from '@/components/services/RequestQuoteDialogTrigger'; // Import the dialog trigger

// Mock data for services - replace with actual data fetching
const allServices = [
  { id: 1, title: "Encanador Profissional", category: "Reparos Domésticos", location: "São Paulo, SP", rating: 4.8, image: "https://picsum.photos/400/250", description: "Serviços de encanamento residencial e comercial. Reparos, instalações e manutenção.", provider: "Mario Bros Encanamentos", datePosted: "2024-07-20", icon: <Settings className="h-5 w-5 text-primary" /> },
  { id: 2, title: "Eletricista Certificado", category: "Instalações Elétricas", location: "Rio de Janeiro, RJ", rating: 4.5, image: "https://picsum.photos/400/251", description: "Instalações elétricas, reparos, troca de fiação e quadros de luz.", provider: "Faísca Elétrica", datePosted: "2024-07-19", icon: <Settings className="h-5 w-5 text-primary" /> },
  { id: 3, title: "Jardinagem e Paisagismo", category: "Jardinagem", location: "Belo Horizonte, MG", rating: 4.9, image: "https://picsum.photos/400/252", description: "Corte de grama, poda de árvores, plantio e manutenção de jardins.", provider: "Jardim Feliz", datePosted: "2024-07-18", icon: <Hammer className="h-5 w-5 text-primary" /> },
  { id: 4, title: "Pintura Residencial", category: "Pintura", location: "Curitiba, PR", rating: 4.7, image: "https://picsum.photos/400/253", description: "Pintura interna e externa para casas e apartamentos.", provider: "Cores Vivas Pinturas", datePosted: "2024-07-21", icon: <Paintbrush className="h-5 w-5 text-primary" /> },
  { id: 5, title: "Limpeza Pós-Obra", category: "Limpeza", location: "São Paulo, SP", rating: 4.6, image: "https://picsum.photos/400/254", description: "Limpeza detalhada após reformas ou construções.", provider: "Limpa Tudo Serviços", datePosted: "2024-07-22", icon: <Sparkles className="h-5 w-5 text-primary" /> },
  { id: 6, title: "Aula Particular de Inglês", category: "Aulas Particulares", location: "Online", rating: 5.0, image: "https://picsum.photos/400/255", description: "Aulas de inglês personalizadas para todos os níveis.", provider: "Teacher Ana", datePosted: "2024-07-23", icon: <Utensils className="h-5 w-5 text-primary" /> }, // Using Utensils as placeholder
];

// Helper function to normalize string for comparison
const normalizeString = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [locationFilter, setLocationFilter] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState('all');
  const [filteredServices, setFilteredServices] = React.useState(allServices);

  const applyFilters = React.useCallback(() => {
    let servicesToFilter = allServices;

    // Filter by search term (title or description)
    if (searchTerm) {
      const normalizedSearch = normalizeString(searchTerm);
      servicesToFilter = servicesToFilter.filter(service =>
        normalizeString(service.title).includes(normalizedSearch) ||
        normalizeString(service.description).includes(normalizedSearch) ||
        normalizeString(service.provider).includes(normalizedSearch)
      );
    }

    // Filter by location
    if (locationFilter) {
      const normalizedLocation = normalizeString(locationFilter);
      servicesToFilter = servicesToFilter.filter(service =>
        normalizeString(service.location).includes(normalizedLocation)
      );
    }

    // Filter by category
    if (categoryFilter !== 'all') {
      servicesToFilter = servicesToFilter.filter(service =>
        normalizeString(service.category) === normalizeString(categoryFilter)
      );
    }

    setFilteredServices(servicesToFilter);
  }, [searchTerm, locationFilter, categoryFilter]);

  // Apply filters when any filter state changes
  React.useEffect(() => {
    applyFilters();
  }, [applyFilters]);


  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Serviços Disponíveis</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-secondary rounded-lg shadow-sm">
        <div className="relative flex-grow w-full md:w-auto">
          <Input
            type="text"
            placeholder="Buscar serviço (ex: eletricista, limpeza)"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
         <div className="relative flex-grow w-full md:w-auto">
          <Input
            type="text"
            placeholder="Localização (ex: São Paulo)"
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
            <SelectItem value="Reparos Domésticos">Reparos Domésticos</SelectItem>
            <SelectItem value="Instalações Elétricas">Instalações Elétricas</SelectItem>
            <SelectItem value="Jardinagem">Jardinagem</SelectItem>
            <SelectItem value="Pintura">Pintura</SelectItem>
             <SelectItem value="Limpeza">Limpeza</SelectItem>
             <SelectItem value="Aulas Particulares">Aulas Particulares</SelectItem>
            {/* Add more categories */}
          </SelectContent>
        </Select>
         {/* Filter button can trigger explicit filtering if needed,
             but useEffect handles it reactively now */}
        {/* <Button variant="accent" className="w-full md:w-auto" onClick={applyFilters}>
          <Search className="mr-2 h-4 w-4" /> Filtrar
        </Button> */}
      </div>

      {/* Service Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredServices.length > 0 ? (
             filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                 <div className="relative h-48 w-full">
                     <Image
                        src={service.image}
                        alt={service.title}
                        fill // Use fill instead of layout="fill"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Add sizes prop for responsiveness
                        style={{ objectFit: "cover" }} // Use style object for objectFit
                        data-ai-hint={`${service.category} service`}
                        priority={service.id <= 3} // Prioritize loading images for initial view
                        loading={service.id > 3 ? 'lazy' : 'eager'} // Lazy load images outside initial view
                      />
                 </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                     <div>
                        <CardTitle className="text-xl mb-1 flex items-center gap-2">
                             {service.icon} {service.title}
                        </CardTitle>
                         <Badge variant="secondary">{service.category}</Badge>
                     </div>
                     <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span>{service.rating}</span>
                     </div>
                  </div>
                   <CardDescription className="pt-2 text-sm">{service.provider}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{service.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-xs text-muted-foreground border-t pt-4">
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{service.location}</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Publicado em {new Date(service.datePosted).toLocaleDateString('pt-BR')}</span>
                     </div>
                </CardFooter>
                 <div className="p-4 border-t bg-secondary/50">
                      {/* Wrap the Button with RequestQuoteDialogTrigger */}
                     <RequestQuoteDialogTrigger serviceTitle={service.title}>
                        <Button className="w-full" variant="primary">Solicitar Orçamento</Button>
                     </RequestQuoteDialogTrigger>
                 </div>
              </Card>
            ))
         ) : (
            <p className="col-span-full text-center text-muted-foreground">Nenhum serviço encontrado com os filtros selecionados.</p>
         )}
      </div>
    </div>
  );
}
