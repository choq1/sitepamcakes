# DevBurger

![Status](https://img.shields.io/badge/status-estudo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-estrutura-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-estilização-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-carrinho-yellow)
![Licença](https://img.shields.io/badge/licença-MIT-green)

Projeto de cardápio digital para uma hamburgueria fictícia chamada **Dev Burger**.  
A aplicação apresenta produtos, bebidas, carrinho de compras, validação de endereço e finalização de pedido pelo WhatsApp.

## Sobre o projeto

O `DevBurger` é uma página web de cardápio digital desenvolvida com HTML, JavaScript e Tailwind CSS.  
O projeto simula a experiência de escolher itens de uma hamburgueria, adicionar ao carrinho, informar endereço de entrega e gerar uma mensagem de pedido para WhatsApp.

A interface exibe informações da loja, horário de funcionamento, itens do menu, bebidas e um modal de carrinho com total calculado automaticamente.

## Funcionalidades

- Página inicial de uma hamburgueria fictícia;
- Exibição de endereço e horário de funcionamento;
- Menu com hambúrgueres e bebidas;
- Botões para adicionar itens ao carrinho;
- Modal de carrinho;
- Cálculo automático do total;
- Controle de quantidade dos itens;
- Remoção de produtos do carrinho;
- Validação de endereço antes de finalizar;
- Verificação de horário de funcionamento;
- Notificação quando o restaurante está fechado;
- Geração de mensagem para WhatsApp com os itens do pedido.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- Tailwind CSS;
- Toastify;
- WhatsApp link API.

## Estrutura do repositório

```text
DevBurger/
├── Images/
├── node_modules/
├── styles/
│   ├── output.css
│   └── style.css
├── index.html
├── package.json
├── package-lock.json
├── script.js
├── tailwind.config.js
├── README.md
├── .gitignore
├── .gitattributes
└── LICENSE
```

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/thamiscoder/DevBurger.git
```

2. Acesse a pasta do projeto:

```bash
cd DevBurger
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o Tailwind em modo de desenvolvimento:

```bash
npm run dev
```

5. Abra o arquivo `index.html` no navegador.

## Observação

Este projeto tem finalidade educacional e foi desenvolvido para praticar criação de interfaces comerciais, carrinho de compras, manipulação do DOM, validação de formulário e integração simples com WhatsApp.

## Licença

Este projeto está sob a licença MIT.
