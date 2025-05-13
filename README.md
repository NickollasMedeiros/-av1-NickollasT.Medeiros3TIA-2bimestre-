# Pokémon Explorer

Uma aplicação React que permite explorar informações sobre Pokémon utilizando a PokeAPI.

## 📋 Descrição

Este projeto é uma aplicação web desenvolvida com React e Vite que permite aos usuários:
- Visualizar uma lista completa de Pokémon
- Ver detalhes específicos de cada Pokémon
- Interface amigável e responsiva

## 🚀 Funcionalidades

### Página Inicial
- Lista todos os Pokémon disponíveis (até 1025 Pokémon)
- Botões de navegação para cada Pokémon
- Logo do Pokémon integrado ao cabeçalho
- Layout centralizado e organizado

### Página de Detalhes
- Exibe informações detalhadas do Pokémon selecionado:
  - Nome do Pokémon
  - Imagem do Pokémon
  - Peso
  - Altura
  - Tipos

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [React Router](https://reactrouter.com/) - Navegação entre páginas
- [PokeAPI](https://pokeapi.co/) - API de dados dos Pokémon

## 📦 Estrutura do Projeto

```
src/
├── components/
│   └── PokemonModal.jsx    # Componente de detalhes do Pokémon
├── pages/
│   ├── Home/              # Página inicial
│   │   ├── index.jsx      # Componente principal da Home
│   │   └── pokeg.png      # Logo do Pokémon
│   └── Detalhes/         # Página de detalhes
```

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute o projeto:
```bash
npm run dev
```

## 🔧 Desenvolvimento

O projeto utiliza as seguintes configurações e plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Plugin React com Babel
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Plugin React com SWC

## 📝 Expandindo o Projeto

Para desenvolvimento em produção, recomenda-se:
- Utilizar TypeScript para melhor tipagem
- Habilitar regras de lint com reconhecimento de tipos
- Consultar o [template TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para integração com TypeScript

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## ✨ Melhorias Futuras

- Implementar sistema de busca
- Adicionar mais informações dos Pokémon
- Implementar paginação na lista
- Adicionar animações e transições
- Melhorar o design responsivo
