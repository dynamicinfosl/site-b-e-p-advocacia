
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function QuemSomos() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Ética',
      description: 'Conduta profissional pautada na transparência e honestidade em todas as relações.'
    },
    {
      icon: 'ri-target-line',
      title: 'Excelência',
      description: 'Busca constante pela qualidade e aperfeiçoamento dos serviços prestados.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Humanização',
      description: 'Atendimento personalizado com foco nas necessidades específicas de cada cliente.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Inovação',
      description: 'Utilização de tecnologia e métodos modernos para otimizar resultados.'
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Fundação',
      description: 'Criação do escritório com foco em direito civil e trabalhista.'
    },
    {
      year: '2012',
      title: 'Expansão',
      description: 'Ampliação das áreas de atuação incluindo direito empresarial.'
    },
    {
      year: '2016',
      title: 'Crescimento',
      description: 'Abertura de nova sede e contratação de especialistas.'
    },
    {
      year: '2020',
      title: 'Digitalização',
      description: 'Implementação de tecnologias para atendimento remoto.'
    },
    {
      year: '2024',
      title: 'Consolidação',
      description: 'Reconhecimento como referência em soluções jurídicas.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 46, 42, 0.8), rgba(59, 46, 42, 0.8)), url('https://readdy.ai/api/search-image?query=professional%20law%20firm%20building%20exterior%20with%20modern%20architecture%2C%20elegant%20legal%20office%20facade%20with%20warm%20lighting%2C%20sophisticated%20law%20firm%20entrance%20with%20contemporary%20design%2C%20professional%20legal%20building%20with%20glass%20and%20stone%20materials%2C%20upscale%20law%20office%20exterior%20with%20natural%20lighting&width=1920&height=800&seq=3&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-6">
            Quem Somos
          </h1>
          <p className="font-lato text-xl text-beige-light max-w-3xl mx-auto">
            Conheça nossa história, valores e o compromisso que nos move a buscar 
            sempre a excelência no atendimento jurídico.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-6">
                Nossa História
              </h2>
              <p className="font-lato text-lg text-brown-light mb-6 leading-relaxed">
                O escritório B&P Advocacia nasceu em 2008 com o propósito de oferecer serviços 
                jurídicos de alta qualidade, sempre pautados na ética, transparência e 
                comprometimento com os resultados dos nossos clientes.
              </p>
              <p className="font-lato text-lg text-brown-light mb-6 leading-relaxed">
                Ao longo dos anos, construímos uma sólida reputação no mercado jurídico, 
                expandindo nossas áreas de atuação e investindo constantemente na capacitação 
                da nossa equipe e na modernização dos nossos processos.
              </p>
              <p className="font-lato text-lg text-brown-light mb-8 leading-relaxed">
                Hoje, somos reconhecidos como um dos principais escritórios de advocacia da região, 
                com uma carteira diversificada de clientes e casos de sucesso em diversas áreas do direito.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-gold-light mb-2">15+</div>
                  <div className="font-lato text-sm text-brown-light">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-gold-light mb-2">500+</div>
                  <div className="font-lato text-sm text-brown-light">Casos Resolvidos</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-gold-light mb-2">98%</div>
                  <div className="font-lato text-sm text-brown-light">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20law%20firm%20partners%20shaking%20hands%20in%20elegant%20office%2C%20successful%20legal%20team%20celebrating%20case%20victory%2C%20experienced%20lawyers%20in%20formal%20business%20meeting%2C%20sophisticated%20legal%20professionals%20in%20modern%20conference%20room%20with%20warm%20lighting&width=600&height=700&seq=4&orientation=portrait"
                alt="História B&P Advocacia"
                className="rounded-xl shadow-lg object-cover w-full h-96 lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Os princípios que norteiam nossa atuação e definem nosso compromisso 
              com a excelência jurídica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center animate-scale-in">
              <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-target-line text-2xl text-gold-light"></i>
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-brown-dark mb-4">Missão</h3>
              <p className="font-lato text-brown-light leading-relaxed">
                Oferecer soluções jurídicas eficazes e personalizadas, defendendo os direitos 
                e interesses dos nossos clientes com ética, competência e dedicação.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-eye-line text-2xl text-gold-light"></i>
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-brown-dark mb-4">Visão</h3>
              <p className="font-lato text-brown-light leading-relaxed">
                Ser reconhecido como o escritório de advocacia de referência, conhecido pela 
                excelência dos serviços e pela confiança depositada pelos clientes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-2xl text-gold-light"></i>
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-brown-dark mb-4">Valores</h3>
              <p className="font-lato text-brown-light leading-relaxed">
                Ética, transparência, excelência, humanização e inovação são os pilares 
                que sustentam nossa atuação profissional.
              </p>
            </div>
          </div>
          
          {/* Valores Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gold-light/20 rounded-full flex items-center justify-center mb-4">
                  <i className={`${value.icon} text-xl text-gold-light`}></i>
                </div>
                <h4 className="font-playfair font-semibold text-lg text-brown-dark mb-2">
                  {value.title}
                </h4>
                <p className="font-lato text-sm text-brown-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              Nossa Trajetória
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Marcos importantes da nossa jornada de crescimento e consolidação no mercado jurídico.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-light/30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="font-playfair font-bold text-2xl text-gold-light mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="font-lato text-brown-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-light rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brown-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-white mb-6">
            Conheça Nossa Equipe
          </h2>
          <p className="font-lato text-xl text-beige-light mb-8 max-w-3xl mx-auto">
            Profissionais experientes e especializados, prontos para oferecer 
            as melhores soluções jurídicas para seu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/equipe">
              <Button variant="primary" size="lg">
                <i className="ri-team-line mr-2"></i>
                Ver Equipe
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brown-dark">
                <i className="ri-phone-line mr-2"></i>
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
