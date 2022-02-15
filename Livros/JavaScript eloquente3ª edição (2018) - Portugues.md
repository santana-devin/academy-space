# JavaScript eloquente3ª edição (2018)

Este é um livro sobre JavaScript, programação e as maravilhas do digital. Você pode lê-lo on-line aqui ou comprar sua própria [cópia em brochura](https://mybook.to/ejs) .

Escrito por Marijn Haverbeke.

Licenciado sob uma [licença de atribuição não comercial Creative Commons](https://creativecommons.org/licenses/by-nc/3.0/) . Todo o código neste livro também pode ser considerado licenciado sob uma [licença do MIT](https://eloquentjavascript.net/code/LICENSE) .

Ilustrações de vários artistas: Ilustrações de capa e capítulo de [Madalina Tantareanu](http://madalinatantareanu.com/) . Pixel art nos capítulos 7 e 16 de Antonio Perdomo Pastor. Diagramas de expressão regular no Capítulo 9 gerados com [regexper.com](https://regexper.com/) por Jeff Avallone. Fotografia da vila no Capítulo 11 por Fabrice Creuzot. Conceito de jogo para o Capítulo 16 por [Thomas Palef](http://lessmilk.com/) .

A terceira edição foi viabilizada por [325 financiadores](https://eloquentjavascript.net/backers3.html) , com destaque [![Próxima revista](https://eloquentjavascript.net/img/nextjournal.png)](https://nextjournal.com/)para e [![Escola Holberton](https://eloquentjavascript.net/img/holberton.png)](https://www.holbertonschool.com/). A segunda edição foi apoiada por [454 apoiadores](https://eloquentjavascript.net/backers.html) , com contribuições significativas de [![Mozilla](https://eloquentjavascript.net/img/mozilla_mini.png)](https://www.mozilla.org/en-US/), [![Reator de hack](https://eloquentjavascript.net/img/hack_reactor_mini.png)](https://www.hackreactor.com/)e [![Fantasma](https://eloquentjavascript.net/img/ghostery_mini.png)](https://www.ghostery.com/).

## Conteúdo

1. [Introdução](https://eloquentjavascript.net/00_intro.html)

2. ### (Parte 1: Idioma)

   Valores, tipos e operadores

3. [Estrutura do Programa](https://eloquentjavascript.net/02_program_structure.html)

4. [Funções](https://eloquentjavascript.net/03_functions.html)

5. [Estruturas de dados: objetos e matrizes](https://eloquentjavascript.net/04_data.html)

6. [Funções de ordem superior](https://eloquentjavascript.net/05_higher_order.html)

7. [A vida secreta dos objetos](https://eloquentjavascript.net/06_object.html)

8. [Projeto: Um Robô](https://eloquentjavascript.net/07_robot.html)

9. [Bugs e Erros](https://eloquentjavascript.net/08_error.html)

10. [Expressões regulares](https://eloquentjavascript.net/09_regexp.html)

11. [Módulos](https://eloquentjavascript.net/10_modules.html)

12. [Programação assíncrona](https://eloquentjavascript.net/11_async.html)

13. [Projeto: Uma Linguagem de Programação](https://eloquentjavascript.net/12_language.html)

14. ### (Parte 2: Navegador)

    JavaScript e o navegador

15. [O modelo de objeto do documento](https://eloquentjavascript.net/14_dom.html)

16. [Manipulação de eventos](https://eloquentjavascript.net/15_event.html)

17. [Projeto: Um Jogo de Plataforma](https://eloquentjavascript.net/16_game.html)

18. [Desenho em tela](https://eloquentjavascript.net/17_canvas.html)

19. [HTTP e formulários](https://eloquentjavascript.net/18_http.html)

20. [Projeto: Um Editor de Pixel Art](https://eloquentjavascript.net/19_paint.html)

21. ### (Parte 3: Nó)

    Node.js

22. [Projeto: Site de Compartilhamento de Habilidades](https://eloquentjavascript.net/21_skillsharing.html)

Uma versão em papel do Eloquent JavaScript, incluindo um capítulo adicional, está sendo lançada pela [No Starch Press](http://www.nostarch.com/ejs3) .

## Outras páginas

- [Código sandbox e soluções de exercícios](https://eloquentjavascript.net/code)
- [Errata para o livro de papel](https://eloquentjavascript.net/errata.html)
- [Este livro como um único arquivo PDF](https://eloquentjavascript.net/Eloquent_JavaScript.pdf) (e [versão pequena para celular](https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf) )
- [Este livro como um arquivo EPUB](https://eloquentjavascript.net/Eloquent_JavaScript.epub)
- [Este livro como um arquivo MOBI (Kindle)](https://eloquentjavascript.net/Eloquent_JavaScript.mobi)
- [A primeira edição do livro](https://eloquentjavascript.net/1st_edition)
- [A segunda edição do livro](https://eloquentjavascript.net/2nd_edition)

## Traduções

### Terceira edição

- [فارسی (persa)](http://eloquentjs.ir/)
- [Español (espanhol, parcial)](https://eloquentjs-es.thedojo.mx/)

### Segunda edição

- [عَرَبِيّ (árabe)](https://rabahboudia.gitbooks.io/arabic-eloquent-js/content/index.html)
- [Български (búlgaro)](https://to6esko.github.io/)
- [Português (Portuguese)](https://github.com/braziljs/eloquente-javascript)
- [russo](https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/)







# Introdução

> Achamos que estamos criando o sistema para nossos próprios propósitos. Acreditamos que estamos fazendo isso à nossa própria imagem... Mas o computador não é realmente como nós. É uma projeção de uma parte muito tênue de nós mesmos: aquela porção dedicada à lógica, ordem, regra e clareza.
>
> Ellen Ullman, Close to the Machine: Technophilia and its descontents

![Imagem de uma chave de fenda e uma placa de circuito](https://eloquentjavascript.net/img/chapter_picture_00.jpg)

Este é um livro sobre como instruir computadores. Computadores são tão comuns quanto chaves de fenda hoje em dia, mas eles são um pouco mais complexos, e fazê-los fazer o que você quer que eles façam nem sempre é fácil.

Se a tarefa que você tem para o seu computador é comum e bem compreendida, como mostrar seu e-mail ou agir como uma calculadora, você pode abrir o aplicativo apropriado e começar a trabalhar. Mas para tarefas únicas ou abertas, provavelmente não há aplicação.

É aí que a programação pode entrar. *Programar* é o ato de construir um *programa* — um conjunto de instruções precisas dizendo a um computador o que fazer. Como os computadores são bestas burras e pedantes, a programação é fundamentalmente tediosa e frustrante.

Felizmente, se você conseguir superar esse fato e talvez até aproveitar o rigor de pensar em termos com os quais as máquinas burras podem lidar, a programação pode ser recompensadora. Ele permite que você faça coisas em segundos que levariam uma *eternidade* à mão. É uma maneira de fazer com que sua ferramenta de computador faça coisas que não podia fazer antes. E proporciona um maravilhoso exercício de pensamento abstrato.

A maior parte da programação é feita com linguagens de programação. Uma *linguagem* de programação é uma linguagem construída artificialmente usada para instruir computadores. É interessante que a maneira mais eficaz que encontramos de nos comunicar com um computador se baseia tanto na maneira como nos comunicamos uns com os outros. Assim como as linguagens humanas, as linguagens de computador permitem que palavras e frases sejam combinadas de novas maneiras, tornando possível expressar conceitos sempre novos.

A certa altura, as interfaces baseadas em linguagem, como os prompts BASIC e DOS das décadas de 1980 e 1990, eram o principal método de interação com computadores. Eles foram amplamente substituídos por interfaces visuais, que são mais fáceis de aprender, mas oferecem menos liberdade. As linguagens de computador ainda estão lá, se você souber onde procurar. Uma dessas linguagens, JavaScript, é incorporada a todos os navegadores modernos e, portanto, está disponível em quase todos os dispositivos.

Este livro tentará familiarizá-lo o suficiente com essa linguagem para fazer coisas úteis e divertidas com ela.

## Na programação

Além de explicar JavaScript, apresentarei os princípios básicos de programação. A programação, ao que parece, é difícil. As regras fundamentais são simples e claras, mas os programas construídos com base nessas regras tendem a se tornar complexos o suficiente para introduzir suas próprias regras e complexidade. Você está construindo seu próprio labirinto, de certa forma, e pode se perder nele.

Haverá momentos em que ler este livro será terrivelmente frustrante. Se você é novo em programação, haverá muito material novo para digerir. Grande parte deste material será então *combinado* de forma a exigir que você faça conexões adicionais.

Cabe a você fazer o esforço necessário. Quando você estiver lutando para seguir o livro, não tire conclusões precipitadas sobre suas próprias capacidades. Você está bem - você só precisa continuar. Faça uma pausa, releia algum material e certifique-se de ler e entender os programas e exercícios de exemplo. Aprender é um trabalho árduo, mas tudo o que você aprende é seu e facilitará o aprendizado subsequente.

> Quando a ação se torna inútil, reúna informações; quando a informação se torna inútil, durma.
>
> Ursula K. Le Guin, A Mão Esquerda das Trevas

Um programa é muitas coisas. É um pedaço de texto digitado por um programador, é a força direcionadora que faz o computador fazer o que faz, são dados na memória do computador, mas controla as ações realizadas nessa mesma memória. Analogias que tentam comparar programas com objetos com os quais estamos familiarizados tendem a falhar. Um ajuste superficial é o de uma máquina – muitas partes separadas tendem a estar envolvidas e, para fazer a coisa toda funcionar, temos que considerar as maneiras pelas quais essas partes se interconectam e contribuem para a operação do todo.

Um computador é uma máquina física que atua como host para essas máquinas imateriais. Os próprios computadores só podem fazer coisas estupidamente diretas. A razão pela qual eles são tão úteis é que eles fazem essas coisas em uma velocidade incrivelmente alta. Um programa pode combinar engenhosamente um número enorme dessas ações simples para fazer coisas muito complicadas.

Um programa é uma construção de pensamento. Não custa nada construir, não tem peso e cresce facilmente sob nossas mãos de digitação.

Mas sem cuidado, o tamanho e a complexidade de um programa ficarão fora de controle, confundindo até mesmo a pessoa que o criou. Manter os programas sob controle é o principal problema da programação. Quando um programa funciona, é lindo. A arte da programação é a habilidade de controlar a complexidade. O grande programa é subjugado – simplificado em sua complexidade.

Alguns programadores acreditam que essa complexidade é melhor gerenciada usando apenas um pequeno conjunto de técnicas bem compreendidas em seus programas. Eles compuseram regras rígidas (“melhores práticas”) que prescrevem a forma que os programas devem ter e permanecer cuidadosamente dentro de sua pequena zona segura.

Isso não é apenas chato, é ineficaz. Novos problemas geralmente exigem novas soluções. O campo da programação é jovem e ainda está se desenvolvendo rapidamente, e é variado o suficiente para dar espaço para abordagens totalmente diferentes. Existem muitos erros terríveis a serem cometidos no projeto de programas, e você deve ir em frente e cometê-los para que você os compreenda. Uma noção de como é um bom programa é desenvolvida na prática, não aprendida a partir de uma lista de regras.

## Por que a linguagem importa

No início, no nascimento da computação, não havia linguagens de programação. Os programas ficaram mais ou menos assim:

```javascript
00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000
```

Esse é um programa para somar os números de 1 a 10 e imprimir o resultado: . Poderia ser executado em uma máquina simples e hipotética. Para programar os primeiros computadores, era necessário colocar grandes conjuntos de interruptores na posição correta ou fazer furos em tiras de papelão e alimentá-los ao computador. Você provavelmente pode imaginar como esse procedimento era tedioso e propenso a erros. Mesmo escrever programas simples exigia muita inteligência e disciplina. Os complexos eram quase inconcebíveis.`1 + 2 + ... + 10 = 55`

É claro que inserir manualmente esses padrões misteriosos de bits (os uns e zeros) deu ao programador uma profunda sensação de ser um poderoso mago. E isso tem que valer alguma coisa em termos de satisfação no trabalho.

Cada linha do programa anterior contém uma única instrução. Poderia ser escrito em inglês assim:

1. Armazene o número 0 no local de memória 0.
2. Armazene o número 1 no local de memória 1.
3. Armazene o valor do local de memória 1 no local de memória 2.
4. Subtraia o número 11 do valor no local de memória 2.
5. Se o valor na posição de memória 2 for o número 0, continue com a instrução 9.
6. Adicione o valor do local de memória 1 ao local de memória 0.
7. Adicione o número 1 ao valor do local de memória 1.
8. Continue com a instrução 3.
9. Emita o valor do local de memória 0.

Embora isso já seja mais legível do que a sopa de bits, ainda é bastante obscuro. Usar nomes em vez de números para as instruções e locais de memória ajuda.

```javascript
Set “total” to 0.
 Set “count” to 1.
[loop]
 Set “compare” to “count”.
 Subtract 11 from “compare”.
 If “compare” is zero, continue at [end].
 Add “count” to “total”.
 Add 1 to “count”.
 Continue at [loop].
[end]
 Output “total”.
```

Você pode ver como o programa funciona neste momento? As duas primeiras linhas dão a dois locais de memória seus valores iniciais: `total`serão usados para construir o resultado da computação e `count`registrarão o número que estamos vendo no momento. As linhas usando `compare`são provavelmente as mais estranhas. O programa quer ver se `count`é igual a 11 para decidir se pode parar de funcionar. Como nossa máquina hipotética é bastante primitiva, ela só pode testar se um número é zero e tomar uma decisão com base nisso. Portanto, ele usa o local de memória rotulado `compare`para calcular o valor `count - 11`e toma uma decisão com base nesse valor. As próximas duas linhas adicionam o valor de `count`ao resultado e incrementam `count`em 1 toda vez que o programa decide que`count`ainda não é 11.

Aqui está o mesmo programa em JavaScript:

```javascript
deixe  total  =  0 , contagem  =  1 ;
while ( contagem  <=  10 ) {
   total  +=  contagem ;
  contagem  +=  1 ;
}
consola . log ( total );
// → 55
```

Esta versão nos dá mais algumas melhorias. Mais importante, não há mais necessidade de especificar como queremos que o programa salte para frente e para trás. A `while`construção cuida disso. Ele continua executando o bloco (entre chaves) abaixo dele enquanto a condição que lhe foi dada se mantiver. Essa condição é `count <= 10`, o que significa que “ *contagem* é menor ou igual a 10”. Não precisamos mais criar um valor temporário e compará-lo com zero, o que era apenas um detalhe desinteressante. Parte do poder das linguagens de programação é que elas podem cuidar de detalhes desinteressantes para nós.

No final do programa, após a conclusão da `while`construção, a `console.log`operação é usada para escrever o resultado.

Finalmente, aqui está como o programa poderia se parecer se tivéssemos as operações convenientes `range`e `sum`disponíveis, que respectivamente criam uma coleção de números dentro de um intervalo e calculam a soma de uma coleção de números:

```javascript
consola . log ( soma ( intervalo ( 1 , 10 )));
// → 55
```

A moral desta história é que o mesmo programa pode ser expresso de forma longa e curta, ilegível e legível. A primeira versão do programa era extremamente obscura, enquanto esta última é quase inglesa: `log`o `sum`dos `range`números de 1 a 10. (Veremos em [capítulos posteriores](https://eloquentjavascript.net/04_data.html) como definir operações como `sum`e `range`.)

Uma boa linguagem de programação ajuda o programador, permitindo que ele fale sobre as ações que o computador deve executar em um nível superior. Ele ajuda a omitir detalhes, fornece blocos de construção convenientes (como `while`e `console.log`), permite definir seus próprios blocos de construção (como `sum`e `range`) e facilita a composição desses blocos.

## O que é JavaScript?

O JavaScript foi introduzido em 1995 como uma forma de adicionar programas a páginas da Web no navegador Netscape Navigator. A linguagem já foi adotada por todos os outros principais navegadores gráficos da web. Ele tornou possíveis aplicativos da Web modernos — aplicativos com os quais você pode interagir diretamente sem precisar recarregar uma página para cada ação. JavaScript também é usado em sites mais tradicionais para fornecer várias formas de interatividade e inteligência.

É importante notar que o JavaScript não tem quase nada a ver com a linguagem de programação chamada Java. O nome semelhante foi inspirado por considerações de marketing e não por bom senso. Quando o JavaScript estava sendo introduzido, a linguagem Java estava sendo fortemente comercializada e estava ganhando popularidade. Alguém achou que era uma boa ideia tentar acompanhar esse sucesso. Agora estamos presos ao nome.

Após sua adoção fora da Netscape, um documento padrão foi escrito para descrever como a linguagem JavaScript deveria funcionar para que os vários softwares que alegavam suportar JavaScript estivessem realmente falando sobre a mesma linguagem. Isso é chamado de padrão ECMAScript, em homenagem à organização Ecma International que fez a padronização. Na prática, os termos ECMAScript e JavaScript podem ser usados de forma intercambiável – são dois nomes para a mesma linguagem.

Há quem diga coisas *terríveis* sobre JavaScript. Muitas dessas coisas são verdadeiras. Quando fui obrigado a escrever algo em JavaScript pela primeira vez, rapidamente passei a desprezá-lo. Ele aceitaria quase tudo que eu digitasse, mas interpretaria de uma maneira completamente diferente do que eu quis dizer. Isso tinha muito a ver com o fato de eu não ter a menor ideia do que estava fazendo, é claro, mas há um problema real aqui: JavaScript é ridiculamente liberal no que permite. A ideia por trás desse design era tornar a programação em JavaScript mais fácil para iniciantes. Na verdade, isso torna mais difícil encontrar problemas em seus programas porque o sistema não os aponta para você.

Essa flexibilidade também tem suas vantagens. Ele deixa espaço para muitas técnicas que são impossíveis em linguagens mais rígidas e, como você verá (por exemplo no [Capítulo 10](https://eloquentjavascript.net/10_modules.html) ), pode ser usado para superar algumas deficiências do JavaScript. Depois de aprender a linguagem corretamente e trabalhar com ela por um tempo, aprendi a *gostar de* JavaScript.

Houve várias versões de JavaScript. A versão 3 do ECMAScript foi a versão amplamente suportada na época da ascensão do JavaScript ao domínio, aproximadamente entre 2000 e 2010. Durante esse período, o trabalho estava em andamento em uma versão 4 ambiciosa, que planejava uma série de melhorias radicais e extensões para a linguagem. Mudar uma linguagem viva e amplamente usada de forma tão radical acabou sendo politicamente difícil, e o trabalho na versão 4 foi abandonado em 2008, levando a uma versão 5 muito menos ambiciosa, que fez apenas algumas melhorias incontroversas, saindo em 2009 Então, em 2015, foi lançada a versão 6, uma grande atualização que incluiu algumas das ideias planejadas para a versão 4. Desde então, tivemos novas e pequenas atualizações todos os anos.

O fato de a linguagem estar evoluindo significa que os navegadores precisam acompanhar constantemente e, se você estiver usando um navegador mais antigo, ele pode não suportar todos os recursos. Os designers de linguagem têm o cuidado de não fazer alterações que possam quebrar os programas existentes, para que novos navegadores ainda possam executar programas antigos. Neste livro, estou usando a versão 2017 do JavaScript.

Os navegadores da Web não são as únicas plataformas nas quais o JavaScript é usado. Alguns bancos de dados, como MongoDB e CouchDB, usam JavaScript como linguagem de script e consulta. Várias plataformas para programação de desktop e servidor, principalmente o projeto Node.js (o assunto do [Capítulo 20](https://eloquentjavascript.net/20_node.html) ), fornecem um ambiente para programação JavaScript fora do navegador.

## Código e o que fazer com ele

*Código* é o texto que compõe os programas. A maioria dos capítulos deste livro contém bastante código. Acredito que ler código e escrever código são partes indispensáveis para aprender a programar. Tente não apenas dar uma olhada nos exemplos – leia-os atentamente e compreenda-os. Isso pode ser lento e confuso no começo, mas eu prometo que você vai pegar o jeito rapidamente. O mesmo vale para os exercícios. Não assuma que você os entende até que você realmente tenha escrito uma solução funcional.

Eu recomendo que você tente suas soluções para exercícios em um interpretador JavaScript real. Dessa forma, você receberá um feedback imediato sobre se o que está fazendo está funcionando e, espero, ficará tentado a experimentar e ir além dos exercícios.

Ao ler este livro em seu navegador, você pode editar (e executar) todos os programas de exemplo clicando neles.

Se você deseja executar os programas definidos neste livro fora do site do livro, alguns cuidados serão necessários. Muitos exemplos são independentes e devem funcionar em qualquer ambiente JavaScript. Mas o código em capítulos posteriores geralmente é escrito para um ambiente específico (o navegador ou Node.js) e só pode ser executado nele. Além disso, muitos capítulos definem programas maiores, e os pedaços de código que aparecem neles dependem uns dos outros ou de arquivos externos. A [sandbox](https://eloquentjavascript.net/code) no site fornece links para arquivos Zip contendo todos os scripts e arquivos de dados necessários para executar o código de um determinado capítulo.

## Visão geral deste livro

Este livro contém aproximadamente três partes. Os primeiros 12 capítulos discutem a linguagem JavaScript. Os próximos sete capítulos são sobre navegadores da web e a maneira como o JavaScript é usado para programá-los. Finalmente, dois capítulos são dedicados ao Node.js, outro ambiente para programar JavaScript.

Ao longo do livro, há cinco *capítulos de projeto* , que descrevem programas de exemplo maiores para dar a você um gostinho da programação real. Em ordem de aparição, trabalharemos construindo um [robô de entrega](https://eloquentjavascript.net/07_robot.html) , uma [linguagem](https://eloquentjavascript.net/12_language.html) de programação , um [jogo de plataforma](https://eloquentjavascript.net/16_game.html) , um [programa de pintura de pixel](https://eloquentjavascript.net/19_paint.html) e um [site dinâmico](https://eloquentjavascript.net/21_skillsharing.html) .

A parte de linguagem do livro começa com quatro capítulos que apresentam a estrutura básica da linguagem JavaScript. Eles introduzem [estruturas de controle](https://eloquentjavascript.net/02_program_structure.html) (como a `while`palavra que você viu nesta introdução), [funções](https://eloquentjavascript.net/03_functions.html) (escrevendo seus próprios blocos de construção) e [estruturas de dados](https://eloquentjavascript.net/04_data.html) . Depois disso, você poderá escrever programas básicos. A seguir, os Capítulos [5](https://eloquentjavascript.net/05_higher_order.html) e [6](https://eloquentjavascript.net/06_object.html) apresentam técnicas para usar funções e objetos para escrever código mais *abstrato* e manter a complexidade sob controle.

Após um [primeiro capítulo de projeto](https://eloquentjavascript.net/07_robot.html) , a parte de linguagem do livro continua com capítulos sobre [tratamento de erros e correção de bugs](https://eloquentjavascript.net/08_error.html) , [expressões regulares](https://eloquentjavascript.net/09_regexp.html) (uma ferramenta importante para trabalhar com texto), [modularidade](https://eloquentjavascript.net/10_modules.html) (outra defesa contra a complexidade) e [programação assíncrona](https://eloquentjavascript.net/11_async.html) (lidando com eventos que demorar). O [segundo capítulo do projeto](https://eloquentjavascript.net/12_language.html) conclui a primeira parte do livro.

A segunda parte, Capítulos [13](https://eloquentjavascript.net/13_browser.html) a [19](https://eloquentjavascript.net/19_paint.html) , descreve as ferramentas às quais o JavaScript do navegador tem acesso. Você aprenderá a exibir coisas na tela (Capítulos [14](https://eloquentjavascript.net/14_dom.html) e [17](https://eloquentjavascript.net/17_canvas.html) ), responder à entrada do usuário ( [Capítulo 15](https://eloquentjavascript.net/15_event.html) ) e se comunicar pela rede ( [Capítulo 18](https://eloquentjavascript.net/18_http.html) ). Há novamente dois capítulos de projeto nesta parte.

Depois disso, o [Capítulo 20](https://eloquentjavascript.net/20_node.html) descreve o Node.js e o [Capítulo 21](https://eloquentjavascript.net/21_skillsharing.html) cria um pequeno site usando essa ferramenta.

## Convenções tipográficas

Neste livro, o texto escrito em uma `monospaced`fonte representará elementos de programas – às vezes são fragmentos auto-suficientes e às vezes apenas se referem a parte de um programa próximo. Os programas (dos quais você já viu alguns) são escritos da seguinte forma:

```javascript
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
```

Às vezes, para mostrar a saída que um programa produz, a saída esperada é escrita depois dela, com duas barras e uma seta na frente.

```javascript
console.log(factorial(8));
// → 40320
```

Boa sorte!





# Capítulo 1 - Valores, tipos e operadores

> Abaixo da superfície da máquina, o programa se move. Sem esforço, ela se expande e se contrai. Em grande harmonia, os elétrons se dispersam e se reagrupam. As formas no monitor são apenas ondulações na água. A essência fica invisível abaixo.
>
> Mestre Yuan-Ma, O Livro da Programação

![Imagem de um mar de bits](https://eloquentjavascript.net/img/chapter_picture_1.jpg)

Dentro do mundo do computador, existem apenas dados. Você pode ler dados, modificar dados, criar novos dados — mas o que não é dado não pode ser mencionado. Todos esses dados são armazenados como longas sequências de bits e, portanto, são fundamentalmente semelhantes.

*Bits* são qualquer tipo de coisa de dois valores, geralmente descritos como zeros e uns. Dentro do computador, eles assumem formas como uma carga elétrica alta ou baixa, um sinal forte ou fraco ou um ponto brilhante ou opaco na superfície de um CD. Qualquer pedaço de informação discreta pode ser reduzido a uma sequência de zeros e uns e assim representado em bits.

Por exemplo, podemos expressar o número 13 em bits. Funciona da mesma forma que um número decimal, mas em vez de 10 dígitos diferentes, você tem apenas 2, e o peso de cada um aumenta por um fator de 2 da direita para a esquerda. Aqui estão os bits que compõem o número 13, com os pesos dos dígitos mostrados abaixo deles:

```javascript
   0 0 0 0 1 1 0 1
 128 64 32 16 8 4 2 1
```

Então esse é o número binário 00001101. Seus dígitos diferentes de zero representam 8, 4 e 1, e somam 13.

## Valores

Imagine um mar de bits — um oceano deles. Um computador moderno típico tem mais de 30 bilhões de bits em seu armazenamento de dados voláteis (memória de trabalho). O armazenamento não volátil (o disco rígido ou equivalente) tende a ter algumas ordens de magnitude a mais.

Para poder trabalhar com essas quantidades de bits sem nos perdermos, devemos separá-los em pedaços que representam pedaços de informação. Em um ambiente JavaScript, esses pedaços são chamados de *valores* . Embora todos os valores sejam feitos de bits, eles desempenham papéis diferentes. Cada valor tem um tipo que determina sua função. Alguns valores são números, alguns valores são pedaços de texto, alguns valores são funções e assim por diante.

Para criar um valor, você deve simplesmente invocar seu nome. Isso é conveniente. Você não precisa juntar material de construção para seus valores ou pagar por eles. Você acabou de pedir um, e *whoosh* , você o tem. Eles não são realmente criados do nada, é claro. Cada valor deve ser armazenado em algum lugar, e se você quiser usar uma quantidade gigantesca deles ao mesmo tempo, poderá ficar sem memória. Felizmente, isso é um problema apenas se você precisar de todos eles simultaneamente. Assim que você não usar mais um valor, ele se dissipará, deixando para trás seus bits para serem reciclados como material de construção para a próxima geração de valores.

Este capítulo apresenta os elementos atômicos dos programas JavaScript, ou seja, os tipos de valor simples e os operadores que podem atuar em tais valores.

## Números

Os valores do tipo *numérico* são, sem surpresa, valores numéricos. Em um programa JavaScript, eles são escritos da seguinte forma:

```javascript
13
```

Use isso em um programa, e isso fará com que o padrão de bits para o número 13 passe a existir dentro da memória do computador.

JavaScript usa um número fixo de bits, 64 deles, para armazenar um único valor numérico. Existem tantos padrões que você pode fazer com 64 bits, o que significa que o número de números diferentes que podem ser representados é limitado. Com *N* dígitos decimais, você pode representar 10 N números. Da mesma forma, dados 64 dígitos binários, você pode representar 2 64 números diferentes, o que equivale a cerca de 18 quintilhões (um 18 com 18 zeros depois). Isso é muito.

A memória do computador costumava ser muito menor e as pessoas tendiam a usar grupos de 8 ou 16 bits para representar seus números. Era fácil *estourar* acidentalmente números tão pequenos — acabar com um número que não se encaixava no número de bits dado. Hoje, até mesmo os computadores que cabem no seu bolso têm muita memória, então você está livre para usar pedaços de 64 bits e precisa se preocupar com estouro apenas ao lidar com números realmente astronômicos.

Nem todos os números inteiros menores que 18 quintilhões cabem em um número JavaScript. Esses bits também armazenam números negativos, então um bit indica o sinal do número. Um problema maior é que os números não inteiros também devem ser representados. Para fazer isso, alguns dos bits são usados para armazenar a posição do ponto decimal. O número inteiro máximo real que pode ser armazenado está mais na faixa de 9 quatrilhões (15 zeros) – o que ainda é agradavelmente grande.

Os números fracionários são escritos usando um ponto.

```javascript
9,81
```

Para números muito grandes ou muito pequenos, você também pode usar a notação científica adicionando um *e* (para *expoente* ), seguido pelo expoente do número.

```javascript
2.998e8
```

Isso é 2,998 × 10 8 = 299.800.000.

Cálculos com números inteiros (também chamados de *inteiros* ) menores que os 9 quatrilhões mencionados acima são garantidos para serem sempre precisos. Infelizmente, cálculos com números fracionários geralmente não são. Assim como π (pi) não pode ser expresso com precisão por um número finito de dígitos decimais, muitos números perdem alguma precisão quando apenas 64 bits estão disponíveis para armazená-los. Isso é uma pena, mas causa problemas práticos apenas em situações específicas. O importante é estar atento a isso e tratar os números digitais fracionários como aproximações, não como valores precisos.

### Aritmética

A principal coisa a fazer com números é aritmética. Operações aritméticas, como adição ou multiplicação, recebem dois valores numéricos e produzem um novo número a partir deles. Aqui está como eles se parecem em JavaScript:

```javascript
100  +  4  *  11
```

Os símbolos `+`e são chamados *de operadores* . O primeiro significa adição e o segundo, multiplicação. Colocar um operador entre dois valores o aplicará a esses valores e produzirá um novo valor.`*`

Mas o exemplo significa “somar 4 e 100 e multiplicar o resultado por 11”, ou a multiplicação é feita antes da adição? Como você deve ter adivinhado, a multiplicação acontece primeiro. Mas, como na matemática, você pode mudar isso envolvendo a adição entre parênteses.

```javascript
( 100  +  4 ) *  11
```

Para subtração, existe o `-`operador, e a divisão pode ser feita com o `/`operador.

Quando os operadores aparecem juntos sem parênteses, a ordem em que são aplicados é determinada pela *precedência* dos operadores. O exemplo mostra que a multiplicação vem antes da adição. O `/`operador tem a mesma precedência que `*`. Da mesma forma para `+`e `-`. Quando vários operadores com a mesma precedência aparecem um ao lado do outro, como em `1 - 2 + 1`, eles são aplicados da esquerda para a direita: `(1 - 2) + 1`.

Essas regras de precedência não são algo com que você deve se preocupar. Na dúvida, basta adicionar parênteses.

Há mais um operador aritmético, que você pode não reconhecer imediatamente. O `%`símbolo é usado para representar a operação *restante* . `X % Y`é o resto da divisão `X`por `Y`. Por exemplo, `314 % 100`produz `14`, e `144 % 12`dá `0`. A precedência do operador resto é a mesma da multiplicação e divisão. Você também verá esse operador frequentemente chamado de *módulo* .

### Números especiais

Existem três valores especiais em JavaScript que são considerados números, mas não se comportam como números normais.

Os dois primeiros são `Infinity`e `-Infinity`, que representam os infinitos positivos e negativos. `Infinity - 1`ainda é `Infinity`, e assim por diante. No entanto, não confie muito na computação baseada em infinito. Não é matematicamente correto e levará rapidamente ao próximo número especial: `NaN`.

`NaN`significa “não é um número”, mesmo que *seja* um valor do tipo número. Você obterá esse resultado quando, por exemplo, tentar calcular `0 / 0`(zero dividido por zero), `Infinity - Infinity`, ou qualquer número de outras operações numéricas que não produzam um resultado significativo.

## Strings

O próximo tipo de dados básico é a *string* . Strings são usadas para representar texto. Eles são escritos colocando seu conteúdo entre aspas.

```javascript
'No mar' 
"Deite-se no oceano" 
'Flutue no oceano'
```

Você pode usar aspas simples, aspas duplas ou acentos graves para marcar strings, desde que as aspas no início e no final da string correspondam.

Quase tudo pode ser colocado entre aspas, e o JavaScript criará um valor de string a partir disso. Mas alguns personagens são mais difíceis. Você pode imaginar como colocar aspas entre aspas pode ser difícil. *As novas linhas* (os caracteres que você obtém ao pressionar enter ) podem ser incluídas sem escape somente quando a string é citada com acentos graves ( ```).

Para possibilitar a inclusão de tais caracteres em uma string, utiliza-se a seguinte notação: sempre que uma barra invertida ( `\`) for encontrada dentro de um texto entre aspas, indica que o caractere que vem depois tem um significado especial. Isso é chamado de *escapar* do caractere. Uma aspa precedida por uma barra invertida não terminará a string, mas fará parte dela. Quando um `n`caractere ocorre após uma barra invertida, ele é interpretado como uma nova linha. Da mesma forma, um `t`após uma barra invertida significa um caractere de tabulação. Pegue a seguinte string:

```javascript
"Esta é a primeira linha\nE esta é a segunda"
```

O texto real contido é este:

```javascript
This is the first line
And this is the second
```

Existem, é claro, situações em que você deseja que uma barra invertida em uma string seja apenas uma barra invertida, não um código especial. Se duas barras invertidas se seguirem, elas serão recolhidas juntas e apenas uma será deixada no valor da string resultante. É assim que a string “ *Um caractere de nova linha é escrito como `"`\n `"`.* " pode ser expressada:

```javascript
"A newline character is written like \"\\n\"."
```

Strings também precisam ser modeladas como uma série de bits para poder existir dentro do computador. A maneira como o JavaScript faz isso é baseada no padrão *Unicode* . Esse padrão atribui um número a praticamente todos os caracteres que você precisaria, incluindo caracteres do grego, árabe, japonês, armênio e assim por diante. Se tivermos um número para cada caractere, uma string pode ser descrita por uma sequência de números.

E é isso que o JavaScript faz. Mas há uma complicação: a representação do JavaScript usa 16 bits por elemento string, que pode descrever até 2 16 caracteres diferentes. Mas Unicode define mais caracteres do que isso - cerca de duas vezes mais, neste momento. Assim, alguns caracteres, como muitos emojis, ocupam duas “posições de caracteres” em strings JavaScript. Voltaremos a isso no [Capítulo 5](https://eloquentjavascript.net/05_higher_order.html#code_units) .

Strings não podem ser divididas, multiplicadas ou subtraídas, mas o `+`operador *pode* ser usado nelas. Ela não soma, mas *concatena* — ela cola duas cordas juntas. A linha a seguir produzirá a string `"concatenate"`:

```javascript
"con" + "cat" + "e" + "nate"
```

Os valores de string têm várias funções associadas ( *métodos* ) que podem ser usadas para realizar outras operações neles. Falarei mais sobre isso no [Capítulo 4](https://eloquentjavascript.net/04_data.html#methods) .

Strings escritas com aspas simples ou duplas se comportam da mesma forma - a única diferença é em qual tipo de aspas você precisa escapar dentro delas. Strings com aspas invertidas, geralmente chamadas de *literais de modelo* , podem fazer mais alguns truques. Além de poder abranger linhas, eles também podem incorporar outros valores.

```javascript
`half of 100 is ${100 / 2}`
```

Quando você escreve algo dentro `${}`de um modelo literal, seu resultado será calculado, convertido em uma string e incluído nessa posição. O exemplo produz “ *metade de 100 é 50* ”.

## Operadores unários

Nem todos os operadores são símbolos. Alguns são escritos como palavras. Um exemplo é o `typeof`operador, que produz um valor de string nomeando o tipo do valor que você fornece.

```javascript
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
```

Usaremos `console.log`no código de exemplo para indicar que queremos ver o resultado da avaliação de algo. Mais sobre isso no [próximo capítulo](https://eloquentjavascript.net/02_program_structure.html) .

Os outros operadores mostrados operaram em dois valores, mas `typeof`aceitam apenas um. Operadores que usam dois valores são chamados de operadores *binários* , enquanto aqueles que usam um são chamados de operadores *unários* . O operador menos pode ser usado tanto como operador binário quanto como operador unário.

```javascript
console.log(- (10 - 2))
// → -8
```

## Valores booleanos

Muitas vezes é útil ter um valor que diferencie apenas duas possibilidades, como “sim” e “não” ou “ligado” e “desligado”. Para isso, JavaScript possui um tipo *booleano* , que possui apenas dois valores, true e false, que são escritos como essas palavras.

### Comparação

Aqui está uma maneira de produzir valores booleanos:

```javascript
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
```

Os sinais `>`e `<`são os símbolos tradicionais para “é maior que” e “é menor que”, respectivamente. São operadores binários. Aplicá-los resulta em um valor booleano que indica se eles são verdadeiros nesse caso.

Strings podem ser comparadas da mesma maneira.

```javascript
console.log("Aardvark" < "Zoroaster")
// → true
```

A forma como as strings são ordenadas é aproximadamente alfabética, mas não é exatamente o que você esperaria ver em um dicionário: letras maiúsculas são sempre “menos” que as minúsculas, então `"Z" < "a"`, e caracteres não alfabéticos (!, - e assim por diante) também estão incluídos na ordenação. Ao comparar strings, o JavaScript percorre os caracteres da esquerda para a direita, comparando os códigos Unicode um por um.

Outros operadores semelhantes são `>=`(maior ou igual a), `<=`(menor ou igual a), `==`(igual a) e (diferente `!=`de).

```javascript
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
```

Existe apenas um valor em JavaScript que não é igual a si mesmo, que é `NaN`(“não é um número”).

```javascript
console.log(NaN == NaN)
// → false
```

`NaN`é suposto denotar o resultado de um cálculo sem sentido e, como tal, não é igual ao resultado de quaisquer *outros* cálculos sem sentido.

### Operadores lógicos

Existem também algumas operações que podem ser aplicadas aos próprios valores booleanos. JavaScript suporta três operadores lógicos: *and* , *or* , and *not* . Estes podem ser usados para “raciocinar” sobre booleanos.

O `&&`operador representa lógico *e* . É um operador binário e seu resultado é verdadeiro somente se ambos os valores dados a ele forem verdadeiros.

```javascript
console.log(true && false)
// → false
console.log(true && true)
// → true
```

O `||`operador denota lógico *ou* . Ela produz true se qualquer um dos valores fornecidos a ela for true.

```javascript
console.log(false || true)
// → true
console.log(false || false)
// → false
```

*Not* é escrito como um ponto de exclamação ( `!`). É um operador unário que inverte o valor dado a ele – `!true`produz `false`e `!false`dá `true`.

Ao misturar esses operadores booleanos com aritméticos e outros operadores, nem sempre é óbvio quando os parênteses são necessários. Na prática, geralmente você pode saber que, dos operadores que vimos até agora, `||`tem a menor precedência, depois vem `&&`, depois os operadores de comparação ( `>`, `==`, e assim por diante) e depois o resto. Esta ordem foi escolhida de tal forma que, em expressões típicas como a seguinte, seja necessário o mínimo de parênteses:

```javascript
 + 1 == 2 && 10 * 10 > 50
```

O último operador lógico que discutirei não é unário, nem binário, mas *ternário* , operando em três valores. Está escrito com um ponto de interrogação e dois pontos, assim:

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```

Este é chamado de operador *condicional* (ou às vezes apenas operador *ternário* , pois é o único operador desse tipo na linguagem). O valor à esquerda do ponto de interrogação “escolhe” qual dos outros dois valores sairá. Quando for verdadeiro, ele escolhe o valor do meio, e quando for falso, ele escolhe o valor da direita.

## Valores vazios

Existem dois valores especiais, escritos `null`e `undefined`, que são usados para denotar a ausência de um valor *significativo* . Eles próprios são valores, mas não carregam nenhuma informação.

Muitas operações na linguagem que não produzem um valor significativo (você verá alguns mais adiante) são geradas `undefined`simplesmente porque precisam gerar *algum* valor.

A diferença de significado entre `undefined`e `null`é um acidente do design do JavaScript e não importa na maioria das vezes. Nos casos em que você realmente precisa se preocupar com esses valores, recomendo tratá-los como intercambiáveis.

## Conversão automática de tipo

Na introdução, mencionei que o JavaScript se esforça para aceitar quase qualquer programa que você der a ele, mesmo programas que fazem coisas estranhas. Isso é bem demonstrado pelas seguintes expressões:

```javascript
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```

Quando um operador é aplicado ao tipo de valor “errado”, o JavaScript silenciosamente converterá esse valor para o tipo que ele precisa, usando um conjunto de regras que geralmente não são o que você deseja ou espera. Isso é chamado **type coercion** . O `null`na primeira expressão se torna `0`, e o `"5"`na segunda expressão se torna `5`(da string para o número). Ainda na terceira expressão, `+`tenta a concatenação de strings antes da adição numérica, então o `1`é convertido para `"1"`(de número para string).

Quando algo que não é mapeado para um número de maneira óbvia (como `"five"`ou `undefined`) é convertido em um número, você obtém o valor `NaN`. Outras operações aritméticas `NaN`continuam produzindo `NaN`, portanto, se você encontrar uma dessas em um local inesperado, procure por conversões de tipo acidentais.

Ao comparar valores do mesmo tipo usando `==`, o resultado é fácil de prever: você deve obter true quando ambos os valores forem iguais, exceto no caso de `NaN`. Mas quando os tipos diferem, o JavaScript usa um conjunto complicado e confuso de regras para determinar o que fazer. Na maioria dos casos, ele apenas tenta converter um dos valores para o tipo do outro valor. No entanto, quando `null`ou `undefined`ocorre em qualquer um dos lados do operador, ele produz true somente se ambos os lados forem um de `null`ou `undefined`.

```javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

Esse comportamento é muitas vezes útil. Quando você quiser testar se um valor tem um valor real em vez de `null`ou `undefined`, você pode compará-lo `null`com o operador `==`(ou ).`!=`

Mas e se você quiser testar se algo se refere ao valor preciso `false`? Expressões como `0 == false`e `"" == false`também são verdadeiras por causa da conversão automática de tipo. Quando você *não* deseja que nenhuma conversão de tipo aconteça, há dois operadores adicionais: `===`e `!==`. O primeiro testa se um valor é *exatamente* igual ao outro, e o segundo testa se não é exatamente igual. Então `"" === false`é falso como esperado.

Eu recomendo usar os operadores de comparação de três caracteres defensivamente para evitar que conversões de tipo inesperadas o atrapalhem. Mas quando você tem certeza de que os tipos em ambos os lados serão os mesmos, não há problema em usar os operadores mais curtos.

### Curto-circuito de operadores lógicos

Os operadores lógicos `&&`e `||`manipulam valores de diferentes tipos de forma peculiar. Eles converterão o valor do lado esquerdo para o tipo booleano para decidir o que fazer, mas dependendo do operador e do resultado dessa conversão, eles retornarão o valor *original* à esquerda ou o valor à direita.

O `||`operador, por exemplo, retornará o valor à sua esquerda quando puder ser convertido para true e retornará o valor à sua direita caso contrário. Isso tem o efeito esperado quando os valores são booleanos e faz algo análogo para valores de outros tipos.

```javascript
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

Podemos usar essa funcionalidade como uma maneira de retornar a um valor padrão. Se você tiver um valor que possa estar vazio, poderá colocá-lo `||` depois com um valor de substituição. Se o valor inicial puder ser convertido em falso, você receberá a substituição. As regras para converter strings e números em valores booleanos afirmam que `0`, `NaN`e a string vazia ( `""`) contam como `false`, enquanto todos os outros valores contam como `true`. Assim `0 || -1`produz `-1`, e `"" || "!?"`produz `"!?"`.

O `&&`operador funciona de forma semelhante, mas ao contrário. Quando o valor à sua esquerda é algo que converte em falso, ele retorna esse valor e, caso contrário, retorna o valor à sua direita.

Outra propriedade importante desses dois operadores é que a parte à sua direita é avaliada apenas quando necessário. No caso de `true || X`, não importa o que `X`seja - mesmo que seja um programa que faça algo *terrível* - o resultado será verdadeiro e `X`nunca será avaliado. O mesmo vale para `false && X`, que é falso e irá ignorar `X`. Isso é chamado *de avaliação de curto-circuito* .

O operador condicional funciona de maneira semelhante. Do segundo e terceiro valores, apenas o selecionado é avaliado.

## Resumo

Examinamos quatro tipos de valores JavaScript neste capítulo: números, strings, booleanos e valores indefinidos.

Esses valores são criados digitando seu nome ( `true`, `null`) ou valor ( `13`, `"abc"`). Você pode combinar e transformar valores com operadores. Vimos operadores binários para aritmética ( `+`, `-`, `*`, `/`, e `%`), concatenação de strings ( `+`), comparação ( `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`) e lógica ( `&&`, `||`), bem como vários operadores unários ( `-`para negar um número, `!`para negar logicamente e `typeof`para encontrar o tipo de um valor) e um operador ternário ( `?:`) para escolher um dos dois valores com base em um terceiro valor.

Isso fornece informações suficientes para usar o JavaScript como uma calculadora de bolso, mas não muito mais. O [próximo capítulo](https://eloquentjavascript.net/02_program_structure.html) começará a unir essas expressões em programas básicos.
