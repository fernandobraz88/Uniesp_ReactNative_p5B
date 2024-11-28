# Study-App

O **Study-App** é uma aplicação desenvolvida com **React Native** e **Firebase**, voltada para oferecer funcionalidades de autenticação e gerenciamento de dados de forma prática e intuitiva. A aplicação inclui funcionalidades como login, registro e exibição de dados integrados ao Firebase, proporcionando uma experiência simples e eficiente.

## Recursos do Aplicativo

- **Autenticação de Usuários:** Registro e login utilizando Firebase Authentication.
- **Armazenamento e Recuperação de Dados:** Integração com Firebase Firestore para gerenciar dados de forma segura.
- **Navegação Intuitiva:** Gerenciamento de telas com React Navigation.

## Tecnologias Adotadas

- **React Native:** Framework para o desenvolvimento de aplicativos móveis.
- **Firebase:** Plataforma usada para autenticação e banco de dados.
- **React Navigation:** Biblioteca para navegação entre páginas.
- **Expo:** Ferramenta que simplifica o desenvolvimento e execução de aplicativos React Native.

## Funcionalidades Principais

1. **Login:**
   - Permite que o usuário acesse a conta utilizando e-mail e senha.
   - Inclui a opção de redirecionamento para a página de registro.

2. **Cadastro:**
   - Tela para criação de novas contas com autenticação por e-mail e senha.

3. **Página Inicial:**
   - Exibe dados armazenados no Firebase Firestore, como uma lista de usuários ou itens.

4. **Detalhes:**
   - Tela que exibe informações mais específicas sobre um item selecionado.

## Configurando o Firebase no Projeto

### 1. Criação do Projeto no Firebase
- Acesse o [Firebase Console](https://console.firebase.google.com/) e crie um novo projeto.
- Ative os serviços necessários, como Authentication e Firestore.

### 2. Registro do Aplicativo
- No painel do Firebase, registre um aplicativo para a plataforma **Web**.
- Siga as instruções para obter as credenciais do Firebase (API key, Auth domain, etc.).

### 3. Instalação do Firebase
- Adicione o Firebase ao projeto executando o seguinte comando no terminal:

  npm install firebase

### 4. Configuração do Firebase

Crie um arquivo `firebaseConfig.js` no diretório `src/config` e insira as configurações fornecidas pelo Firebase:
 
        const firebaseConfig = {
          apiKey: "SUA_API_KEY",
          authDomain: "SEU_AUTH_DOMAIN",
          projectId: "SEU_PROJECT_ID",
          storageBucket: "SEU_STORAGE_BUCKET",
          messagingSenderId: "SEU_MESSAGING_SENDER_ID",
          appId: "SEU_APP_ID"
        };
        
        export default firebaseConfig;




## Passos para Executar o Projeto

### 1. Instalar o Node.js
Faça o download e instale a versão [v18.20.5](https://nodejs.org/dist/v18.20.5/node-v18.20.5-x64.msi).

---

### 2. Clonar o Repositório
Use o seguinte comando para clonar o repositório do projeto:
```bash 
git clone https://github.com/fernandobraz88/Uniesp_ReactNative_p5B.git
```

### 3. Acessar a Pasta do Projeto
Navegue até a pasta desejada:
```bash
cd study-app
```

### 4. Instalar Dependências
Execute o comando abaixo para instalar as dependências do projeto:
```bash
npm install
```

### 5. Configurar o Firebase
Certifique-se de criar uma conta no Firebase e configurar as credenciais no arquivo `firebaseConfig.js` conforme descrito anteriormente.

### 6. Iniciar o Aplicativo
Execute o projeto com o comando:
```bash
npm start
```
* Um QR Code será gerado. Use o aplicativo Expo Go para escanear e testar no celular.