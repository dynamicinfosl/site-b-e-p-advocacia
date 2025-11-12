import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import Button from "../../components/base/Button";
import { Link } from "react-router-dom";
import { fetchNews } from "../../services/news";
import type { NewsArticle } from "../../services/news";

type BlogArticle = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  dateShort: string;
  readTime: string;
  image: string;
  url: string;
};

const IMAGE_PLACEHOLDER = "https://placehold.co/600x400?text=Not%C3%ADcia+Jur%C3%ADdica";

const categories = ["Todos", "Direito Civil", "Direito Trabalhista", "Direito Empresarial", "Direito do Consumidor"];

const categoryQueries: Record<string, string> = {
  Todos: "advocacia OR \"direito\" OR \"legislação\"",
  "Direito Civil": "\"direito civil\" OR \"família\" OR \"sucessões\"",
  "Direito Trabalhista": "\"direito trabalhista\" OR CLT OR \"relações de trabalho\"",
  "Direito Empresarial": "\"direito empresarial\" OR \"societário\" OR \"contratos comerciais\"",
  "Direito do Consumidor": "\"direito do consumidor\" OR PROCON OR \"relação de consumo\"",
};

function estimateReadTime(text: string) {
  if (!text) {
    return "3 min";
  }

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "Data indisponível";
  }
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatDateShort(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "Data";
  }
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
  }).format(date);
}

function truncate(text: string, maxLength = 200) {
  if (!text) {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

function mapNewsToBlogArticles(newsArticles: NewsArticle[], selectedCategory: string): BlogArticle[] {
  return newsArticles.map((article) => {
    const category = selectedCategory === "Todos" ? article.source || "Notícia Jurídica" : selectedCategory;

    return {
      id: article.id,
      title: article.title,
      excerpt: truncate(article.description || article.content || ""),
      category,
      author: article.source || "Redação",
      date: formatDate(article.publishedAt),
      dateShort: formatDateShort(article.publishedAt),
      readTime: estimateReadTime(article.content || article.description || ""),
      image: article.imageUrl || IMAGE_PLACEHOLDER,
      url: article.url,
    };
  });
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const cacheRef = useRef<Record<string, BlogArticle[]>>({});

  const selectedQuery = useMemo(
    () => categoryQueries[selectedCategory] ?? categoryQueries["Todos"],
    [selectedCategory]
  );

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const cachedArticles = cacheRef.current[selectedCategory];

    if (cachedArticles) {
      setArticles(cachedArticles);
      setError(null);
      setLoading(false);
      return () => {
        isMounted = false;
        controller.abort();
      };
    }

    setLoading(true);
    setError(null);

    fetchNews({ query: selectedQuery, signal: controller.signal })
      .then((news) => {
        if (!isMounted) {
          return;
        }
        const mappedArticles = mapNewsToBlogArticles(news, selectedCategory);
        cacheRef.current[selectedCategory] = mappedArticles;
        setArticles(mappedArticles);
      })
      .catch((err: unknown) => {
        if (!isMounted || (err as Error)?.name === "AbortError") {
          return;
        }
        const message = err instanceof Error ? err.message : "Erro ao carregar notícias.";
        setError(message);
        setArticles([]);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [selectedCategory, selectedQuery, reloadKey]);

  const handleRetry = () => {
    delete cacheRef.current[selectedCategory];
    setReloadKey((value) => value + 1);
  };

  const handleOpenArticle = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const featuredArticles = selectedCategory === "Todos" ? articles.slice(0, 2) : [];
  const regularArticles = selectedCategory === "Todos" ? articles.slice(2) : articles;
  const showSkeletons = loading && articles.length === 0;
  const hasArticles = !showSkeletons && !error && regularArticles.length > 0;

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
                    ? "bg-gold-light text-brown-dark"
                    : "bg-white text-brown-light hover:bg-gold-light hover:text-brown-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos em Destaque */}
      {selectedCategory === "Todos" && (
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
              {showSkeletons
                ? Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={`featured-skeleton-${index}`}
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-beige-dark/40"
                    >
                      <div className="w-full h-48 bg-beige-dark/30 animate-pulse" />
                      <div className="p-6 space-y-4">
                        <div className="h-6 bg-beige-dark/40 rounded animate-pulse" />
                        <div className="h-4 bg-beige-dark/40 rounded animate-pulse" />
                        <div className="h-4 bg-beige-dark/40 rounded w-2/3 animate-pulse" />
                        <div className="h-4 bg-beige-dark/40 rounded w-1/2 animate-pulse" />
                      </div>
                    </div>
                  ))
                : featuredArticles.map((article, index) => (
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
                          loading="lazy"
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
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => handleOpenArticle(article.url)}
                        >
                          Ler Artigo Completo
                          <i className="ri-arrow-right-line ml-2"></i>
                        </Button>
                      </div>
                    </article>
                  ))}
            </div>

            {!showSkeletons && !featuredArticles.length && !error && (
              <p className="font-lato text-center text-brown-light mt-10">
                Ainda não encontramos notícias em destaque. Tente outra categoria ou atualize em alguns minutos.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Todos os Artigos */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-brown-dark mb-4">
              {selectedCategory === "Todos" ? "Últimas Notícias" : `Artigos - ${selectedCategory}`}
            </h2>
            <p className="font-lato text-lg text-brown-light max-w-2xl mx-auto">
              Explore nosso conteúdo jurídico especializado e mantenha-se informado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showSkeletons &&
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`article-skeleton-${index}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-brown-light/20"
                >
                  <div className="w-full h-48 bg-brown-light/10 animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-brown-light/20 rounded animate-pulse" />
                    <div className="h-4 bg-brown-light/20 rounded w-5/6 animate-pulse" />
                    <div className="h-4 bg-brown-light/20 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-brown-light/20 rounded w-1/2 animate-pulse" />
                  </div>
                </div>
              ))}

            {!showSkeletons && hasArticles &&
              regularArticles.map((article, index) => (
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
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-light text-brown-dark px-3 py-1 rounded-full text-xs font-lato font-semibold">
                        {article.category}
                      </span>
                    </div>
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
                      <div className="flex items-center space-x-2 capitalize">
                        <span className="flex items-center">
                          <i className="ri-calendar-line mr-1"></i>
                          {article.dateShort}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-time-line mr-1"></i>
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => handleOpenArticle(article.url)}
                    >
                      Ler Mais
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Button>
                  </div>
                </article>
              ))}

            {!showSkeletons && !hasArticles && !error && (
              <div className="col-span-full flex flex-col items-center text-center bg-white rounded-xl shadow-lg px-8 py-12">
                <i className="ri-newspaper-line text-5xl text-gold-light mb-4" />
                <h3 className="font-playfair text-2xl text-brown-dark mb-3">
                  Nenhuma notícia encontrada
                </h3>
                <p className="font-lato text-brown-light mb-6">
                  Não localizamos notícias recentes para esta categoria. Tente novamente em alguns minutos ou escolha outra área.
                </p>
                <Button variant="primary" onClick={handleRetry}>
                  Atualizar notícias
                  <i className="ri-refresh-line ml-2"></i>
                </Button>
              </div>
            )}
          </div>

          {error && (
            <div className="max-w-3xl mx-auto mt-16 bg-white border border-red-200 text-center rounded-xl px-8 py-10 shadow-lg">
              <h3 className="font-playfair text-2xl text-red-700 mb-4">Erro ao carregar notícias</h3>
              <p className="font-lato text-brown-light mb-6">
                {error}
              </p>
              <Button variant="primary" onClick={handleRetry}>
                Tentar novamente
                <i className="ri-refresh-line ml-2"></i>
              </Button>
            </div>
          )}
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
