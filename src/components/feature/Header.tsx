
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Áreas de Atuação', href: '/areas-atuacao' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brown-dark rounded-lg flex items-center justify-center">
                <span className="text-gold-light font-playfair font-bold text-xl">B&P</span>
              </div>
              <div>
                <h1 className="font-playfair font-bold text-xl text-brown-dark">B&P Advocacia</h1>
                <p className="font-lato text-sm text-brown-light">Confiança & Resultado</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-lato font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-gold-light border-b-2 border-gold-light pb-1'
                    : 'text-brown-dark hover:text-gold-light'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" size="md">
              <i className="ri-phone-line mr-2"></i>
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brown-dark hover:text-gold-light transition-colors duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-beige-dark">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md font-lato font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-gold-light bg-beige-light'
                      : 'text-brown-dark hover:text-gold-light hover:bg-beige-light'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button variant="primary" size="md" className="w-full">
                  <i className="ri-phone-line mr-2"></i>
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
