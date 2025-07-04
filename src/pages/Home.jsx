import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Heart, 
  Zap,
  Users, 
  MapPin
} from 'lucide-react'
import studentsHappy from '../assets/images/students-happy.jpg'
import aiEducation from '../assets/images/ai-education.jpg'
import brazilMap from '../assets/images/brazil-map.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Uma escola onde crianças dominam os estudos em 2 horas, desenvolvem habilidades para a vida e prosperam além da sala de aula.
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Campus em São Paulo, Rio de Janeiro, Brasília e Belo Horizonte—e mais novas localidades chegando em 2025.
              </p>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                SAIBA MAIS
              </Button>
            </div>
            <div className="relative">
              <img 
                src={studentsHappy} 
                alt="Estudantes brasileiros felizes" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-8">COMO VISTO EM</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <Badge variant="outline" className="px-6 py-2">Folha de S.Paulo</Badge>
            <Badge variant="outline" className="px-6 py-2">O Globo</Badge>
            <Badge variant="outline" className="px-6 py-2">Estadão</Badge>
          </div>
        </div>
      </section>

      {/* 3 Compromissos */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            OS 3 COMPROMISSOS DA NOWGO EDUCATION
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Amar Estudar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Estudantes da NowGo Education amam estudar—é envolvente, inspirador e feito para eles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Aprender 2x em 2h</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Turmas da NowGo Education aprendem duas vezes mais rápido que seus pares e ficam entre os 1% melhores do país.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Aprender Habilidades para a Vida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Estudantes da NowGo Education passam as tardes desenvolvendo habilidades para a vida e explorando suas paixões.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Duas Coisas para Aprender */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            SEU FILHO PRECISA DE DUAS COISAS PARA APRENDER
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Acadêmicos no nível e ritmo certos</h3>
                <p className="text-lg text-muted-foreground">
                  Nosso tutor de IA oferece aos estudantes educação personalizada 1:1, fornecendo conteúdo no ritmo individual e no nível apropriado. Os estudantes progridem com domínio baseado em conceitos e sem lacunas de conhecimento.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Motivação com a recompensa certa</h3>
                <p className="text-lg text-muted-foreground">
                  Motivamos as crianças dando-lhes o presente do tempo para buscar as coisas que querem fazer e desenvolver habilidades para a vida. Adultos na sala apoiam estudantes motivados para fomentar uma mentalidade de crescimento e aprendizado independente.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiEducation} 
                alt="IA na Educação" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            DOS NOSSOS ESTUDANTES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "Eu amo a NowGo Education porque me ensinou a ser ilimitado."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">K</span>
                  </div>
                  <div>
                    <p className="font-semibold">Kaique</p>
                    <p className="text-sm text-muted-foreground">8º ano</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "O que eu amo na NowGo Education é a liberdade que temos aqui, que não é como outra escola."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria</p>
                    <p className="text-sm text-muted-foreground">7º ano</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Escolha Seu Campus - 4 Campus Iniciais */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            ESCOLHA SEU CAMPUS
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={brazilMap} 
                alt="Mapa do Brasil" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="grid gap-4">
              {[
                'São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte'
              ].map((city) => (
                <Card key={city} className="hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="flex items-center space-x-3 p-6">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-lg">{city}</span>
                    <Badge variant="outline" className="ml-auto">Campus Inicial</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

