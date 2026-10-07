# Teste Econverse — Front-End

Página desenvolvida em React e TypeScript para o teste de Desenvolvedor Front-End da Econverse, seguindo o [layout do Figma](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). As vitrines carregam os produtos do [JSON da Econverse](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) e, ao clicar em um produto, um modal exibe suas principais informações.

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Sass](https://sass-lang.com/) (SCSS, nomenclatura BEM)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter)

Nenhuma biblioteca de UI é utilizada.

## Pré-requisitos

- Node.js 20.19 ou superior
- npm

## Como rodar

```bash
# instalar as dependências
npm install

# ambiente de desenvolvimento em http://localhost:5173
npm run dev
```

## Compilar para produção

```bash
# checa os tipos e gera a pasta dist/
npm run build

# serve o build em http://localhost:4173
npm run preview
```

## Verificar o código

```bash
npm run lint
```

O projeto não possui testes automatizados; a checagem de tipos roda junto com `npm run build`.

## Sobre a API de produtos

A API da Econverse não envia cabeçalhos CORS, então o navegador bloqueia a chamada direta. Por isso as requisições são feitas para `/api`, que o Vite redireciona para a Econverse (veja [vite.config.ts](vite.config.ts)). O proxy funciona em `npm run dev` e `npm run preview`; em uma hospedagem estática é preciso configurar um redirecionamento equivalente.

## Estrutura

```
src/
├── assets/                # banner, foto dos parceiros e ícones de categoria
├── components/
│   ├── Header/            # barra de benefícios, busca, atalhos e navegação
│   ├── HeroBanner/        # banner principal
│   ├── CategoryList/      # categorias com ícone
│   ├── ProductShowcase/   # vitrine: título, abas e carrossel
│   ├── ProductCard/       # card de produto
│   ├── ProductModal/      # modal com os detalhes do produto
│   ├── PartnerBanners/    # banners de parceiros
│   ├── BrandList/         # "Navegue por marcas"
│   ├── Newsletter/        # formulário de newsletter
│   ├── Footer/            # rodapé
│   ├── Icon/              # ícones em SVG
│   └── Logo/              # logo da Econverse
├── hooks/                 # useProducts: busca e estado dos produtos
├── services/              # chamada à API de produtos
├── styles/                # variáveis, mixins e estilos globais (Sass)
├── types/                 # tipagem do produto
└── utils/                 # formatação de preço
```
