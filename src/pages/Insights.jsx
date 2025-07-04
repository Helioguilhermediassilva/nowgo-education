import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Insights</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Artigos, pesquisas e reflexões sobre o futuro da educação e inovação pedagógica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">ÚLTIMOS INSIGHTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "O Papel da IA na Educação Personalizada",
                excerpt: "Como a inteligência artificial está revolucionando a forma como aprendemos e ensinamos.",
                author: "Dr. Ana Silva",
                date: "10 de Janeiro, 2025",
                category: "Tecnologia"
              },
              {
                title: "Desenvolvendo Habilidades do Século XXI",
                excerpt: "As competências essenciais que os estudantes precisam para o futuro do trabalho.",
                author: "Prof. Carlos Santos",
                date: "8 de Janeiro, 2025",
                category: "Pedagogia"
              },
              {
                title: "Educação Brasileira: Desafios e Oportunidades",
                excerpt: "Uma análise do cenário educacional brasileiro e as possibilidades de transformação.",
                author: "Dra. Maria Oliveira",
                date: "5 de Janeiro, 2025",
                category: "Pesquisa"
              }
            ].map((article, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="text-primary">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Ler Mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

