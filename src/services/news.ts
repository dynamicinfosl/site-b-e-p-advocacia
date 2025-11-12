import { getFallbackNews } from './newsFallback';

const GNEWS_SEARCH_ENDPOINT = 'https://gnews.io/api/v4/search';
const TOKEN_WARNING_MESSAGE =
  'VITE_NEWS_API_KEY não foi configurada ou é inválida. Usando notícias padrão offline.';

type FetchNewsOptions = {
  query?: string;
  lang?: string;
  country?: string;
  maxResults?: number;
  signal?: AbortSignal;
};

export type NewsArticle = {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
};

const DEFAULT_QUERY = 'advocacia OR "direito" OR "legislação"';

function buildUrl(query: string, token: string, options: FetchNewsOptions) {
  const params = new URLSearchParams({
    q: query || DEFAULT_QUERY,
    token,
    lang: options.lang ?? 'pt',
    max: String(options.maxResults ?? 12),
  });

  if (options.country) {
    params.append('country', options.country);
  }

  return `${GNEWS_SEARCH_ENDPOINT}?${params.toString()}`;
}

export async function fetchNews(options: FetchNewsOptions = {}): Promise<NewsArticle[]> {
  const token = import.meta.env.VITE_NEWS_API_KEY as string | undefined;

  if (!token) {
    console.warn(TOKEN_WARNING_MESSAGE);
    return getFallbackNews();
  }

  const url = buildUrl(options.query ?? DEFAULT_QUERY, token, options);

  const response = await fetch(url, {
    signal: options.signal,
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      console.warn(`${TOKEN_WARNING_MESSAGE} (status ${response.status})`);
      return getFallbackNews();
    }
    const message = `Falha ao buscar notícias: ${response.status} ${response.statusText}`.trim();
    throw new Error(message);
  }

  const data = await response.json();
  const articles: unknown = data?.articles ?? [];

  if (!Array.isArray(articles)) {
    throw new Error('Resposta inesperada da API de notícias.');
  }

  return articles
    .filter((article) => Boolean(article))
    .map((article) => normalizeArticle(article));
}

function normalizeArticle(article: any): NewsArticle {
  return {
    id: article?.url ?? (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`),
    title: article?.title ?? 'Título indisponível',
    description: article?.description ?? '',
    content: article?.content ?? '',
    url: article?.url ?? '#',
    imageUrl: article?.image ?? article?.image_url ?? '',
    source: article?.source?.name ?? 'Fonte desconhecida',
    publishedAt: article?.publishedAt ?? article?.published_at ?? new Date().toISOString(),
  };
}
