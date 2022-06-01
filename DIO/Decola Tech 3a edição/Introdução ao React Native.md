# Introdução ao React Native

#### Conhecimentos de React Native  
  - [X] Apresentação
  - [X] Conhecendo o React Native  
#### Conhecendo a documentação  
  - [X] Componentes
  - [X] API
  - [X] Blog e comunidade  
#### Setup React Native
  - [X] Instalação Choco, Node e Java
  - [X] Instalando Yarn
  - [X] Instalando Android Studio
  - [X] Criando emulador
  - [X] Expondo o adb no terminal
  - [X] Uma alternativa ao Android Studio: Expo  
#### Criando Um projeto
  - [ ] Iniciando um projeto com a CLI do RN
  - [ ] Estrutura de pastas  
#### Criando uma tela de profile
  - [ ] Conhecendo o View e Text
  - [ ] Conhecendo o StyleSheet
  - [ ] Conhecendo o SafeAreaView e StatusBar
  - [ ] Conhecendo Image
  - [ ] Conhecendo o Flex-Box
  - [ ] Adicionando nome, nickname e descrição
  - [ ] Criando botão
  - [ ] Conhecendo o Linking e adicionando código nativo ao android
  - [ ] Criando repositório no github
  - [ ] Atualizando o readme com todo conteúdo  
#### Desafio complementar e Questionário
  - [ ] Desafio Complementar
  - [ ] Materiais de apoio
  - [ ] Certifique seu conhecimento


Professor: Ismael Moreira  
Mobile specialist  

#### Mais sobre mim
  - Formado em Engenharia de Software
  - Fundador e Prof. do Catapulta
  - Mobile specialist na Fleye
  - Como me encontrar:
    - linkedin: Ismael Moreiraa🧩
    - GitHub: ismaelsousa
    - Insta: ismaelmoreiraa

#### Objetivo do curso
Neste curso vamos aprender o básico necessário para iniciar o desenvolvimento com react native. Ao final, você terá entendido como o React Native funciona e como seguir nos estudos.


#### Pré-requisitos
  - Lógica de programação
  - Javascript
  - Vs Code
  - Git

#### Percurso
Aula 1 Conhecendo o React Native  
Aula 2 Conhecendo os componentes  
Aula 3 Setup  
Aula 5 Iniciar um projeto  
Aula 6 Criar tela de profile  

## Aula 1 Conhecendo o React Native
// Fundamentos

#### Objetivos
• O que é o RN?
• Qual a origem?
• O que é Cross Platform?
• Quais as vantagens?

#### O que é RN?  
O React Native é um framework baseado no já aclamado React, desenvolvido pela equipe do Facebook, que possibilita o desenvolvimento de aplicações mobile, tanto para Android, como para iOS, utilizando apenas Javascript. 

#### Qual a origem?
Facebook (2015)

#### O que é Cross Platform?
Muitas plataformas , um React. Crie versões de componentes específicas da plataforma para que uma única base de código possa compartilhar código entre plataformas. Com o React Native, uma equipe pode manter duas plataformas e compartilhar uma tecnologia comum — React.

#### Quais as vantagens?
  - Desenvolvimento rápido
  - Seguro, muito tempo no mercado
  - Vagas

#### Links Úteis:
- GitHub: https://github.com/ismaelsousa
- React Native: https://reactnative.dev/
- Setup: https://reactnative.dev/docs/environment-setup


## Aula 2 Conhecendo a documentação
#### // Componentes  

> https://reactnative.dev/docs/components-and-apis

#### // API 

> https://reactnative.dev/docs/accessibilityinfo

#### // Blog e Comunidade

> https://reactnative.dev/blog

#### Seções
- Destaques de 0,68
- Aderindo à nova arquitetura
- Atualizações do site
- Interessado em ajudar o React Native a estabilizar novos lançamentos?

#### Acompanhar
  https://github.com/facebook/react-native

- Issues
 -Pull requests


## Aula 3 Setup Reacti native
// Instalação Choco, Node e java  

https://reactnative.dev/docs/environment-setup

// Instalando Yarn

https://yarnpkg.com/getting-started/install

// Instalando Android Studio

https://developer.android.com/

// Criando Emulador


// Exportando o adb no terminal

// Configurar variaveis de ambiente 

https://reactnative.dev/docs/environment-setup

$HOME/.bashrc

export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk  
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator  
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools  


export ANDROID_HOME=${HOME}/Android/Sdk  
export PATH="${ANDROID_HOME}/tools:${PATH}"  
export PATH="${ANDROID_HOME}/emulator:${PATH}"  
export PATH="${ANDROID_HOME}/platform-tools:${PATH}"  

### // Instalando NodeJs

Para extrair o arquivo diretamente para o diretório /opt, execute o seguinte comando:

> tar xf node-v*-linux-x64.tar.xz --directory /opt

Caso você não tenha permissão de acesso a esse diretório, você pode executar o seguinte comando:

> sudo chmod -R 755 /opt

Agora será necessário adicionar as entradas para os comandos do Node.js funcionar no seu sistema operacional.

Abra o arquivo .profile, que está no seu diretório home. Neste exemplo vou utilizar o editor de textos VS Code, mas você pode utilizar qualquer um que estiver disponível no sistema, como o Nano ou Vim.

Execute no terminal:

> code ~/.profile

E adicione o seguinte texto no final do arquivo.

# NodeJS

> export NODEJS_HOME=/opt/node-vx.y.z-linux-x64/bin  
> export PATH=$NODEJS_HOME:$PATH  
> Onde x.y.z deve ser a versão que você acabou de extrair para o diretório /opt.  

Também será preciso adicionar as mesmas linhas no arquivo .bashrc ou no .zshrc, que também ficam no seu diretório home.

Será o mesmo processo:

Abrir o arquivo .bash ou .zshrc via editor de textos:

> code ~/.bashrc

E adicione o conteúdo no final do arquivo.

```
# NodeJS
export NODEJS_HOME=/opt/node-vx.y.z-linux-x64/bin  
export PATH=$NODEJS_HOME:$PATH  
```
Lembre-se de corrigir x.y.z para a versão que você acabou de extrair para o diretório /opt.

Será necessário recarregar o arquivo .profile e o .bash/zshrc no seu terminal, para isso você pode fechar e abrir o terminal ou executar o seguinte comando:

> . ~/.profile ~/.bashrc

Com isso temos uma instalação do Node.js via .tar.xz no Linux.

Conferindo a se deu tudo certopermalink
Para verificar se o Node.js está corretamente instalado no seu sistema operacional, execute o seguinte comando no terminal:

> node -v

Isso irá retornar a versão que você acabou de instalar.

###  // Uma alternativa ao Android Studio: Expo

Supondo que você tenha o Node 14 LTS ou superior instalado, você pode usar npm para instalar o utilitário de linha de comando Expo CLI:

```
npm install -g expo-cli


expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

## Aula 4 Criando um projeto
// Iniciando um projeto com a CLI do RN

# adb devices

// Iniciar o emulador diretamento pelo Android Studio

https://developer.android.com/studio/run/emulator?hl=pt-br#runningemulator

// Iniciar o emulador pela linha de comando

https://developer.android.com/studio/run/emulator-commandline?hl=pt-br

> // Listar emuladores
> #emulator -list-avds
> // Iniciar emuladores
> emulator -avd avd_name [ {-option [value]} … ]  
> ou  
> emulator @avd_name [ {-option [value]} … ]  

// Criar projeto -

```
#mkdir projetos  
#cd projetos  

#npx react-native init dio-rn

#npx react-native run-android
```
# Erro no Emulador

![Overview](https://raw.githubusercontent.com/santana-devin/academy-space/main/DIO/Decola%20Tech%203a%20edi%C3%A7%C3%A3o/images/emulador-error.png).

> // Com esse comando funcionou
> #npm start
> // Mensagem
> To reload the app press "r"
> To open developer menu press "d"
>
> Preciona d


// Video de Estrutura de pasta
```
.android  
app.json  
.buckconfig  
.eslintrc.js  
Gemfile  
.gitignore  
ios  
node_modules  
package-lock.json  
.ruby-version  
.watchmanconfig  
App.js  
babel.config.js  
.bundle  
.flowconfig  
Gemfile.lock  
index.js  
metro.config.js  
package.json  
.prettierrc.js  
__tests__

```

## Aula 5 Criando uma tela de Profile
// Conhecendo o View e Text

x-special/nautilus-clipboard
copy
file:///home/santana/%C3%81rea%20de%20Trabalho/emulador-error.png


