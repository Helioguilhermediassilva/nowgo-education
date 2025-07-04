import { Link, useLocation } from 'react-router-dom'
import { 
  GraduationCap,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react'

export default function Layout({ children }) {
  const location = useLocation()
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">NowGo Education</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/programa" 
                className={`transition-colors ${isActive('/programa') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                O Programa
              </Link>
              <Link 
                to="/admissao" 
                className={`transition-colors ${isActive('/admissao') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Admissão
              </Link>
              <Link 
                to="/localizacao" 
                className={`transition-colors ${isActive('/localizacao') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Localização
              </Link>
              <Link 
                to="/eventos" 
                className={`transition-colors ${isActive('/eventos') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Eventos
              </Link>
              <Link 
                to="/recursos" 
                className={`transition-colors ${isActive('/recursos') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Recursos
              </Link>
              <Link 
                to="/insights" 
                className={`transition-colors ${isActive('/insights') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Insights
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">NowGo Education</span>
              </div>
              <p className="text-background/80">
                Transformando a educação brasileira com inteligência artificial e metodologias inovadoras.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Sobre</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/programa" className="hover:text-primary transition-colors">O Programa</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nossa Equipe</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Metodologia</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/insights" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pesquisas</a></li>
                <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@nowgoeducation.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                  <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2025 NowGo Education. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

