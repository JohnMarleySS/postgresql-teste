# PostgreSQL

## Descrição

Este projeto é uma REST API com várias rotas, incluindo operações como GET, POST, DELETE, PUT, entre outras. Ele utiliza PostgreSQL como banco de dados.

## Requisitos de Sistema

- Node.js
- PostgreSQL

## Instalação e Configuração

1. Clone o repositório:
    ```bash
    git clone [https://github.com/JohnMarleySS/postgresql-restapi.git](https://github.com/JohnMarleySS/postgresql-teste.git)
    cd postgresql-teste
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure a conexão com o seu banco de dados PostgreSQL no arquivo de configuração (ex: `.env`):
    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=seu_banco_de_dados
    ```

## Uso

Para iniciar o servidor em modo de desenvolvimento, use o seguinte comando:
```bash
npm run dev
