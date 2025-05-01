import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Briefcase } from 'lucide-react';

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
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Serviço</CardTitle>
              <CardDescription>Descreva o serviço que você oferece.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service-title">Título do Serviço</Label>
                <Input id="service-title" placeholder="Ex: Encanador Profissional" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service-category">Categoria</Label>
                <Select>
                  <SelectTrigger id="service-category">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reparos">Reparos Domésticos</SelectItem>
                    <SelectItem value="eletrica">Instalações Elétricas</SelectItem>
                    <SelectItem value="jardinagem">Jardinagem</SelectItem>
                    <SelectItem value="pintura">Pintura</SelectItem>
                    <SelectItem value="limpeza">Limpeza</SelectItem>
                    <SelectItem value="aulas">Aulas Particulares</SelectItem>
                    {/* Add more categories */}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service-description">Descrição Detalhada</Label>
                <Textarea id="service-description" placeholder="Descreva os detalhes do serviço, sua experiência, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service-location">Sua Localização (ou área de atendimento)</Label>
                <Input id="service-location" placeholder="Ex: São Paulo, SP" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="service-price">Preço (Opcional)</Label>
                <Input id="service-price" placeholder="Ex: R$ 100/hora ou A combinar" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service-image">Foto (Opcional)</Label>
                <Input id="service-image" type="file" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full">Publicar Serviço</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Post Job Tab */}
        <TabsContent value="job">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes da Vaga</CardTitle>
              <CardDescription>Forneça informações sobre a oportunidade de emprego.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="job-title">Título da Vaga</Label>
                <Input id="job-title" placeholder="Ex: Auxiliar de Cozinha" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-company">Nome da Empresa</Label>
                <Input id="job-company" placeholder="Ex: Restaurante Saboroso" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-category">Categoria</Label>
                <Select>
                  <SelectTrigger id="job-category">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                   <SelectContent>
                        <SelectItem value="restaurante">Restaurante</SelectItem>
                        <SelectItem value="varejo">Varejo</SelectItem>
                        <SelectItem value="hotelaria">Hotelaria</SelectItem>
                        <SelectItem value="logistica">Logística</SelectItem>
                        <SelectItem value="ti">Tecnologia</SelectItem>
                        <SelectItem value="saude">Saúde</SelectItem>
                        {/* Add more categories */}
                 </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-type">Tipo de Contratação</Label>
                <Select>
                  <SelectTrigger id="job-type">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                   <SelectContent>
                        <SelectItem value="full-time">Tempo Integral</SelectItem>
                        <SelectItem value="part-time">Meio Período</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="internship">Estágio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-description">Descrição da Vaga</Label>
                <Textarea id="job-description" placeholder="Descreva as responsabilidades, requisitos, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-location">Localização da Vaga</Label>
                <Input id="job-location" placeholder="Ex: São Paulo, SP" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-salary">Salário/Remuneração (Opcional)</Label>
                <Input id="job-salary" placeholder="Ex: R$ 1.800 ou A combinar" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-contact">Como se candidatar / Contato</Label>
                <Input id="job-contact" placeholder="Ex: Enviar email para rh@empresa.com ou Link da vaga" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full">Publicar Vaga</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
