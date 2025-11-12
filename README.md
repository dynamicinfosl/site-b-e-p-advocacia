## B&P Advocacia — Site institucional

Este repositório contém o código-fonte do site institucional da B&P Advocacia. O projeto é um SPA construído com React + TypeScript, empacotado com Vite, estilizado com Tailwind CSS e internacionalizado com i18next. O roteamento é feito com React Router.

### Principais recursos
- Conteúdo institucional: Home, Quem Somos, Áreas de Atuação, Equipe, Blog, Contato e Política de Privacidade.
- Roteamento SPA com `react-router-dom`.
- Internacionalização com `i18next` e `react-i18next` (detecção automática de idioma via `i18next-browser-languagedetector`).
- Estilização com Tailwind CSS e design responsivo.
- SEO básico via metatags em `index.html` e dados estruturados Schema.org (`LegalService`).
- Injeção dinâmica de `basename` para rotas via variável de build `__BASE_PATH__` (Vite define).
- Widget de atendimento Readdy incorporado em `index.html`.

## Stack técnica
- React 19 + TypeScript
- Vite 7 (plugin `@vitejs/plugin-react-swc`)
- React Router 7
- Tailwind CSS 3
- i18next 25 + `react-i18next`
- PostCSS + Autoprefixer

Dependências presentes para futuras integrações (não necessariamente usadas em todas as páginas no momento): Firebase, Supabase, Stripe, Recharts.

## Scripts
Disponíveis em `package.json`:

```bash
npm run dev      # Ambiente de desenvolvimento (http://localhost:3000)
npm run build    # Build de produção (saída em /out)
npm run preview  # Servir build localmente para verificação
```

Observação: o servidor de desenvolvimento inicia na porta 3000 e expõe em `0.0.0.0` (configurado em `vite.config.ts`).

## Variáveis de build/ambiente
As seguintes variáveis são lidas no build do Vite e injetadas como constantes globais:

- `BASE_PATH` (opcional): define o caminho base do aplicativo (útil quando servido em subcaminho, ex.: `/site`).
  - Mapeada para `__BASE_PATH__` no código e usada como `basename` do `BrowserRouter`.
- `IS_PREVIEW` (opcional): sinaliza modo de preview (booleano). Mapeada para `__IS_PREVIEW__`.
- `VITE_NEWS_API_KEY` (obrigatória para notícias dinâmicas): chave da API do [GNews](https://gnews.io/). Sem essa variável o aplicativo utiliza um conjunto de notícias padrão apenas para demonstração.

Exemplos de uso no Windows PowerShell:
```powershell
$env:BASE_PATH="/"; $env:IS_PREVIEW="true"; npm run build
```

Em Unix-like:
```bash
BASE_PATH=/ IS_PREVIEW=true npm run build
```

## Estrutura de pastas

```
.
├─ index.html
├─ package.json
├─ postcss.config.ts
├─ tailwind.config.ts
├─ tsconfig*.json
├─ vite.config.ts
└─ src/
   ├─ App.tsx
   ├─ main.tsx
   ├─ index.css
   ├─ assets/
   │  └─ images/            # imagens do site (logos, fotos, ícones)
   │     └─ logo/           # variações do logo da B&P Advocacia
   ├─ i18n/
   │  ├─ index.ts           # setup do i18next
   │  └─ local/             # recursos de tradução
   ├─ router/
   │  ├─ config.tsx         # definição das rotas
   │  └─ index.ts           # integração com React Router
   ├─ components/
   │  ├─ base/              # componentes reutilizáveis (ex.: Button)
   │  └─ feature/           # Header, Footer, WhatsAppButton, etc.
   └─ pages/
      ├─ home/page.tsx
      ├─ quem-somos/page.tsx
      ├─ areas-atuacao/page.tsx
      ├─ equipe/page.tsx
      ├─ blog/page.tsx
      ├─ contato/page.tsx
      ├─ politica-privacidade/page.tsx
      └─ NotFound.tsx
```

## Roteamento
Rotas configuradas em `src/router/config.tsx`:

- `/` → Home
- `/quem-somos`
- `/areas-atuacao`
- `/equipe`
- `/blog`
- `/contato`
- `/politica-privacidade`
- `*` → NotFound

O `basename` do `BrowserRouter` é configurado com `__BASE_PATH__` (derivado de `BASE_PATH` no momento do build).

## Internacionalização (i18n)
- Inicialização em `src/i18n/index.ts` com `i18next`, `react-i18next` e `i18next-browser-languagedetector`.
- Idioma padrão: `en`, com `fallbackLng: 'en'`.
- Recursos de tradução são importados de `src/i18n/local` (estrutura pode ser expandida por idioma/namespace).

Para usar nas páginas/componentes:
```tsx
import { useTranslation } from 'react-i18next';

const Componente = () => {
  const { t } = useTranslation();
  return <h1>{t('chave.exemplo')}</h1>;
};
```

## Estilos e design system
- Tailwind CSS configurado em `tailwind.config.ts` com paleta e fontes customizadas (Playfair, Lato, Pacifico) e animações (`fade-in`, `slide-up`, `scale-in`).
- Escaneia `index.html` e `src/**/*.{js,ts,jsx,tsx}` para purga de classes.
- Estilos globais em `src/index.css`.

## Assets e imagens
- Imagens organizadas em `src/assets/images/`.
- Subpastas recomendadas: `logo/`, `team/`, `blog/`, `areas/`, `icons/`.
- Para usar imagens nos componentes:

```tsx
import logo from '@/assets/images/logo/logo-bp.png';

<img src={logo} alt="B&P Advocacia" />
```

O alias `@` aponta para `src/` (configurado em `vite.config.ts`).

## SEO e acessibilidade
- Metatags e título definidos em `index.html`.
- Tags Open Graph e `link rel="canonical"`.
- Dados estruturados Schema.org (`LegalService`) em JSON-LD.
- Recomenda-se manter headings hierárquicos, texto alternativo em imagens e foco visível.

## Integrações e bibliotecas adicionais
- Readdy Widget: carregado via script em `index.html` (configurações visuais e `projectId` definidos lá).
- Dependências disponíveis para futuras integrações:
  - Firebase (`firebase`): auth, firestore, storage, etc.
  - Supabase (`@supabase/supabase-js`)
  - Stripe (`@stripe/react-stripe-js` e `@stripe/stripe-js` via peer)
  - Recharts (gráficos)

Caso alguma integração não esteja ativa em produção, mantenha as chaves fora do repositório (`.env`) e injete via processos de build/hosting.

## Executando localmente
1. Requisitos: Node.js 20+ recomendado.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000`.

## Build e deploy
1. Geração do build de produção:
   ```bash
   npm run build
   ```
   A saída será gerada em `out/`.

2. Pré-visualização local do build:
   ```bash
   npm run preview
   ```

3. Hospedagem estática:
   - O conteúdo de `out/` pode ser servido em qualquer provedor de estáticos (Netlify, Vercel, GitHub Pages, Nginx/Apache, S3 + CDN).
   - Se o site for publicado em um subcaminho, configure `BASE_PATH` no build (ex.: `/site`) para ajustar o roteamento.

## Convenções de código
- TypeScript estrito para componentes e rotas.
- Hooks do React auto-importados via `unplugin-auto-import` (não é necessário importar manualmente `useState`, `useEffect`, etc., conforme configurado em `vite.config.ts`). 
- Evitar comentários óbvios; preferir nomes descritivos e componentização.

## Troubleshooting
- Página em branco após deploy em subpasta: defina `BASE_PATH` ao executar `npm run build`.
- 404 em refresh de rota: ao hospedar como estático, garanta fallback para `index.html` (SPA) no servidor/CDN.
- Estilos ausentes: confirme paths do `content` em `tailwind.config.ts` e que o build está varrendo os arquivos corretos.

## Licença
Projeto proprietário da B&P Advocacia. Uso restrito.


