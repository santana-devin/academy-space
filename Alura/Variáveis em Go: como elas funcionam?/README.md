# Variáveis em Go: como elas funcionam?

Confira neste artigo:  
 - Declarando variáveis em GO  
 - Escopo de variáveis
 - Mais exemplos de declaração de variáveis
 - Não atribuir um valor ao criar uma variável

Para todo programa que faremos na vida de programador, precisaremos declarar variáveis e isso é tão comum que fazemos sem pensar. Em Java por exemplo, fazemos a declaração da seguinte maneira:

```
// declaração da  variável idade
int idade;
idade = 15;

// imprime a idade
System.out.println(idade);
```

Mas, e na linguagem GO, com é feita essa declaração?

## Declarando variáveis em GO
Utilizamos a palavra **var**, o nome da variável que queremos referenciar e seu tipo.
```
package main

import (
    "fmt"
)

var idade int = 15

func main() {
    fmt.Println(idade)
}
```

Um ponto interessante é que podemos estar no nível do pacote ou da função.

Mas que isso quer significa?

## Escopo de variáveis
Uma variável declarada dentro de uma estrutura de repetição como o **if, for, switch** ou qualquer outro bloco, não poderá ser acessada fora desse escopo, ou seja, só poderá ser acessadas apenas por escopos mais internos.

Já uma variável ou função criada fora de um bloco é atribuída ao escopo do **Package** ou Pacote, que nada mais é que uma unidade composta por diversos arquivos que juntos servem a um objetivo comum, e pode ser acessada de qualquer arquivo dentro do mesmo pacote.

Como no exemplo a seguir:
```
package main

import (
    "fmt"
)

func main() {
    var idade int = 15
    fmt.Println(idade)
}
```

Ao executar esses códigos, temos o resultado esperado, porém, recebemos uma notificação:
```
should omit type int from declaration of var idade; it will be inferred from the right-hand side
```
Isso significa que devemos omitir o **tipo da variável int(inteiro)**, pois isso já será inferido. Ou seja, temos o mesmo resultado com este código:
```
package main

import (
    "fmt"
)

func main() {
    var idade = 15
    fmt.Println(idade)
}
```
Se o tipo da variável é inferido pelo compilador eu posso usar a mesma variável para tipos de dados diferentes? Por exemplo nome :="guilherme" e depois nome =10 ?

**Mesmo o Go sendo uma linguagem compilada rápida**, de tipagem estática, ou seja, o compilador verifica os tipos usados em dados e variáveis para garantir que sempre está sendo usado um tipo que é esperado em todas as situações, não é aconselhável que isso aconteça.

Mesmo em linguagens que possuem tipagem dinâmica ao invés de estática, ou seja, a verificação de tipo é feita em cima do dado em si, já que as variáveis podem conter qualquer tipo de dado, como o javascript por exemplo, é bom evitar essa prática, pois isso pode causar confusão por parte daqueles que trabalham no mesmo projeto.

## Mais exemplos de declaração de variáveis
Podemos criar mais de uma variável ao mesmo tempo, podendo especificar o tipo ou omitindo:
```
package main

import (
    "fmt"
)

func main() {
    var idade, dia int = 15, 29
    fmt.Println(idade, dia)
}
```
Podemos criar mais de uma variável também com tipos diferentes:
```
package main

import (
    "fmt"
)

func main() {
    var (
        idade  int
        altura float32
        nome   string
    )

    idade = 15
    altura = 1.78
    nome = "Guilherme"

    fmt.Println(nome, idade, altura)
}
```
Ou, deixar o Go **inferir os tipos**, para ter o mesmo resultado:
```
package main

import (
    "fmt"
)

func main() {
    var (
        idade  = 15
        altura = 1.78
        nome   = "Guilherme"
    )
    fmt.Println(nome, idade, altura)
}
```
Posso também utilizar o **Short variable declarations**, ou seja, declarações curtas de variáveis utilizando o sinal : seguido do =.
```
package main

import (
    "fmt"
)

func main() {

    idade := 15
    altura := 1.78
    nome := "Guilherme"
    fmt.Println(nome, idade, altura)
}
```
Está última abordagem com := (dois pontos, igual), usamos apenas quando vamos criar e atribuir um valor **dentro do escopo de uma função.**

Quando a variável receber um novo valor, devemos utilizar apenas o sinal de = (igual). Caso contrário, receberemos a seguinte mensagem dizendo que não há novas variáveis seguido do :=
```
no new variables on left side of :=go
```

## Não atribuir um valor ao criar uma variável
Quando criamos uma variável e não atribuímos um valor a ela, o Go se encarrega de atribuir um valor. Sendo assim, é uma boa prática sempre inicializamos as variáveis durante a declaração.

No C e C++ por exemplo se não inicializamos a variável, o compilador simplesmente pega o que tive naquele espaço de memória que ele alocou e usa como se fosse sua variável.

Em linguagens mais modernas como o Go a própria linguagem se encarrega de inicializar as variáveis:

----------------------------------------------
| Tipo         | valor atribuído pelo Go     |
|----------    |-------------------------    |
| numérico     | 0                           |
| booleano     | false                       |
| string       | " "                         |
----------------------------------------------
É sempre bom fazermos nós mesmos a inicialização das variáveis para não correr nenhum risco dos padrões da linguagem mudarem e nosso programa parar de funcionar.

Como vimos, podemos criar variáveis de diferentes formas utilizando a linguagem GO. Caso queira ver todos os tipos com detalhes,  acesse este link https://go.dev/ref/spec . Quer aprender mais sobre Go lang?

Na plataforma da Alura temos um curso de Go lang https://www.alura.com.br/curso-online-go-lang-oo ensinando mais sobre variáveis, fluxo de controle, convenções e muito mais. Também temos um livro da Casa do código https://www.casadocodigo.com.br/products/livro-google-go, onde apresentamos os recursos da linguagem Go e importantes partes de sua biblioteca padrão, sempre incluindo exemplos relevantes que demonstram o uso de cada recurso.

#### Guilherme Lima
Guilherme é desenvolvedor de software formado em Sistemas de Informação e possui experiência em programação usando diferentes tecnologias como Python, Javascript e Go. Criador de mais de 30 cursos de diferentes áreas da plataforma com foco no treinamento de profissionais de TI, como Data Science, Python para web com Django e Django Rest, jogos com Javascript, Infraestrutura como código com Terraform e Ansible, Orientação a Objetos com Go. Além disso, é um dos instrutores da Imersão Dev da Alura.
