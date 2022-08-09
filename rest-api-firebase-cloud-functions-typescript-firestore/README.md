
Como criar uma API REST com funções de nuvem do Firebase, TypeScript e Firestore
https://blog.logrocket.com/rest-api-firebase-cloud-functions-typescript-firestore/


O Firebase é uma das principais soluções para a criação de aplicativos sem servidor . Ele oferece aos desenvolvedores uma maneira de desenvolver facilmente aplicativos escaláveis ​​e de alta qualidade sem se preocupar com o custo de configuração e manutenção de servidores a longo prazo desde o início. O Firebase também oferece fácil integração com serviços do Google, como o Google Analytics e o banco de dados de documentos do Firebase, Firestore.

Neste artigo, veremos como criar uma API REST com funções de nuvem do Firebase, TypeScript e Firestore. Você também precisará de um pouco de conhecimento sobre o Express.js para criar nosso aplicativo de demonstração. No entanto, você não precisa ser um profissional em nenhuma das tecnologias mencionadas para acompanhar. Nosso aplicativo de demonstração será uma API de diário que poderá aceitar novas entradas e recuperar, atualizar e excluir entradas existentes.

## Configurando o Firebase
Para começar a usar nosso aplicativo, você precisa ter o Node.js instalado em seu computador. Clique aqui para ver o guia de instalação do Node.js. Se você já o tiver instalado, executar o seguinte comando em seu terminal deve retornar sua versão atual do Node.js:

```
 node --version
 ```
 Para seguir este tutorial sem avisos, você precisará instalar a mesma versão do Node.js que usaremos na nuvem do Firebase. Atualmente, o SDK do Firebase é compatível com Node.js 12 e 10. Vamos usar a versão 12 para nosso aplicativo. A instalação do Node.js vem com npm, que usaremos para instalar a Firebase CLI . Vamos executar o seguinte comando em nosso terminal para fazer isso:

```
  npm install -g firebase-tools
```

Com o Node.js e o Firebase CLI instalados, você pode navegar até o console do Firebase em seu navegador. Será necessário fazer login na sua conta do Google. Após um login bem-sucedido, você deverá ver um botão Criar um projeto semelhante a este:
 
 
 ![firebase-create-a-project-button](https://user-images.githubusercontent.com/60019853/183776385-63f1ed3e-6285-4e77-b4d4-896e9c96cf52.png)

 Dependendo de quando você seguir este passo a passo, a interface do usuário pode parecer um pouco diferente, mas você ainda poderá encontrar o caminho. Ao clicar no botão Criar um projeto , você verá que o processo de criação de um projeto do Firebase é simples.

Em seguida, você terá a opção de escolher um nome e um ID do projeto. Vou usar journal-rest-api para o meu. Como o ID é um identificador exclusivo para seu projeto, você precisará escolher um ID de projeto diferente. Com isso feito, você pode criar seu projeto do Firebase com sucesso.

Após uma criação bem-sucedida, você deverá ver uma página de visão geral do projeto semelhante a esta:


 ![overview-page](https://user-images.githubusercontent.com/60019853/183776193-8b8b6ef5-431b-47d7-b60f-65cfc5aae65f.png)

Mais ótimos artigos da LogRocket:
Não perca um momento com The Replay , um boletim informativo com curadoria da LogRocket
Use useEffect do React para otimizar o desempenho do seu aplicativo
Alternar entre várias versões do Node
Aprenda como animar seu aplicativo React com AnimXYZ
Explore Tauri , um novo framework para construir binários
Compare NestJS x Express.js
Descubra ORMs populares usados ​​no cenário TypeScript
Atualizando nosso plano de faturamento
Por padrão, sua nova conta deve estar no plano Spark Free Billing . No entanto, para poder usar as funções do Firebase, você precisará atualizar seu plano de faturamento para o Blaze Pay à medida que avança. Não precisamos nos preocupar com dinheiro para esta demonstração, mas o Firebase exige que você atualize seu plano de faturamento para poder usar as funções de nuvem.

Para atualizar seu plano de cobrança, abra o menu suspenso Desenvolver na navegação à esquerda e clique em Funções. Na página Funções, você será solicitado a atualizar seu faturamento. A mensagem deve ficar assim:

![upgrade-project-page](https://user-images.githubusercontent.com/60019853/183776515-eb4ccb78-51a2-4314-8f14-0439d8e000e8.png)


## Como criar um banco de dados do Firestore
Com nosso plano de faturamento atualizado, vamos criar um banco de dados do Firestore para nosso aplicativo. Navegue até a opção Cloud Firestore no painel esquerdo e clique no botão Criar banco de dados . Você deve ver um modal que se parece com isso:

![start-in-production-mode](https://user-images.githubusercontent.com/60019853/183776572-de63a81b-471c-45d9-9575-f508eb6bfed8.png)

Usaremos a opção Iniciar no modo de produção para esta demonstração. Com nosso banco de dados criado, agora podemos escrever e implantar nossa primeira função de nuvem.

Escrevendo nossa primeira função de nuvem
Para escrever nossa primeira função de nuvem, voltaremos ao nosso terminal e executaremos o seguinte comando para fazer login em nossa conta do Firebase:

```
firebase login
```
A execução do comando deve levá-lo a uma página de autenticação em seu navegador. Após uma autenticação bem-sucedida, crie um diretório de projeto em seu computador e, dentro dele, execute o seguinte comando para inicializar as funções do Firebase:
```
firebase init functions
```
Você pode ir com as opções padrão para sua configuração. Selecione a opção Usar um projeto existente e escolha o projeto que você acabou de criar no Firebase. Quando perguntado: Qual idioma você gostaria de usar para escrever o Cloud Functions? Selecione TypeScript . Por fim, aceite a opção de instalar as dependências do npm. Se tudo correr bem, você deverá ver uma mensagem de sucesso semelhante a esta:

![success-message](https://user-images.githubusercontent.com/60019853/183776735-dd5d0f12-907e-4c56-a7ca-5386dd055c53.png)

A estrutura do projeto para nosso novo aplicativo deve ficar assim:

```
├── .firebaserc
├── .gitignore
├── .firebase.json
└── functions
    ├── package.json
    ├── tsconfig.json
    ├── .gitignore
    └── src
        ├── index.ts
```

Observe que o arquivo está dentro do diretório. Isso significa que, ao executar nossos comandos, precisaríamos navegar até o diretório de funções em nosso terminal. Ao abrir o arquivo, você deverá ver isto:
```
package.json functions npm./functions/src/index.ts
````
```
import * as functions from 'firebase-functions';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
```




 
