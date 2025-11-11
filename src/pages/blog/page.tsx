
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const categories = ['Todos', 'Direito Civil', 'Direito Trabalhista', 'Direito Empresarial', 'Direito do Consumidor'];
  
  const articles = [
    {
      id: 1,
      title: 'Novas Regras do Marco Civil da Internet: O que Mudou em 2024',
      excerpt: 'Entenda as principais alterações na legislação digital e como elas afetam empresas e consumidores.',
      category: 'Direito do Consumidor',
      author: 'Dra. Mariana Lima',
      date: '15 de Janeiro, 2024',
      readTime: '5 min',
      image: 'https://readdy.ai/api/search-image?query=digital%20law%20and%20internet%20regulations%20concept%2C%20modern%20technology%20legal%20framework%20illustration%2C%20cyber%20law%20and%20data%20protection%20visual%20representation%2C%20digital%20rights%20and%20online%20privacy%20legal%20concept%20with%20professional%20design&width=400&height=250&seq=18&orientation=landscape',
      featured: true
    },
    {
      id: 2,
      title: 'Reforma Trabalhista: Impactos nas Relações de Trabalho',
      excerpt: 'Análise detalhada das mudanças na CLT e seus reflexos no dia a dia das empresas e trabalhadores.',
      category: 'Direito Trabalhista',
      author: 'Dra. Patricia Santos',
      date: '10 de Janeiro, 2024',
      readTime: '7 min',
      image: 'https://readdy.ai/api/search-image?query=labor%20law%20and%20employment%20rights%20concept%2C%20workplace%20legal%20framework%20illustration%2C%20employment%20contract%20and%20worker%20rights%20visual%2C%20professional%20labor%20legislation%20design%20with%20modern%20elements&width=400&height=250&seq=19&orientation=landscape',
      featured: true
    },
    {
      id: 3,
      title: 'LGPD: Como Adequar sua Empresa à Lei de Proteção de Dados',
      excerpt: 'Guia prático para implementação da LGPD em empresas de todos os portes.',
      category: 'Direito Empresarial',
      author: 'Dra. Ana Rodrigues',
      date: '8 de Janeiro, 2024',
      readTime: '6 min',
      image: 'https://readdy.ai/api/search-image?query=data%20protection%20and%20privacy%20law%20concept%2C%20LGPD%20compliance%20illustration%2C%20personal%20data%20security%20legal%20framework%2C%20corporate%20data%20protection%20visual%20with%20professional%20design%20elements&width=400&height=250&seq=20&orientation=landscape',
      featured: false
    },
    {
      id: 4,
      title: 'Direito de Família: Guarda Compartilhada e Alienação Parental',
      excerpt: 'Entenda os aspectos legais da guarda compartilhada e como identificar casos de alienação parental.',
      category: 'Direito Civil',
      author: 'Dr. Carlos Oliveira',
      date: '5 de Janeiro, 2024',
      readTime: '8 min',
      image: 'https://readdy.ai/api/search-image?query=family%20law%20and%20child%20custody%20concept%2C%20family%20legal%20protection%20illustration%2C%20parental%20rights%20and%20child%20welfare%20visual%2C%20family%20court%20and%20custody%20legal%20framework%20with%20warm%20professional%20design&width=400&height=250&seq=21&orientation=landscape',
      featured: false
    },
    {
      id: 5,
      title: 'Contratos Empresariais: Cláusulas Essenciais para Proteger seu Negócio',
      excerpt: 'Principais cláusulas que não podem faltar em contratos comerciais para garantir segurança jurídica.',
      category: 'Direito Empresarial',
      author: 'Dr. Bruno Pereira',
      date: '3 de Janeiro, 2024',
      readTime: '6 min',
      image: 'https://readdy.ai/api/search-image?query=business%20contracts%20and%20commercial%20law%20concept%2C%20corporate%20legal%20agreements%20illustration%2C%20contract%20negotiation%20and%20business%20law%20visual%2C%20commercial%20legal%20framework%20with%20professional%20design%20elements&width=400&height=250&seq=22&orientation=landscape',
      featured: false
    },
    {
      id: 6,
      title: 'Direitos do Consumidor: Como Reclamar de Produtos Defeituosos',
      excerpt: 'Passo a passo para exercer seus direitos como consumidor em casos de produtos com defeito.',
      category: 'Direito do Consumidor',
      author: 'Dra. Mariana Lima',
      date: '1 de Janeiro, 2024',
      readTime: '4 min',
      image: 'https://readdy.ai/api/search-image?query=consumer%20rights%20and%20product%20liability%20concept%2C%20customer%20protection%20legal%20framework%20illustration%2C%20consumer%20law%20and%20product%20defects%20visual%2C%20consumer%20advocacy%20and%20rights%20protection%20design&width=400&height=250&seq=23&orientation=landscape',
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 46, 42, 0.8), rgba(59, 46, 42, 0.8)), url('https://readdy.ai/api/search-image?query=legal%20blog%20and%20news%20concept%2C%20law%20journal%20and%20legal%20publications%2C%20professional%20legal%20writing%20and%20research%20environment%2C%20legal%20knowledge%20and%20education%20visual%20with%20modern%20design%20elements&width=1920&height=800&seq=24&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-6">
            Blog Jurídico
          </h1>
          <p className="font-lato text-xl text-beige-light max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas novidades do mundo jurídico, 
            análises de casos e orientações práticas dos nossos especialistas.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-beige-light border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-lato font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gold-light text-brown-dark'
                    : 'bg-white text-brown-light hover:bg-gold-light hover:text-brown-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos em Destaque */}
      {selectedCategory === 'Todos' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
                Artigos em Destaque
              </h2>
              <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
                Os artigos mais relevantes e atuais do nosso blog jurídico.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-light text-brown-dark px-3 py-1 rounded-full text-xs font-lato font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-xl text-brown-dark mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="font-lato text-brown-light mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-brown-light mb-4">
                      <span className="font-lato">{article.author}</span>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <i className="ri-calendar-line mr-1"></i>
                          {article.date}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-time-line mr-1"></i>
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Ler Artigo Completo
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Todos os Artigos */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              {selectedCategory === 'Todos' ? 'Últimos Artigos' : `Artigos - ${selectedCategory}`}
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Explore nosso conteúdo jurídico especializado e mantenha-se informado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article 
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-light text-brown-dark px-3 py-1 rounded-full text-xs font-lato font-semibold">
                      {article.category}
                    </span>
                  </div>
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-brown-dark text-white px-3 py-1 rounded-full text-xs font-lato font-semibold">
                        Destaque
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-lg text-brown-dark mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-lato text-brown-light mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-brown-light mb-4">
                    <span className="font-lato">{article.author}</span>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center">
                        <i className="ri-calendar-line mr-1"></i>
                        {article.date.split(',')[0]}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Ler Mais
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brown-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-white mb-6">
            Receba Nossas Atualizações
          </h2>
          <p className="font-lato text-xl text-beige-light mb-8 max-w-3xl mx-auto">
            Inscreva-se em nossa newsletter e receba os últimos artigos jurídicos 
            e novidades do escritório diretamente em seu e-mail.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-beige-dark focus:outline-none focus:ring-2 focus:ring-gold-light font-lato"
              />
              <Button variant="primary" size="md">
                <i className="ri-mail-send-line mr-2"></i>
                Inscrever
              </Button>
            </div>
            <p className="font-lato text-sm text-beige-light mt-3">
              Não enviamos spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-6">
            Precisa de Orientação Jurídica?
          </h2>
          <p className="font-lato text-xl text-brown-light mb-8 max-w-3xl mx-auto">
            Nossos especialistas estão prontos para esclarecer suas dúvidas 
            e oferecer soluções personalizadas para seu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                <i className="ri-calendar-line mr-2"></i>
                Agendar Consulta
              </Button>
            </Link>
            <Link to="/equipe">
              <Button variant="secondary" size="lg">
                <i className="ri-team-line mr-2"></i>
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
