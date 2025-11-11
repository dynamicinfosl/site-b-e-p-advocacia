import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  linkTo?: string;
}

/**
 * Componente Logo da Barbosa Pereira Advocacia
 * 
 * Renderiza o logo oficial da empresa usando a imagem em src/assets/images/logo/logo.jpg
 * A imagem já contém o design completo (monograma + texto "Barbosa Pereira" + "ADVOCACIA")
 * 
 * @param size - Tamanho do logo: 'sm' (pequeno), 'md' (médio), 'lg' (grande)
 * @param className - Classes CSS adicionais
 * @param linkTo - URL para link (padrão: '/'). Se fornecido, o logo será clicável
 */

// Importa a imagem do logo
import logoImage from '@/assets/images/logo/logo.jpg';

export default function Logo({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showText = true,
  linkTo = '/'
}: LogoProps) {
  const LogoContent = () => {
    // A imagem do logo já contém todo o texto necessário (monograma + "Barbosa Pereira" + "ADVOCACIA")
    // Ajusta a altura baseado no tamanho, mas mantém a proporção da imagem
    const heightMap = {
      sm: 'h-10',
      md: 'h-16',
      lg: 'h-24'
    };

    return (
      <img
        src={logoImage}
        alt="Barbosa Pereira Advocacia"
        className={`${heightMap[size]} w-auto object-contain ${className}`}
      />
    );
  };

  if (linkTo) {
    return (
      <Link to={linkTo} className="flex items-center">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}
