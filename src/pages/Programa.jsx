import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Brain, 
  Clock, 
  Users, 
  BookOpen,
  Target,
  Lightbulb
} from 'lucide-react'
import aiEducation from '../assets/images/ai-education.jpg'
import childrenStudying from '../assets/images/children-studying.jpg'

export default function Programa() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O Programa NowGo Education
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Uma abordagem revolucionária que combina inteligência artificial, aprendizado personalizado e desenvolvimento de habilidades para a vida.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            NOSSA METODOLOGIA
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Aprendizado com IA Personalizada</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Cada estudante recebe um tutor de IA dedicado que adapta o conteúdo ao seu ritmo e nível de conhecimento. Nossa tecnologia identifica lacunas de aprendizado e oferece exercícios personalizados para garantir domínio completo de cada conceito.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">2 horas</p>
                    <p className="text-sm text-muted-foreground">de estudos acadêmicos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">100%</p>
                    <p className="text-sm text-muted-foreground">de domínio conceitual</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <img 
                src={aiEducation} 
                alt="IA na Educação" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura do Dia */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            ESTRUTURA DO DIA
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Manhã (8h-10h)</CardTitle>
                <CardDescription>Estudos Acadêmicos com IA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Matemática, Português, Ciências e outras disciplinas com tutoria personalizada de IA. Cada aluno progride no seu próprio ritmo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-secondary">Tarde (10h-15h)</CardTitle>
                <CardDescription>Habilidades para a Vida</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Workshops de criatividade, empreendedorismo, comunicação, trabalho em equipe e projetos práticos que desenvolvem competências do século XXI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-accent">Tarde (15h-17h)</CardTitle>
                <CardDescription>Projetos Pessoais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tempo dedicado para que os estudantes explorem suas paixões, desenvolvam projetos próprios e apliquem o conhecimento adquirido.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            NOSSOS DIFERENCIAIS
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={childrenStudying} 
                alt="Crianças estudando" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Aprendizado Adaptativo</h3>
                  <p className="text-muted-foreground">
                    Nossa IA identifica o estilo de aprendizado de cada criança e adapta o conteúdo para maximizar a compreensão e retenção.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Mentoria Humana</h3>
                  <p className="text-muted-foreground">
                    Nossos guias oferecem suporte emocional, motivacional e orientação para o desenvolvimento pessoal de cada estudante.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Resultados Comprovados</h3>
                  <p className="text-muted-foreground">
                    Nossos estudantes demonstram performance 2x superior em avaliações nacionais e desenvolvem habilidades essenciais para o futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currículo */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            CURRÍCULO INTEGRADO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Matemática", description: "Álgebra, Geometria, Estatística" },
              { title: "Português", description: "Gramática, Literatura, Redação" },
              { title: "Ciências", description: "Física, Química, Biologia" },
              { title: "História", description: "Brasil, Mundo, Contemporânea" },
              { title: "Geografia", description: "Física, Humana, Geopolítica" },
              { title: "Inglês", description: "Conversação, Gramática, Cultura" },
              { title: "Programação", description: "Python, JavaScript, Lógica" },
              { title: "Empreendedorismo", description: "Inovação, Negócios, Liderança" }
            ].map((subject, index) => (
              <Card key={index} className="text-center hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">{subject.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{subject.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

