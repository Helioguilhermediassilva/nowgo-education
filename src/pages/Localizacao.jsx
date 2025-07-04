import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Car,
  Train
} from 'lucide-react'
import brazilMap from '../assets/images/brazil-map.png'

export default function Localizacao() {
  const campuses = [
    {
      city: "São Paulo",
      address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      phone: "(11) 3000-0001",
      email: "saopaulo@nowgoeducation.com.br",
      status: "Campus Inicial",
      transport: ["Metrô Trianon-MASP", "Várias linhas de ônibus", "Estacionamento disponível"]
    },
    {
      city: "Rio de Janeiro",
      address: "Av. Atlântica, 500 - Copacabana, Rio de Janeiro - RJ",
      phone: "(21) 3000-0002",
      email: "rio@nowgoeducation.com.br",
      status: "Campus Inicial",
      transport: ["Metrô Copacabana", "Linhas de ônibus", "Estacionamento próximo"]
    },
    {
      city: "Brasília",
      address: "SCS Quadra 1, Bloco A - Asa Sul, Brasília - DF",
      phone: "(61) 3000-0003",
      email: "brasilia@nowgoeducation.com.br",
      status: "Campus Inicial",
      transport: ["Estação de Metrô", "Linhas de ônibus do DF", "Estacionamento gratuito"]
    },
    {
      city: "Belo Horizonte",
      address: "Av. Afonso Pena, 800 - Centro, Belo Horizonte - MG",
      phone: "(31) 3000-0004",
      email: "bh@nowgoeducation.com.br",
      status: "Campus Inicial",
      transport: ["Estação de Metrô", "Várias linhas de ônibus", "Estacionamento disponível"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos Campus
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Encontre o campus NowGo Education mais próximo de você. Estamos presentes nas principais cidades do Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Mapa e Campus */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            CAMPUS INICIAIS - 2025
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src={brazilMap} 
                alt="Mapa do Brasil" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="mt-6 text-center">
                <Badge variant="outline" className="text-primary border-primary">
                  4 Campus Iniciais em 2025
                </Badge>
              </div>
            </div>
            <div className="space-y-6">
              {campuses.map((campus, index) => (
                <Card key={index} className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-primary flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        {campus.city}
                      </CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        {campus.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-1">ENDEREÇO</p>
                      <p className="text-foreground">{campus.address}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">TELEFONE</p>
                        <p className="text-foreground flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          {campus.phone}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">EMAIL</p>
                        <p className="text-foreground flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {campus.email}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-2">TRANSPORTE</p>
                      <div className="flex flex-wrap gap-2">
                        {campus.transport.map((transport, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {transport}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Agendar Visita
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            HORÁRIOS DE FUNCIONAMENTO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Período Letivo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Segunda a Sexta</p>
                  <p className="text-muted-foreground">8h00 às 17h00</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Estudos acadêmicos pela manhã, atividades práticas à tarde
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-secondary">Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Segunda a Sexta</p>
                  <p className="text-muted-foreground">7h30 às 18h00</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Secretaria e atendimento aos pais
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-accent">Visitas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Segunda a Sábado</p>
                  <p className="text-muted-foreground">9h00 às 16h00</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Agendamento prévio necessário
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Visite Nosso Campus
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Conheça de perto nossa metodologia inovadora e veja como podemos transformar a educação do seu filho.
          </p>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            AGENDAR VISITA AGORA
          </Button>
        </div>
      </section>
    </div>
  )
}

