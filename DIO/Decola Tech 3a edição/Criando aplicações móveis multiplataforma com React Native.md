# Criando aplicações móveis multiplataforma com React Native

###Introdução ao React Native
 - [X] Conceitos iniciais
 - [X] Configuração do ambiente
 - [X] Tela inicial da interface do VS Studio Code
#### Caracteristicas do React Native
 - [ ] Conceitos básicos
 - [ ] Configurações de ambiente MacOS
 - [ ] Executando projeto no emulador iOS - Parte 1
 - [ ] Executando projeto no emulador iOS - Parte 2
 - [ ] Configurações de ambiente Linux
#### Desenvolvendo primeiro aplicativo
 - [ ] Conceitos e sintaxe da linguagem
 - [ ] Gerando números randômicos - Parte 1
 - [ ] Gerando números randômicos - Parte 2
 - [ ] Gerando números randômicos - Parte 3
 - [ ] Gerando números randômicos - Parte 4
#### Estilos e componentes
 - [ ] Introdução ao Flexbox
 - [ ] App Currículo - Parte 1
 - [ ] App Currículo - Parte 2
 - [ ] App Currículo - Parte 3
 - [ ] App Currículo - Parte 4
#### Componentes e estados
 - [ ] O que são componentes e propriedades
 - [ ] Refatorando o App Currículo - Parte 1
 - [ ] Refatorando o App Currículo - Parte 2
 - [ ] Certifique seu conhecimento


# Aula 1

## Preparação do ambiente windows

#choco install -y nodejs-lts python2 jdk8

#### Configurar variaveis de ambiente

JAVA_HOME
ANDROID_HOME

PATH
  %ANDROID_HOME%\emulador;
  %ANDROID_HOME%\tools;
  %ANDROID_HOME%\tools\bin;
  %ANDROID_HOME%\platform-tools;
  
 // Instalar Android Studio
 // Create virtual devices
 

// Instalar Virtual Studio Code
Instalar Extenções
  ESLint  
  Dracula Theme  
  Material Icon Theme  
  Rocketseat React Native  
  Rocketseat ReactJs  
  
Criar primeiro Projeto

> #npm install -g react-native projeto1  
> ou  
> #npx react-native init projeto1  

#npm run android

## Criando aplicações móveis multiplataforma com React Native Introdução ao React Native
Pablo Henrique 
Tech Speaker, Community Leader and Desenvolvedor FullStack - Kurole Gpablohdev R

#### Objetivos da Aula

1. Introdução ao React Native e configuração do
ambiente de desenvolvimento Windows.

2. React Native para iOS e configuração do
ambiente de desenvolvimento Osx e Linux.

3. Desenvolvendo o primeiro aplicativo com React Native

4. Definindo estilos, formulários e componentes
customizados.

5. Criação e manipulação de componentes.



### Requisitos Básicos

 - Conhecimento em Javascript ES6+.
 - Ambiente configurado para o desenvolvimento e testes.
 - Editor de Texto.


## História e Conceitos
Introdução ao React Native

História e Conceitos

O React Native é um framework baseado na
biblioteca React. Desenvolvido pela equipe do
Facebook, que possibilita o desenvolvimento de
aplicações mobile, tanto para Android, como para
iOS, utilizando apenas Javascript.

Ele foi lançado officialmente pelo facebook em 2015.

Versão Atual: 0.62


![Overview]([https://raw.githubusercontent.com/santana-devin/academy-space/main/DIO/Decola%20Tech%203a%20edi%C3%A7%C3%A3o/images/Overview-29.gif](https://raw.githubusercontent.com/santana-devin/academy-space/e40d879215e24729a4b0c3d76d05e2681b26a478/DIO/Decola%20Tech%203a%20edi%C3%A7%C3%A3o/images/diagram_ios-android-views.svg)).



```
//O React Native tem muitos componentes principais para tudo, desde controles de formulário até indicadores de atividade. Você pode encontrá-los todos documentados na seção API . Você trabalhará principalmente com os seguintes componentes principais:


REACT NATIVE UI COMPONENT |	ANDROID VIEW	| IOS VIEW	      | WEB ANALOG             |	DESCRIPTION
--------------------------|--------------|----------------|------------------------|--------
<View>                    |	<ViewGroup>  |	<UIView>       |	A non-scrollling <div>	| A container that supports layout with flexbox, style, some touch handling, and accessibility controls
<Text>                    |	<TextView>   |	<UITextView>   |	<p>                   	| Displays, styles, and nests strings of text and even handles touch events
<Image>                   |	<ImageView>  |	<UIImageView>  |	<img>                  |	Displays different types of images
<ScrollView>              |	<ScrollView> |	<UIScrollView> |	<div>                  |	A generic scrolling container that can contain multiple components and views
<TextInput>               |	<EditText>   |	<UITextField>  |	<input type="text">    |	Allows the user to enter text
```


## Configuração de ambiente Windows
Introdução ao react Native


#### Instalações necessárias

 - Chocolatey
 - Java 8
 - Pyton2
 - Yaml
 - Node;js
 - Android Studio


#### Criando aplicações móveis multiplataforma com React Native
Caracteristicas do React Native


Características do React Native

 - Possui a base de conhecimento compartilhada entre o desenvolvimento mobile e front-end;
 - Todo código desenvolvido é convertido para a linguagem nativa do sistema operacional.
 - Conseguimos desenvolver aplicações para Android e iOS utilizando um código Único.
 - Por ser multiplataforma, podemos desenvolver aplicações utilizando qualquer sistema operacional (Windows, macOS ou Linux).
 - Acessar a interface e os recursos nativos do Android e OS utilizando JavaScript;

#### Configurações de ambiente MacOS
Caracteristicas do React Native

#### Instalações necessárias
 - Brew
 - Java 8
 - Pyton2
 - Yarn1
 - Node.js
 - Xcode



#### Introdução ao ES6 (ECMAScript)

O ECMAScript nada mais é que o nome official do
Javacript. Atualmente, padrões e normativas
referentes à linguagem é mantida pela ECMA-262,
grupo criado na ECMA para a padronização do
Javascript e conta com participação de grandes
empresas de tecnologia como Microsoft, Google,
dentre outras.


### Criando aplicações móveis multiplataforma com React Native
Estilos e componentes


Introdução ao Flexbox

O Flexbox foi projetado para fornecer um layout
consistente em diferentes tamanhos de tela. Assim
como temos na web no React Native funciona da mesma forma.

Ao se utilizar o flexbox, é preciso ter em mente que
todas as operações realizadas relacionam-se a dois
eixos: o eixo principal(Main Axis) e o eixo
transversal(Cross Axis).

O eixo principal é definido através da Propriedade flex-direction e p eixo transversal encontra-se na direção perpendicular.


A propriedade flex-direction define a direção do eixo
principal e pode tem quatro valores possíveis:

 - row
 - row-reverse
 - column
 - column-reverse

Se o valor escolhido for row (linha) OU row-reverse
(linha reversa), seu eixo principal se moverá ao longo
da linha — na direção inline.

A -> B -> C

Se o valor escolhido for column (coluna) ou column-
reverse (coluna reversa) e o eixo principal se moverá do topo até o fim da página — na direção block.

A  
B  
C  

Podemos utilizar
proporções com a
propriedade flex para
ocuparmos o tamanho *
conforme o peso
estabelecido para cada
objeto(container)

### Criando aplicações móveis multiplataforma com React Nativa
Componentes e estados

Componentes

Componentes permitem você dividir a Ul em partes
independentes, reutilizáveis, OU seja, trata cada parte
da aplicação como um bloco isolado, livre de outras dependência externa.

Propriedades

Os componentes são como funções JavaScript. Eles
aceitam entradas arbitrárias (chamadas “props”) e retornam
elementos que descrevem o que deve aparecer na tela.

Estados

Diferente das propriedades, o estado não é repassado ao
componente e sim configurado dentro dele. Pense no
estado como as propriedades de nossa classe que devem
ser armazenadas para renderizarmos o componente da forma correta.






