
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  const practiceAreas = [
    {
      icon: 'ri-scales-3-line',
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direito de família e sucessões.'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Direito Trabalhista',
      description: 'Defesa de direitos trabalhistas, rescisões e processos trabalhistas.'
    },
    {
      icon: 'ri-building-line',
      title: 'Direito Empresarial',
      description: 'Constituição de empresas, contratos comerciais e compliance.'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Direito do Consumidor',
      description: 'Proteção aos direitos do consumidor e relações de consumo.'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Consultoria Preventiva',
      description: 'Análise de riscos e orientação jurídica preventiva.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      content: 'Excelente atendimento e resultados efetivos. O escritório B&P resolveu minha questão empresarial com muita competência.',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Aposentado',
      content: 'Profissionais éticos e dedicados. Conseguiram resolver meu processo trabalhista de forma rápida e eficiente.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Comerciante',
      content: 'Recomendo o escritório B&P. Atendimento humanizado e soluções jurídicas inteligentes para meu negócio.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 46, 42, 0.7), rgba(59, 46, 42, 0.7)), url('https://readdy.ai/api/search-image?query=elegant%20modern%20law%20office%20interior%20with%20warm%20lighting%2C%20professional%20legal%20consultation%20room%20with%20wooden%20furniture%2C%20sophisticated%20legal%20workspace%20with%20neutral%20warm%20tones%2C%20minimalist%20law%20firm%20reception%20area%20with%20brown%20and%20beige%20colors%2C%20professional%20legal%20environment%20with%20natural%20lighting%20and%20contemporary%20design&width=1920&height=1080&seq=1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Confiança, ética e resultado em cada causa
            </h1>
            <p className="font-lato text-xl md:text-2xl text-beige-light mb-8 max-w-3xl mx-auto">
              Escritório especializado em soluções jurídicas efetivas, com foco no atendimento humanizado e resultados concretos para nossos clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg" className="animate-slide-up">
                <i className="ri-phone-line mr-2"></i>
                Fale com um advogado
              </Button>
              <Link to="/areas-atuacao">
                <Button variant="outline" size="lg" className="animate-slide-up text-white border-white hover:bg-white hover:text-brown-dark">
                  <i className="ri-arrow-right-line mr-2"></i>
                  Nossas Especialidades
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brown-dark mb-4">
              Áreas de Atuação
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
              sempre com foco na excelência e nos resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mb-6">
                  <i className={`${area.icon} text-2xl text-gold-light`}></i>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-4">
                  {area.title}
                </h3>
                <p className="font-lato text-brown-light leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/areas-atuacao">
              <Button variant="secondary" size="lg">
                Ver Todas as Especialidades
                <i className="ri-arrow-right-line ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brown-dark mb-6">
                Quem Somos
              </h2>
              <p className="font-lato text-lg text-brown-light mb-6 leading-relaxed">
                O escritório B&P Advocacia foi fundado com o propósito de oferecer serviços jurídicos 
                de excelência, pautados na ética, transparência e comprometimento com os resultados.
              </p>
              <p className="font-lato text-lg text-brown-light mb-8 leading-relaxed">
                Nossa equipe é formada por profissionais experientes e especializados, que trabalham 
                de forma integrada para garantir as melhores soluções jurídicas para cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-gold-light mb-2">15+</div>
                  <div className="font-lato text-brown-light">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-gold-light mb-2">500+</div>
                  <div className="font-lato text-brown-light">Casos Resolvidos</div>
                </div>
              </div>
              
              <Link to="/quem-somos">
                <Button variant="primary" size="lg">
                  Conheça Nossa História
                  <i className="ri-arrow-right-line ml-2"></i>
                </Button>
              </Link>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20law%20firm%20team%20meeting%20in%20modern%20office%2C%20experienced%20lawyers%20discussing%20legal%20strategy%20in%20elegant%20conference%20room%2C%20sophisticated%20legal%20professionals%20in%20business%20attire%2C%20warm%20and%20professional%20legal%20consultation%20environment%20with%20natural%20lighting%20and%20contemporary%20furniture&width=600&height=700&seq=2&orientation=portrait"
                alt="Equipe B&P Advocacia"
                className="rounded-xl shadow-lg object-cover w-full h-96 lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brown-dark mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              A confiança dos nossos clientes é o nosso maior patrimônio. 
              Veja alguns depoimentos de quem já teve resultados conosco.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-gold-light text-lg"></i>
                  ))}
                </div>
                <p className="font-lato text-brown-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-playfair font-semibold text-brown-dark">
                    {testimonial.name}
                  </h4>
                  <p className="font-lato text-sm text-brown-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brown-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
            Precisa de ajuda jurídica?
          </h2>
          <p className="font-lato text-xl text-beige-light mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e agende uma consulta. Nossa equipe está pronta 
            para analisar seu caso e oferecer as melhores soluções jurídicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                <i className="ri-calendar-line mr-2"></i>
                Agendar Consulta
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brown-dark">
              <i className="ri-phone-line mr-2"></i>
              (11) 99999-9999
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
