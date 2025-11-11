
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function Equipe() {
  const team = [
    {
      name: 'Dr. Bruno Pereira',
      oab: 'OAB/SP 123.456',
      position: 'Sócio Fundador',
      specialties: ['Direito Civil', 'Direito Empresarial'],
      experience: '15 anos de experiência',
      description: 'Especialista em direito civil e empresarial, com vasta experiência em contratos e consultoria societária.',
      image: 'https://readdy.ai/api/search-image?query=professional%20male%20lawyer%20in%20elegant%20suit%20standing%20in%20modern%20law%20office%2C%20experienced%20attorney%20with%20confident%20expression%20in%20sophisticated%20legal%20environment%2C%20senior%20partner%20lawyer%20portrait%20with%20warm%20professional%20lighting%2C%20distinguished%20legal%20professional%20in%20contemporary%20office%20setting&width=400&height=500&seq=11&orientation=portrait',
      linkedin: '#',
      email: 'bruno@bpadvocacia.com.br'
    },
    {
      name: 'Dra. Patricia Santos',
      oab: 'OAB/SP 234.567',
      position: 'Sócia',
      specialties: ['Direito Trabalhista', 'Direito do Consumidor'],
      experience: '12 anos de experiência',
      description: 'Especializada em direito trabalhista e do consumidor, com foco em defesa de direitos e mediação de conflitos.',
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20lawyer%20in%20business%20attire%20standing%20in%20elegant%20law%20office%2C%20experienced%20female%20attorney%20with%20confident%20smile%20in%20sophisticated%20legal%20environment%2C%20senior%20female%20partner%20portrait%20with%20warm%20professional%20lighting%2C%20distinguished%20female%20legal%20professional%20in%20contemporary%20office&width=400&height=500&seq=12&orientation=portrait',
      linkedin: '#',
      email: 'patricia@bpadvocacia.com.br'
    },
    {
      name: 'Dr. Carlos Oliveira',
      oab: 'OAB/SP 345.678',
      position: 'Advogado Senior',
      specialties: ['Direito Civil', 'Direito de Família'],
      experience: '10 anos de experiência',
      description: 'Especialista em direito de família e sucessões, com ampla experiência em mediação e conciliação.',
      image: 'https://readdy.ai/api/search-image?query=professional%20male%20lawyer%20in%20formal%20business%20suit%20in%20modern%20law%20office%2C%20experienced%20attorney%20with%20professional%20demeanor%20in%20sophisticated%20legal%20workspace%2C%20senior%20lawyer%20portrait%20with%20warm%20lighting%2C%20distinguished%20legal%20professional%20in%20elegant%20office%20environment&width=400&height=500&seq=13&orientation=portrait',
      linkedin: '#',
      email: 'carlos@bpadvocacia.com.br'
    },
    {
      name: 'Dra. Ana Rodrigues',
      oab: 'OAB/SP 456.789',
      position: 'Advogada',
      specialties: ['Direito Empresarial', 'Consultoria Preventiva'],
      experience: '8 anos de experiência',
      description: 'Focada em consultoria preventiva e compliance empresarial, auxiliando empresas na gestão de riscos jurídicos.',
      image: 'https://readdy.ai/api/search-image?query=professional%20young%20female%20lawyer%20in%20business%20attire%20in%20contemporary%20law%20office%2C%20confident%20female%20attorney%20with%20professional%20appearance%20in%20modern%20legal%20environment%2C%20junior%20partner%20portrait%20with%20warm%20professional%20lighting%2C%20accomplished%20female%20legal%20professional%20in%20elegant%20workspace&width=400&height=500&seq=14&orientation=portrait',
      linkedin: '#',
      email: 'ana@bpadvocacia.com.br'
    },
    {
      name: 'Dr. Rafael Costa',
      oab: 'OAB/SP 567.890',
      position: 'Advogado',
      specialties: ['Direito Trabalhista', 'Direito Previdenciário'],
      experience: '6 anos de experiência',
      description: 'Especializado em direito trabalhista e previdenciário, com foco em processos administrativos e judiciais.',
      image: 'https://readdy.ai/api/search-image?query=professional%20young%20male%20lawyer%20in%20business%20suit%20in%20modern%20law%20office%2C%20confident%20attorney%20with%20professional%20demeanor%20in%20sophisticated%20legal%20environment%2C%20junior%20lawyer%20portrait%20with%20warm%20lighting%2C%20accomplished%20legal%20professional%20in%20contemporary%20office%20setting&width=400&height=500&seq=15&orientation=portrait',
      linkedin: '#',
      email: 'rafael@bpadvocacia.com.br'
    },
    {
      name: 'Dra. Mariana Lima',
      oab: 'OAB/SP 678.901',
      position: 'Advogada',
      specialties: ['Direito do Consumidor', 'Direito Digital'],
      experience: '5 anos de experiência',
      description: 'Especialista em direito do consumidor e direito digital, atuando em casos de proteção de dados e e-commerce.',
      image: 'https://readdy.ai/api/search-image?query=professional%20young%20female%20lawyer%20in%20elegant%20business%20attire%20in%20modern%20law%20office%2C%20confident%20female%20attorney%20with%20warm%20smile%20in%20sophisticated%20legal%20workspace%2C%20junior%20female%20lawyer%20portrait%20with%20professional%20lighting%2C%20accomplished%20legal%20professional%20in%20contemporary%20office&width=400&height=500&seq=16&orientation=portrait',
      linkedin: '#',
      email: 'mariana@bpadvocacia.com.br'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 46, 42, 0.8), rgba(59, 46, 42, 0.8)), url('https://readdy.ai/api/search-image?query=professional%20law%20firm%20team%20meeting%20in%20elegant%20conference%20room%2C%20group%20of%20lawyers%20in%20business%20attire%20discussing%20legal%20strategy%2C%20sophisticated%20legal%20team%20collaboration%20in%20modern%20office%20with%20warm%20lighting%2C%20experienced%20attorneys%20working%20together%20in%20contemporary%20legal%20environment&width=1920&height=800&seq=17&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-6">
            Nossa Equipe
          </h1>
          <p className="font-lato text-xl text-beige-light max-w-3xl mx-auto">
            Profissionais experientes e especializados, comprometidos em oferecer 
            as melhores soluções jurídicas para nossos clientes.
          </p>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              Conheça Nossos Advogados
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Uma equipe multidisciplinar com vasta experiência em diversas áreas do direito, 
              pronta para defender seus interesses com competência e dedicação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-brown-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="font-lato text-sm text-gold-light mb-2">
                    {member.oab}
                  </p>
                  <p className="font-lato font-semibold text-brown-light mb-3">
                    {member.position}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-lato font-semibold text-sm text-brown-dark mb-2">
                      Especialidades:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <span 
                          key={specIndex}
                          className="bg-beige-light text-brown-dark px-3 py-1 rounded-full text-xs font-lato"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="font-lato text-sm text-brown-light mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-brown-light mb-4">
                    <span className="font-lato">{member.experience}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gold-light/20 rounded-full flex items-center justify-center hover:bg-gold-light hover:text-white transition-colors duration-300"
                    >
                      <i className="ri-mail-line text-lg"></i>
                    </a>
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 bg-gold-light/20 rounded-full flex items-center justify-center hover:bg-gold-light hover:text-white transition-colors duration-300"
                    >
                      <i className="ri-linkedin-fill text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais da Equipe */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              Por que Escolher Nossa Equipe?
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Nossos diferenciais garantem atendimento de excelência e resultados efetivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-graduation-cap-line',
                title: 'Formação Sólida',
                description: 'Advogados formados nas melhores universidades com especializações reconhecidas.'
              },
              {
                icon: 'ri-award-line',
                title: 'Experiência Comprovada',
                description: 'Mais de 15 anos de atuação com centenas de casos resolvidos com sucesso.'
              },
              {
                icon: 'ri-team-line',
                title: 'Trabalho em Equipe',
                description: 'Abordagem colaborativa que combina diferentes especialidades para melhores resultados.'
              },
              {
                icon: 'ri-customer-service-line',
                title: 'Atendimento Personalizado',
                description: 'Cada cliente recebe atenção dedicada e estratégias personalizadas para seu caso.'
              }
            ].map((differential, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${differential.icon} text-2xl text-gold-light`}></i>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-4">
                  {differential.title}
                </h3>
                <p className="font-lato text-brown-light leading-relaxed">
                  {differential.description}
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
            Fale com Nossa Equipe
          </h2>
          <p className="font-lato text-xl text-beige-light mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e converse diretamente com nossos especialistas. 
            Estamos prontos para analisar seu caso e oferecer as melhores soluções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                <i className="ri-calendar-line mr-2"></i>
                Agendar Consulta
              </Button>
            </Link>
            <Link to="/areas-atuacao">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brown-dark">
                <i className="ri-scales-3-line mr-2"></i>
                Ver Especialidades
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
