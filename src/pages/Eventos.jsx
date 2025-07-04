import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

export default function Eventos() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Eventos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Participe dos nossos eventos e conheça mais sobre a metodologia NowGo Education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">PRÓXIMOS EVENTOS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Palestra: O Futuro da Educação",
                date: "15 de Janeiro, 2025",
                time: "19h00 - 21h00",
                location: "Campus São Paulo",
                description: "Descubra como a IA está transformando a educação."
              },
              {
                title: "Workshop: Metodologia NowGo",
                date: "22 de Janeiro, 2025", 
                time: "14h00 - 17h00",
                location: "Campus Rio de Janeiro",
                description: "Experiência prática com nossa metodologia inovadora."
              },
              {
                title: "Feira de Ciências",
                date: "30 de Janeiro, 2025",
                time: "9h00 - 16h00", 
                location: "Campus Brasília",
                description: "Projetos desenvolvidos pelos nossos estudantes."
              }
            ].map((event, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <Button className="w-full mt-4">Inscrever-se</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

