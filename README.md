# RPG API

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4.x-3068B7?style=for-the-badge&logo=typescript&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-Tested-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

Uma API REST desenvolvida em TypeScript para gerenciar personagens, itens, inventário e sistema de loot em um contexto de RPG. O projeto foi construído com foco em organização por camadas, validação de dados e facilidade de uso em testes via Postman.

## 🚀 O que é este projeto?

A RPG API permite:

- Criar, listar, buscar, atualizar e excluir personagens;
- Gerenciar um inventário de personagem;
- Cadastrar, listar, buscar, atualizar e remover itens;
- Equipar ou desequipar armaduras;
- Realizar sorteios de itens e armaduras para personagens.

A aplicação segue uma arquitetura simples e modular, com separação entre rotas, controladores, serviços, repositórios e validações.

## 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- Express.js
- Zod para validação de schemas
- tsx para execução local
- tsup para build
- Postman para testes manuais das rotas

## 📦 Estrutura do projeto

A estrutura foi organizada de forma a separar responsabilidades:

- src/routes: definição das rotas da API
- src/controllers: tratamento das requisições
- src/services: regras de negócio
- src/repositories: acesso aos dados
- src/schemas: validações de entrada
- src/middlewares: middlewares de validação
- src/utils: funções auxiliares

## ▶️ Como executar o projeto

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Instalação

```bash
git clone <url-do-repositorio>
cd rpg-api
npm install
```

### Variáveis de ambiente

Crie um arquivo .env na raiz do projeto com a seguinte variável:

```env
PORT=3000
```

### Rodando localmente

```bash
npm run dev
```

O servidor será iniciado em:

```txt
http://localhost:3000
```

## 🌐 Endpoints disponíveis

A API está montada sob o prefixo base:

```txt
/rpgAPI
```

### Personagens

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /rpgAPI/characters | Lista todos os personagens |
| GET | /rpgAPI/characters/:id | Busca um personagem pelo ID |
| POST | /rpgAPI/characters | Cria um novo personagem |
| PATCH | /rpgAPI/characters/:id | Atualiza um personagem |
| DELETE | /rpgAPI/characters/:id | Remove um personagem |

### Inventário

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /rpgAPI/characters/:id/inventory | Retorna o inventário de um personagem |
| POST | /rpgAPI/characters/:id/inventory/items | Adiciona um item ao inventário |
| POST | /rpgAPI/characters/:id/inventory/armors | Equipa uma armadura |
| DELETE | /rpgAPI/characters/:id/inventory/items/:slot | Remove um item do inventário |
| DELETE | /rpgAPI/characters/:id/inventory/armors/:slot | Desequipa uma armadura |

### Itens

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /rpgAPI/items | Lista todos os itens |
| GET | /rpgAPI/items/select | Filtra itens por raridade ou tipo |
| GET | /rpgAPI/items/:id | Busca um item pelo ID |
| POST | /rpgAPI/items | Cria um novo item |
| PATCH | /rpgAPI/items/:id | Atualiza um item |
| DELETE | /rpgAPI/items/:id | Remove um item |

### Loot / Sorteio

| Método | Endpoint | Descrição |
| --- | --- | --- |
| POST | /rpgAPI/characters/:id/draw/item | Gera um item ao acaso para o personagem |
| POST | /rpgAPI/characters/:id/draw/armor | Gera uma armadura ao acaso para o personagem |

## 🧪 Testes

A API foi testada manualmente no Postman, com foco em:

- validação de entradas;
- criação e atualização de recursos;
- fluxo de inventário;
- comportamento das rotas de loot;
- respostas de erro e sucesso.

Recomenda-se testar as rotas com o Postman ou qualquer cliente REST semelhante.

## 🧾 Exemplo de uso

### Criar um personagem

```bash
curl -X POST http://localhost:3000/rpgAPI/characters \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ragnar",
    "class": "Guerreiro",
    "level": 5
  }'
```

### Listar itens

```bash
curl http://localhost:3000/rpgAPI/items
```

## ✅ Observações relevantes

- A aplicação utiliza validações com Zod para reduzir erros de entrada;
- A API foi pensada para ser simples, didática e extensível;
- O projeto pode servir como base para evolução para banco de dados, autenticação e testes automatizados.

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

## 👤 Autor

Erick Campos
