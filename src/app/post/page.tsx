'use client'; // Make the page a client component to manage tab state

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Briefcase } from 'lucide-react';
import { ServiceForm } from '@/components/post/ServiceForm'; // Import ServiceForm
import { JobForm } from '@/components/post/JobForm'; // Import JobForm

export default function PostPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Publique sua Oferta</h1>

      <Tabs defaultValue="service" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="service">
            <Wrench className="mr-2 h-4 w-4" /> Publicar Serviço
          </TabsTrigger>
          <TabsTrigger value="job">
            <Briefcase className="mr-2 h-4 w-4" /> Publicar Vaga
          </TabsTrigger>
        </TabsList>

        {/* Post Service Tab */}
        <TabsContent value="service">
          <ServiceForm /> {/* Use ServiceForm Component */}
        </TabsContent>

        {/* Post Job Tab */}
        <TabsContent value="job">
          <JobForm /> {/* Use JobForm Component */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
