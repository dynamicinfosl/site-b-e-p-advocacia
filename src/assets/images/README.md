# Pasta de Imagens

Esta pasta contém todas as imagens utilizadas no site da B&P Advocacia.

## Estrutura recomendada

- `logo/` - Logos e variações do logo da empresa
- `team/` - Fotos da equipe
- `blog/` - Imagens para posts do blog
- `areas/` - Imagens relacionadas às áreas de atuação
- `icons/` - Ícones e imagens pequenas

## Como usar imagens nos componentes

```tsx
import logo from '@/assets/images/logo/logo-bp.png';

<img src={logo} alt="B&P Advocacia" />
```

Ou usando import dinâmico:

```tsx
const logoPath = new URL('@/assets/images/logo/logo-bp.png', import.meta.url).href;
```



