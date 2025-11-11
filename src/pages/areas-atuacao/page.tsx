
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function AreasAtuacao() {
  const practiceAreas = [
    {
      icon: 'ri-scales-3-line',
      title: 'Direito Civil',
      description: 'Atuação completa em questões civis, incluindo contratos, responsabilidade civil, direito de família e sucessões.',
      services: [
        'Contratos e Negociações',
        'Responsabilidade Civil',
        'Direito de Família',
        'Inventários e Sucessões',
        'Direito Imobiliário',
        'Ações de Cobrança'
      ],
      image: 'https://readdy.ai/api/search-image?query=professional%20legal%20consultation%20for%20civil%20law%20matters%2C%20lawyer%20reviewing%20family%20law%20documents%20in%20elegant%20office%2C%20civil%20litigation%20consultation%20with%20warm%20professional%20lighting%2C%20sophisticated%20legal%20advice%20meeting%20for%20contract%20disputes&width=400&height=300&seq=5&orientation=landscape'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Direito Trabalhista',
      description: 'Defesa especializada dos direitos trabalhistas, tanto para empregados quanto empregadores.',
      services: [
        'Rescisões Contratuais',
        'Processos Trabalhistas',
        'Acordos Trabalhistas',
        'Consultoria em CLT',
        'Defesa em Audiências',
        'Cálculos Trabalhistas'
      ],
      image: 'https://readdy.ai/api/search-image?query=employment%20law%20consultation%20in%20modern%20office%2C%20labor%20rights%20legal%20meeting%20with%20professional%20atmosphere%2C%20workplace%20legal%20advice%20session%20with%20warm%20lighting%2C%20employment%20contract%20review%20in%20sophisticated%20legal%20environment&width=400&height=300&seq=6&orientation=landscape'
    },
    {
      icon: 'ri-building-line',
      title: 'Direito Empresarial',
      description: 'Assessoria jurídica completa para empresas, desde a constituição até questões complexas de compliance.',
      services: [
        'Constituição de Empresas',
        'Contratos Comerciais',
        'Compliance Empresarial',
        'Fusões e Aquisições',
        'Recuperação Judicial',
        'Consultoria Societária'
      ],
      image: 'https://readdy.ai/api/search-image?query=corporate%20law%20meeting%20in%20executive%20boardroom%2C%20business%20legal%20consultation%20with%20professional%20lawyers%2C%20commercial%20contract%20negotiation%20in%20elegant%20office%2C%20corporate%20compliance%20discussion%20with%20warm%20professional%20lighting&width=400&height=300&seq=7&orientation=landscape'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Direito do Consumidor',
      description: 'Proteção efetiva dos direitos do consumidor em relações de consumo e questões de mercado.',
      services: [
        'Defesa do Consumidor',
        'Ações contra Fornecedores',
        'Danos Morais e Materiais',
        'Contratos de Consumo',
        'Recall de Produtos',
        'Publicidade Enganosa'
      ],
      image: 'https://readdy.ai/api/search-image?query=consumer%20rights%20legal%20consultation%2C%20customer%20protection%20legal%20advice%20meeting%2C%20consumer%20law%20discussion%20in%20professional%20office%2C%20client%20rights%20defense%20consultation%20with%20warm%20lighting&width=400&height=300&seq=8&orientation=landscape'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Consultoria Preventiva',
      description: 'Análise de riscos e orientação jurídica preventiva para evitar litígios e problemas futuros.',
      services: [
        'Análise de Riscos',
        'Auditoria Jurídica',
        'Pareceres Técnicos',
        'Due Diligence',
        'Treinamentos Jurídicos',
        'Políticas Internas'
      ],
      image: 'https://readdy.ai/api/search-image?query=preventive%20legal%20consultation%20meeting%2C%20risk%20analysis%20legal%20advice%20session%2C%20corporate%20legal%20audit%20in%20modern%20office%2C%20business%20compliance%20consultation%20with%20professional%20atmosphere&width=400&height=300&seq=9&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 46, 42, 0.8), rgba(59, 46, 42, 0.8)), url('https://readdy.ai/api/search-image?query=professional%20law%20library%20with%20legal%20books%20and%20scales%20of%20justice%2C%20elegant%20legal%20research%20environment%20with%20warm%20lighting%2C%20sophisticated%20law%20firm%20library%20with%20wooden%20shelves%20and%20legal%20volumes%2C%20classic%20legal%20office%20interior%20with%20professional%20atmosphere&width=1920&height=800&seq=10&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-6">
            Áreas de Atuação
          </h1>
          <p className="font-lato text-xl text-beige-light max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
            sempre com foco na excelência e nos resultados.
          </p>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mr-4">
                      <i className={`${area.icon} text-2xl text-gold-light`}></i>
                    </div>
                    <h2 className="font-playfair font-bold text-3xl text-brown-dark">
                      {area.title}
                    </h2>
                  </div>
                  
                  <p className="font-lato text-lg text-brown-light mb-8 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-4">
                      Nossos Serviços:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <i className="ri-check-line text-gold-light mr-3"></i>
                          <span className="font-lato text-brown-light">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="primary" size="lg">
                    <i className="ri-phone-line mr-2"></i>
                    Consultar Especialista
                  </Button>
                </div>
                
                <div className={`animate-scale-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={area.image}
                    alt={area.title}
                    className="rounded-xl shadow-lg object-cover w-full h-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              Como Trabalhamos
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Nosso processo estruturado garante atendimento personalizado e resultados efetivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consulta Inicial',
                description: 'Análise detalhada do seu caso e orientação sobre as melhores estratégias.'
              },
              {
                step: '02',
                title: 'Estratégia Jurídica',
                description: 'Desenvolvimento de plano de ação personalizado para seu caso específico.'
              },
              {
                step: '03',
                title: 'Execução',
                description: 'Implementação das ações jurídicas com acompanhamento constante.'
              },
              {
                step: '04',
                title: 'Resultado',
                description: 'Conclusão do processo com relatório detalhado dos resultados obtidos.'
              }
            ].map((process, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-playfair font-bold text-xl text-white">{process.step}</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-4">
                  {process.title}
                </h3>
                <p className="font-lato text-brown-light leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brown-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-white mb-6">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="font-lato text-xl text-beige-light mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e agende uma consulta. Nossa equipe especializada 
            está pronta para analisar seu caso e oferecer as melhores soluções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                <i className="ri-calendar-line mr-2"></i>
                Agendar Consulta
              </Button>
            </Link>
            <Link to="/equipe">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brown-dark">
                <i className="ri-team-line mr-2"></i>
                Conhecer Equipe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
