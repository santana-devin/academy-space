# Introdução ao React Native

#### Conhecimentos de React Native  
  - [X] Apresentação
  - [X] Conhecendo o React Native  
#### Conhecendo a documentação  
  - [ ] Componentes
  - [ ] API
  - [ ] Blog e comunidade  
#### Setup React Native
  - [ ] Instalação Choco, Node e Java
  - [ ] Instalando Yarn
  - [ ] Instalando Android Studio
  - [ ] Criando emulador
  - [ ] Expondo o adb no terminal
  - [ ] Uma alternativa ao Android Studio: Expo  
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


// Uma alternativa ao Android Studio: Expo

Supondo que você tenha o Node 14 LTS ou superior instalado, você pode usar npm para instalar o utilitário de linha de comando Expo CLI:

```
npm install -g expo-cli


expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```















