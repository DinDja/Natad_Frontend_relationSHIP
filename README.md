 App de Relacionamento Universitário
 um aplicativo de relacionamento focado em conectar estudantes das principais universidades de Salvador, Bahia. O objetivo é criar uma comunidade onde as conexões são facilitadas pelo contexto acadêmico compartilhado.

✨ Funcionalidades Principais
O aplicativo conta com um conjunto robusto de funcionalidades para criar uma experiência de usuário completa e engajadora:

Descoberta Inteligente: Um sistema de cards, similar ao Tinder, onde os usuários podem deslizar para a direita (interesse) ou para a esquerda (dispensar).

Perfis Detalhados: Ao tocar em um card, o usuário pode ver um perfil completo, com múltiplas fotos, biografia, curso e universidade.

Matches & Chat: Quando dois usuários demonstram interesse mútuo, um "match" é formado, abrindo uma tela de chat para a conversa.

Ranking de Universidades: Uma tela de estatísticas que mostra um ranking de compatibilidade entre as universidades, baseado nos "likes" dos usuários.

Eventos de Integração: Cards de eventos que promovem festas e encontros entre as faculdades com maior índice de match, fortalecendo a comunidade.

Edição de Perfil Completa: O usuário pode personalizar seu perfil, adicionando até 6 fotos (via galeria ou câmera) e editando todas as suas informações.

Filtros de Descoberta: Uma tela de configurações permite ao usuário refinar quem ele deseja encontrar, filtrando por gênero, universidade, curso e mais.

🚀 Tecnologias Utilizadas
Este projeto foi construído com as tecnologias mais modernas do ecossistema React Native:

React Native: Framework para desenvolvimento de aplicativos móveis nativos.

Expo: Plataforma e conjunto de ferramentas para agilizar o desenvolvimento e a publicação.

Expo Router: Sistema de roteamento baseado em arquivos para uma navegação declarativa e intuitiva.

TypeScript: Para um código mais robusto, seguro e de fácil manutenção.

React Context API: Para gerenciamento de estado global de forma simples e eficiente.

Firebase (Backend): Planejado para autenticação, banco de dados (Firestore), armazenamento de imagens (Storage) e funções de backend (Cloud Functions).

🚀 Como Começar
Para executar este projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

Clone o Repositório

git clone [https://github.com/seu-usuario/natad-app.git](https://github.com/seu-usuario/natad-app.git)
cd natad-app

Instale as Dependências
O projeto utiliza npm.

npm install

Inicie o Servidor de Desenvolvimento

npx expo start

Execute no seu Dispositivo

Baixe o aplicativo Expo Go na App Store (iOS) ou Google Play (Android).

Escaneie o QR Code que aparecerá no seu terminal.

📁 Estrutura do Projeto
A organização dos arquivos segue uma arquitetura limpa e escalável:

/app: Contém todas as telas e a lógica de navegação do aplicativo, utilizando o roteamento do Expo.

/assets: Armazena fontes, imagens e outros arquivos estáticos.

/components: Reúne os componentes React reutilizáveis (cards, botões, etc.).

/constants: Define dados constantes, como os perfis de exemplo (mockData.js).

/contexts: Gerencia o estado global da aplicação, como as informações do perfil do usuário.

Feito com ☕ e código em Salvador, Bahia.
