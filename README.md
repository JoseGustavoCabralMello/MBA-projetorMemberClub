# Member Club

Aplicação web de cartão de fidelidade para barbearias e salões de cabeleireiro. O sistema permite consultar o status da fidelidade dos clientes através de um identificador único (ID), acompanhando o histórico de cortes e o progresso até a conquista do 10º corte gratuito.

---

## 🚀 Funcionalidades

- **Consulta por ID do Cartão**: Busca rápida do cliente através do identificador no cabeçalho.
- **Perfil do Cliente**: Exibe nome, avatar personalizado e a data de início como cliente.
- **Histórico de Cortes**: Listagem de todas as visitas anteriores, contendo data e horário de cada atendimento.
- **Cartão Fidelidade Virtual**: Grid com 10 posições de selos, preenchidos dinamicamente conforme a quantidade de cortes realizados, com destaque para o 10º selo (corte gratuito).
- **Barra de Progresso**: Indicador visual de porcentagem concluída, contagem total ("X de 10") e quantidade de cortes restantes para o prêmio.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - HTML5 Semântico
  - CSS3 Modularizado (estilos divididos por componentes)
  - JavaScript Vanilla (ES6+)
- **Build & Bundler**:
  - [Webpack 5](https://webpack.js.org/) & Webpack Dev Server
  - [Babel](https://babeljs.io/) (presets ES6+)
  - `css-loader` & `style-loader`
  - `html-webpack-plugin` & `copy-webpack-plugin`
- **Backend Mock**:
  - [JSON Server](https://github.com/typicode/json-server) simulando uma API REST

---

## 📁 Estrutura de Pastas

```text
├── dist/                   # Arquivos compilados para produção
├── src/
│   ├── assets/             # Imagens, ícones SVG e avatares
│   ├── modules/            # Módulos JS (ex: manipulação do formulário e DOM)
│   ├── services/           # Configuração de API (baseURL)
│   ├── style/              # Folhas de estilo modulares (global, card, form, user, etc.)
│   └── main.js             # Ponto de entrada (entry point) da aplicação
├── index.html              # Template base da página
├── package.json            # Dependências e scripts
├── server.json             # Base de dados mockada para o json-server
└── webpack.config.js       # Configuração do Webpack
```

---

## 📦 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado em seu sistema (versão 18 ou superior recomendada).
- Gerenciador de pacotes `npm`.

### 1. Clonar o repositório e instalar dependências
```bash
npm install
```

### 2. Iniciar a API Mock (JSON Server)
Em um terminal, execute:
```bash
npm run server
```
> A API REST mockada estará disponível em: `http://localhost:3333/clients`

### 3. Iniciar o Frontend (Webpack Dev Server)
Em **outro terminal**, execute:
```bash
npm run dev
```
> O Webpack abrirá automaticamente a aplicação no seu navegador em: `http://localhost:3000`

### 4. Build de Produção (Opcional)
Para gerar a versão otimizada na pasta `dist/`:
```bash
npm run build
```

---

## 🧪 IDs Cadastrados para Teste

Utilize os seguintes IDs de cartões cadastrados no `server.json` para testar os diferentes estados da aplicação:

| ID | Cliente | Cortes Realizados | Cortes Restantes |
| :--- | :--- | :---: | :---: |
| `124-537-835-230` | Natália Miranda | 6 | 4 |
| `207-245-699-104` | Capitão Nascimento | 4 | 6 |
| `523-114-876-908` | Sansão | 10 (Cartão completo) | 0 |

---

## 👤 Autor

Desenvolvido por **Gustavo Mello**.
