
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import Button from '../../components/base/Button';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    area: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d49k4cmbibdhvlkt2qdg', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          area: '',
          mensagem: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Endereço',
      content: 'Rua Augusta, 1234\nSão Paulo - SP\nCEP: 01305-100'
    },
    {
      icon: 'ri-phone-line',
      title: 'Telefone',
      content: '(11) 99999-9999'
    },
    {
      icon: 'ri-mail-line',
      title: 'E-mail',
      content: 'contato@bpadvocacia.com.br'
    },
    {
      icon: 'ri-time-line',
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 46, 42, 0.8), rgba(59, 46, 42, 0.8)), url('https://readdy.ai/api/search-image?query=professional%20law%20office%20reception%20area%20with%20elegant%20design%2C%20modern%20legal%20consultation%20room%20with%20warm%20lighting%2C%20sophisticated%20law%20firm%20entrance%20with%20contemporary%20furniture%2C%20professional%20legal%20office%20interior%20with%20welcoming%20atmosphere&width=1920&height=800&seq=25&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-6">
            Entre em Contato
          </h1>
          <p className="font-lato text-xl text-beige-light max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco e agende 
            uma consulta para discutir seu caso com nossos especialistas.
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              Nossas Informações
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Múltiplas formas de entrar em contato conosco. Escolha a que for mais conveniente para você.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${info.icon} text-2xl text-gold-light`}></i>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-4">
                  {info.title}
                </h3>
                <p className="font-lato text-brown-light leading-relaxed whitespace-pre-line">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-6">
                Envie sua Mensagem
              </h2>
              <p className="font-lato text-lg text-brown-light mb-8 leading-relaxed">
                Preencha o formulário abaixo com suas informações e detalhes sobre seu caso. 
                Nossa equipe entrará em contato em até 24 horas para agendar uma consulta.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-light/20 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-gold-light"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-brown-dark mb-2">Resposta Rápida</h4>
                    <p className="font-lato text-brown-light">Retornamos seu contato em até 24 horas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-light/20 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-shield-check-line text-gold-light"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-brown-dark mb-2">Confidencialidade</h4>
                    <p className="font-lato text-brown-light">Suas informações são tratadas com total sigilo.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-light/20 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-user-heart-line text-gold-light"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-brown-dark mb-2">Atendimento Personalizado</h4>
                    <p className="font-lato text-brown-light">Cada caso recebe atenção dedicada e especializada.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <form onSubmit={handleSubmit} className="bg-beige-light rounded-xl p-8 shadow-lg" data-readdy-form id="contato-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nome" className="block font-lato font-semibold text-brown-dark mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:outline-none focus:ring-2 focus:ring-gold-light font-lato text-sm"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-lato font-semibold text-brown-dark mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:outline-none focus:ring-2 focus:ring-gold-light font-lato text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="telefone" className="block font-lato font-semibold text-brown-dark mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:outline-none focus:ring-2 focus:ring-gold-light font-lato text-sm"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="area" className="block font-lato font-semibold text-brown-dark mb-2">
                      Área de Interesse
                    </label>
                    <select
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:outline-none focus:ring-2 focus:ring-gold-light font-lato text-sm pr-8"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Direito Civil">Direito Civil</option>
                      <option value="Direito Trabalhista">Direito Trabalhista</option>
                      <option value="Direito Empresarial">Direito Empresarial</option>
                      <option value="Direito do Consumidor">Direito do Consumidor</option>
                      <option value="Consultoria Preventiva">Consultoria Preventiva</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="assunto" className="block font-lato font-semibold text-brown-dark mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:outline-none focus:ring-2 focus:ring-gold-light font-lato text-sm"
                    placeholder="Resumo do seu caso"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mensagem" className="block font-lato font-semibold text-brown-dark mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:outline-none focus:ring-2 focus:ring-gold-light font-lato text-sm resize-none"
                    placeholder="Descreva seu caso com detalhes (máximo 500 caracteres)"
                  ></textarea>
                  <p className="text-xs text-brown-light mt-1">
                    {formData.mensagem.length}/500 caracteres
                  </p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <p className="font-lato text-green-800">
                      <i className="ri-check-circle-line mr-2"></i>
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                    <p className="font-lato text-red-800">
                      <i className="ri-error-warning-line mr-2"></i>
                      Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                    </p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting || formData.mensagem.length > 500}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line mr-2 animate-spin"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Enviar Mensagem
                    </>
                  )}
                </Button>
                
                <p className="font-lato text-xs text-brown-light mt-4 text-center">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              Nossa Localização
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Estamos localizados no coração de São Paulo, com fácil acesso por transporte público e particular.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6520442!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização B&P Advocacia"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brown-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-white mb-6">
            Atendimento de Emergência
          </h2>
          <p className="font-lato text-xl text-beige-light mb-8 max-w-3xl mx-auto">
            Para casos urgentes, oferecemos atendimento de emergência 24 horas. 
            Entre em contato conosco pelo WhatsApp ou telefone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Preciso de atendimento de emergência.', '_blank')}
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp 24h
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-brown-dark"
              onClick={() => window.open('tel:+5511999999999', '_self')}
            >
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
