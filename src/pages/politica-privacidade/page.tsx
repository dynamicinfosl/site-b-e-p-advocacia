
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-32 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-brown-dark mb-6">
            Política de Privacidade
          </h1>
          <p className="font-lato text-xl text-brown-light max-w-3xl mx-auto">
            Transparência e proteção dos seus dados pessoais são fundamentais para nós. 
            Conheça como tratamos suas informações.
          </p>
          <div className="mt-8">
            <p className="font-lato text-sm text-brown-light">
              Última atualização: 1º de janeiro de 2024
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Introdução */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                1. Introdução
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-4">
                A B&P Advocacia, inscrita no CNPJ sob o nº 12.345.678/0001-90, com sede na 
                Rua Augusta, 1234, São Paulo - SP, CEP 01305-100, está comprometida com a 
                proteção da privacidade e dos dados pessoais de seus clientes, visitantes do 
                site e demais interessados.
              </p>
              <p className="font-lato text-brown-light leading-relaxed">
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações pessoais, em conformidade com a Lei Geral de 
                Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais normas aplicáveis.
              </p>
            </div>

            {/* Dados Coletados */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                2. Dados Pessoais Coletados
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-6">
                Coletamos os seguintes tipos de dados pessoais:
              </p>
              
              <div className="bg-beige-light rounded-lg p-6 mb-6">
                <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-4">
                  2.1 Dados Fornecidos Voluntariamente
                </h3>
                <ul className="font-lato text-brown-light space-y-2">
                  <li>• Nome completo</li>
                  <li>• Endereço de e-mail</li>
                  <li>• Número de telefone</li>
                  <li>• Endereço residencial ou comercial</li>
                  <li>• Informações sobre o caso jurídico</li>
                  <li>• Documentos relacionados aos serviços solicitados</li>
                </ul>
              </div>
              
              <div className="bg-beige-light rounded-lg p-6">
                <h3 className="font-playfair font-semibold text-xl text-brown-dark mb-4">
                  2.2 Dados Coletados Automaticamente
                </h3>
                <ul className="font-lato text-brown-light space-y-2">
                  <li>• Endereço IP</li>
                  <li>• Informações do navegador</li>
                  <li>• Páginas visitadas em nosso site</li>
                  <li>• Data e hora de acesso</li>
                  <li>• Cookies e tecnologias similares</li>
                </ul>
              </div>
            </div>

            {/* Finalidade */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                3. Finalidade do Tratamento
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-4">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-beige-light rounded-lg p-6">
                  <h4 className="font-playfair font-semibold text-lg text-brown-dark mb-3">
                    Prestação de Serviços
                  </h4>
                  <ul className="font-lato text-brown-light text-sm space-y-1">
                    <li>• Análise de casos jurídicos</li>
                    <li>• Elaboração de contratos</li>
                    <li>• Representação legal</li>
                    <li>• Consultoria jurídica</li>
                  </ul>
                </div>
                <div className="bg-beige-light rounded-lg p-6">
                  <h4 className="font-playfair font-semibold text-lg text-brown-dark mb-3">
                    Comunicação
                  </h4>
                  <ul className="font-lato text-brown-light text-sm space-y-1">
                    <li>• Resposta a consultas</li>
                    <li>• Agendamento de reuniões</li>
                    <li>• Envio de atualizações</li>
                    <li>• Newsletter jurídica</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Base Legal */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                4. Base Legal
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-4">
                O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-light/20 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-gold-light"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-brown-dark mb-2">Consentimento</h4>
                    <p className="font-lato text-brown-light text-sm">Para envio de newsletter e comunicações promocionais.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-light/20 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-gold-light"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-brown-dark mb-2">Execução de Contrato</h4>
                    <p className="font-lato text-brown-light text-sm">Para prestação dos serviços jurídicos contratados.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-light/20 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-gold-light"></i>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-brown-dark mb-2">Legítimo Interesse</h4>
                    <p className="font-lato text-brown-light text-sm">Para melhoria dos nossos serviços e segurança.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compartilhamento */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                5. Compartilhamento de Dados
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-4">
                Seus dados pessoais podem ser compartilhados nas seguintes situações:
              </p>
              <div className="bg-beige-light rounded-lg p-6">
                <ul className="font-lato text-brown-light space-y-3">
                  <li>• <strong>Prestadores de serviços:</strong> Empresas que nos auxiliam na prestação de serviços (ex: contabilidade, TI)</li>
                  <li>• <strong>Autoridades competentes:</strong> Quando exigido por lei ou ordem judicial</li>
                  <li>• <strong>Parceiros jurídicos:</strong> Outros advogados ou escritórios em casos específicos</li>
                  <li>• <strong>Órgãos reguladores:</strong> OAB e demais entidades de classe</li>
                </ul>
              </div>
            </div>

            {/* Segurança */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                6. Segurança dos Dados
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-6">
                Implementamos medidas técnicas e organizacionais para proteger seus dados:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-2xl text-gold-light"></i>
                  </div>
                  <h4 className="font-playfair font-semibold text-brown-dark mb-2">Criptografia</h4>
                  <p className="font-lato text-brown-light text-sm">Dados protegidos por criptografia avançada</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-lock-line text-2xl text-gold-light"></i>
                  </div>
                  <h4 className="font-playfair font-semibold text-brown-dark mb-2">Acesso Restrito</h4>
                  <p className="font-lato text-brown-light text-sm">Acesso limitado apenas a pessoal autorizado</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-refresh-line text-2xl text-gold-light"></i>
                  </div>
                  <h4 className="font-playfair font-semibold text-brown-dark mb-2">Backup Seguro</h4>
                  <p className="font-lato text-brown-light text-sm">Backups regulares em servidores seguros</p>
                </div>
              </div>
            </div>

            {/* Direitos do Titular */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                7. Seus Direitos
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-6">
                Como titular dos dados, você possui os seguintes direitos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: 'ri-eye-line', title: 'Acesso', desc: 'Confirmar a existência de tratamento' },
                  { icon: 'ri-edit-line', title: 'Correção', desc: 'Corrigir dados incompletos ou inexatos' },
                  { icon: 'ri-delete-bin-line', title: 'Exclusão', desc: 'Eliminar dados desnecessários' },
                  { icon: 'ri-download-line', title: 'Portabilidade', desc: 'Receber dados em formato estruturado' },
                  { icon: 'ri-close-circle-line', title: 'Oposição', desc: 'Opor-se ao tratamento' },
                  { icon: 'ri-information-line', title: 'Informação', desc: 'Obter informações sobre o tratamento' }
                ].map((right, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-beige-light rounded-lg p-4">
                    <div className="w-8 h-8 bg-gold-light/20 rounded-full flex items-center justify-center">
                      <i className={`${right.icon} text-gold-light`}></i>
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-brown-dark">{right.title}</h4>
                      <p className="font-lato text-brown-light text-sm">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Retenção */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                8. Retenção de Dados
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-4">
                Mantemos seus dados pessoais pelo tempo necessário para:
              </p>
              <div className="bg-beige-light rounded-lg p-6">
                <ul className="font-lato text-brown-light space-y-2">
                  <li>• Cumprir as finalidades para as quais foram coletados</li>
                  <li>• Atender obrigações legais e regulamentares</li>
                  <li>• Exercer direitos em processos judiciais</li>
                  <li>• Período mínimo de 5 anos conforme Código de Ética da OAB</li>
                </ul>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                9. Contato e DPO
              </h2>
              <p className="font-lato text-brown-light leading-relaxed mb-6">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="bg-brown-dark rounded-lg p-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-4">Encarregado de Dados (DPO)</h4>
                    <div className="space-y-2">
                      <p className="font-lato flex items-center">
                        <i className="ri-user-line mr-2 text-gold-light"></i>
                        Dr. Bruno Pereira
                      </p>
                      <p className="font-lato flex items-center">
                        <i className="ri-mail-line mr-2 text-gold-light"></i>
                        dpo@bpadvocacia.com.br
                      </p>
                      <p className="font-lato flex items-center">
                        <i className="ri-phone-line mr-2 text-gold-light"></i>
                        (11) 99999-9999
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-xl mb-4">Escritório</h4>
                    <div className="space-y-2">
                      <p className="font-lato flex items-start">
                        <i className="ri-map-pin-line mr-2 text-gold-light mt-1"></i>
                        Rua Augusta, 1234<br />
                        São Paulo - SP<br />
                        CEP: 01305-100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alterações */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-brown-dark mb-6">
                10. Alterações na Política
              </h2>
              <p className="font-lato text-brown-light leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos 
                que você a revise regularmente. As alterações entrarão em vigor na data de 
                publicação da versão revisada em nosso site. Mudanças significativas serão 
                comunicadas por e-mail ou através de aviso em nosso site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-6">
            Dúvidas sobre Privacidade?
          </h2>
          <p className="font-lato text-xl text-brown-light mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para esclarecer qualquer questão sobre 
            o tratamento dos seus dados pessoais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <button className="bg-gold-light text-brown-dark hover:bg-brown-light hover:text-white font-lato font-medium transition-all duration-300 cursor-pointer whitespace-nowrap px-8 py-4 text-lg rounded-xl">
                <i className="ri-mail-line mr-2"></i>
                Falar com DPO
              </button>
            </Link>
            <Link to="/">
              <button className="border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-brown-dark font-lato font-medium transition-all duration-300 cursor-pointer whitespace-nowrap px-8 py-4 text-lg rounded-xl">
                <i className="ri-home-line mr-2"></i>
                Voltar ao Início
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
