import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { BookOpen, Download, Video, FileText } from 'lucide-react'

export default function Recursos() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Recursos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Materiais educacionais e recursos para apoiar o aprendizado dos nossos estudantes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">RECURSOS DISPONÍVEIS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Biblioteca Digital",
                description: "Acesso a milhares de livros e materiais educacionais digitais."
              },
              {
                icon: Video,
                title: "Videoaulas",
                description: "Conteúdo em vídeo para reforçar o aprendizado em casa."
              },
              {
                icon: FileText,
                title: "Exercícios",
                description: "Atividades práticas personalizadas para cada estudante."
              },
              {
                icon: Download,
                title: "Downloads",
                description: "Materiais complementares para download gratuito."
              }
            ].map((resource, index) => (
              <Card key={index} className="text-center hover:border-primary transition-colors">
                <CardHeader>
                  <resource.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{resource.description}</CardDescription>
                  <Button variant="outline" className="w-full">Acessar</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

