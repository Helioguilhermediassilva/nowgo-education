import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Calendar, 
  FileText, 
  Users, 
  CheckCircle,
  Clock,
  Phone
} from 'lucide-react'
import studentsHappy from '../assets/images/students-happy.jpg'

export default function Admissao() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Processo de Admissão
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Junte-se à revolução educacional. Descubra como seu filho pode fazer parte da NowGo Education.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              INICIAR INSCRIÇÃO
            </Button>
          </div>
        </div>
      </section>

      {/* Processo de Admissão */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            COMO FUNCIONA O PROCESSO
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">1. Inscrição</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Preencha o formulário online com as informações do estudante e da família.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-secondary">2. Entrevista</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Conversa com a família para entender expectativas e alinhamento com nossa metodologia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-accent">3. Avaliação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Avaliação diagnóstica para entender o nível atual do estudante e personalizar o aprendizado.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">4. Matrícula</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Confirmação da vaga e início da jornada educacional na NowGo Education.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary">
                REQUISITOS PARA ADMISSÃO
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Idade</h3>
                    <p className="text-muted-foreground">Estudantes de 6 a 17 anos (1º ano do Ensino Fundamental ao 3º ano do Ensino Médio)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Motivação</h3>
                    <p className="text-muted-foreground">Interesse genuíno em aprender e disposição para experimentar uma metodologia inovadora</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Alinhamento Familiar</h3>
                    <p className="text-muted-foreground">Família comprometida com a proposta educacional e disposta a apoiar o processo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Autonomia</h3>
                    <p className="text-muted-foreground">Capacidade básica de trabalhar de forma independente (adequada à idade)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={studentsHappy} 
                alt="Estudantes felizes" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cronograma */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            CRONOGRAMA 2025
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <CardTitle className="text-primary">Janeiro - Março</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Abertura das inscrições</li>
                  <li>• Entrevistas com famílias</li>
                  <li>• Avaliações diagnósticas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-secondary">Abril - Maio</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Confirmação de vagas</li>
                  <li>• Processo de matrícula</li>
                  <li>• Preparação para início</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <CardTitle className="text-accent">Agosto</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Início das aulas</li>
                  <li>• Período de adaptação</li>
                  <li>• Acompanhamento inicial</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco para agendar uma visita e conhecer mais sobre nossa metodologia revolucionária.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              AGENDAR VISITA
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              INICIAR INSCRIÇÃO
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

