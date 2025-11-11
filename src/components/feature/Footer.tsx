
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold-light rounded-lg flex items-center justify-center">
                <span className="text-brown-dark font-playfair font-bold text-xl">B&P</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">B&P Advocacia</h3>
                <p className="font-lato text-sm text-gold-light">Confiança & Resultado</p>
              </div>
            </div>
            <p className="font-lato text-beige-light mb-6 max-w-md">
              Escritório especializado em soluções jurídicas com foco em resultados efetivos. 
              Confiança, ética e excelência em cada causa defendida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gold-light/20 rounded-full flex items-center justify-center hover:bg-gold-light hover:text-brown-dark transition-colors duration-300">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gold-light/20 rounded-full flex items-center justify-center hover:bg-gold-light hover:text-brown-dark transition-colors duration-300">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gold-light/20 rounded-full flex items-center justify-center hover:bg-gold-light hover:text-brown-dark transition-colors duration-300">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-gold-light">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="font-lato text-beige-light hover:text-gold-light transition-colors duration-300">Home</Link></li>
              <li><Link to="/quem-somos" className="font-lato text-beige-light hover:text-gold-light transition-colors duration-300">Quem Somos</Link></li>
              <li><Link to="/areas-atuacao" className="font-lato text-beige-light hover:text-gold-light transition-colors duration-300">Áreas de Atuação</Link></li>
              <li><Link to="/equipe" className="font-lato text-beige-light hover:text-gold-light transition-colors duration-300">Equipe</Link></li>
              <li><Link to="/blog" className="font-lato text-beige-light hover:text-gold-light transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contato" className="font-lato text-beige-light hover:text-gold-light transition-colors duration-300">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-gold-light">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-gold-light mt-1"></i>
                <p className="font-lato text-beige-light text-sm">
                  Rua Augusta, 1234<br />
                  São Paulo - SP<br />
                  CEP: 01305-100
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-gold-light"></i>
                <p className="font-lato text-beige-light text-sm">(11) 99999-9999</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-gold-light"></i>
                <p className="font-lato text-beige-light text-sm">contato@bpadvocacia.com.br</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-gold-light"></i>
                <p className="font-lato text-beige-light text-sm">Seg - Sex: 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-brown-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lato text-beige-light text-sm">
              © {currentYear} B&P Advocacia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/politica-privacidade" className="font-lato text-beige-light hover:text-gold-light text-sm transition-colors duration-300">
                Política de Privacidade
              </Link>
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="font-lato text-beige-light hover:text-gold-light text-sm transition-colors duration-300">
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
