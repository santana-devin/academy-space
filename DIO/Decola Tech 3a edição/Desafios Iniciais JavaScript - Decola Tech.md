# Desafios Iniciais JavaScript - Decola Tech

## Desafio 1
 Básico  Princípios Básicos

Saruman, o Branco, um grande mago da Terra-média, traiu os bons costumes e se filiou ao lorde do mal, Sauron. Sauron comanda a torre de Minas Morgul, que abriga um dos seus mais temidos servos, o Rei Bruxo de Angmar, um dos Nazgûl (antigos reis humanos que foram corrompidos pelos poderes dos anéis de Sauron). Saruman comanda a torre de Orthanc, onde cria seus servos Uruk-hai, orcs mais terríveis que os convencionais. Para comunicação, eles utilizam as relíquias esféricas chamadas Palantír, que ficam no topo de suas torres.
A Terra-média avança cada vez mais em tecnologia, muito impulsionada pelas guerras que a acometem diariamente. Um dos problemas que tem atrapalhado sua população é a Interferência de Comunicação Mágica (ICM). Os estudiosos de Minas Tirith, grande cidadela de Gondor, concluíram que para calcular o ICM para Palantír’s, basta dividir a distância entre os dois Palantír’s, pela soma do diâmetro dos mesmos. Gandalf, o Cinza, chegou a questionar essa conclusão, alegando que ela não fazia muito sentido, mas ele mesmo concluiu que dar sentido às coisas não faz sentido.
Saruman e Sauron precisam de uma comunicação estável, pois têm medo que Frodo e seus amigos consigam atrapalhar seus planos, portanto, querem saber quanto de ICM há na comunicação de seus Palantír’s, para que saibam quanto de magia devem empregar na comunicação.

>Entrada:
>A entrada é composta por 3 inteiros, N(0 < N < 10000), X e Y(0 < X, Y < 100), que indicam, respectivamente, a distância entre os Palantír, o diâmetro do Palantír de Sauron e o diâmetro do Palantír de Saruman.

>Saída:
>Um valor real indicando o ICM da comunicação dos Palatír de Sauron e Saruman, com 2 casas decimais.

 
>Exemplos de Entrada : 100 2 2
>
>Exemplos de Saída : 25.00 


>Exemplos de Entrada : 200 3 8
>
>Exemplos de Saída : 18.18

IX Olimpíada Interna de Programação do IFSULDEMINAS - OLIP 2019

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets().split(" "); 
let n, x, y; 

n =  parseInt(input[0]); 
x =  parseInt(input[1]); 
y =  parseInt(input[2]); 

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let resultado =   n   / (x +  y ); 
print(resultado.toFixed(2));
```

## Desafio 2

 Intermediário  Princípios Básicos

Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

>Entrada:
>O arquivo de entrada contém 2 valores com uma casa decimal cada um.

>Saída:
>Calcule e imprima a variável MEDIA conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade. Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

 
>Exemplos de Entrada : 5.0 7.1
>
>Exemplos de Saída : 6.43182
 
 
>Exemplos de Entrada : 0.0 7.1
>	
>Exemplos de Saída : 4.84091


>Exemplos de Entrada : 10.0 10.0
>
>Exemplos de Saída : 10.00000

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var a = parseFloat(gets());
var b = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

var media = ((  a * 3.5) + (  b  * 7.5))/11;
print("MEDIA = " +  media.toFixed(5));
```


## Desafio 3

 Intermediário  Princípios Básicos

A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

>Entrada:
>A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

>Saída:
>Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

 
>Exemplos de Entrada: 2.00
>	
>Exemplos de Saída: A=12.5664

>Exemplos de Entrada: 100.64
>	
>Exemplos de Saída: A=31819.3103


>Exemplos de Entrada: 150.00
>	
>Exemplos de Saída: A=70685.7750

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const TT = 3.14159;
var raio = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

var area =  TT   *  Math.pow(raio ,2);
print("A=" +  area.toFixed(4));
```

## Desafio 4 

 Básico  Princípios Básicos

Desafio: O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

 - Conter 39 traços horizontais ( - ) na primeira linha;
 - Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
 - Repita o procedimento 2 quatro vezes;
 - Repita o procedimento 1.

No final deve ficar igual a imagem a seguir:

```
--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)
```

>Entrada: Não há.

>Saída: A saída será impresso conforme a figura acima.

```
Exemplo de Entrada	Exemplo de Saída
 	
---------------------------------------

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

---------------------------------------
```
```javascript
/ a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
//Abaixo segue um exemplo de código que você pode ou não utilizar
print('---------------------------------------');
print('|                                     |');
print('|                                     |');
print('|                                     |');
print('|                                     |');
print('|                                     |');
print('---------------------------------------');
//TODO: Complete os espaços em branco com uma possível solução para o desafio
```




