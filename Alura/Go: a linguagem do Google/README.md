## Abrindo e criando um arquivo

```Go
import "os"
// Função Open é uma versão simpres para abrir um arquivo
os.Open()


// os.OpenFile 
func OpenFile(name string, flag int, perm FileMode) (*File, error)
```


### Criando um arquivo com Go
Para o Go criar um arquivo, podemos utilizar a função OpenFile*, também do pacote os*. Ela recebe o nome do arquivo, uma flag para representar o que fazer com o arquivo, e o seu tipo de permissão. Há diversas flags* que podemos utilizar, elas podem ser vistar aqui.

No nosso caso, se o arquivo não existir, queremos criá-lo, então vamos utilizar a flag O_CREATE ou O_RDWR, para ler e escrever no arquivo. Além disso, vamos dar a permissão 0666 para ele:

Sinalizadores para OpenFile envolvendo aqueles do sistema subjacente. Nem todos os sinalizadores podem ser implementados em um determinado sistema.

```Os
const (
	 // Exatamente um de O_RDONLY, O_WRONLY ou O_RDWR deve ser especificado. 
	O_RDONLY int = syscall . O_RDONLY  // abre o arquivo somente leitura.
 	O_WRONLY int = syscall . O_WRONLY  // abre o arquivo somente gravação.
 	O_RDWR    int = syscall . O_RDWR    // abre o arquivo read-write.
	 // Os valores restantes podem ser inseridos para controlar o comportamento. 
	O_APPEND int = syscall . O_APPEND  // anexa dados ao arquivo durante a escrita.
 	O_CREATE int =syscall . O_CREAT   // cria um novo arquivo se não existir. 
	O_EXCL    int = syscall . O_EXCL    // usado com O_CREATE, o arquivo não deve existir. 
	O_SYNC    int = syscall . O_SYNC    // abre para E/S síncrona. 
	O_TRUNC   int = syscall . O_TRUNC   // truncar arquivo gravável regular quando aberto. 
)

//Example

os.OpenFile("File.txt",os.ORDWR|os.CREATE,0666)
```

## Escrevendo em múltiplas linhas

Escrevendo no arquivo  
Para escrever no arquivo, ele possui a função WriteString, ou seja, basta passar o texto para essa função, que ela o escreve dentro do arquivo:  
```
arquivo.WriteString(site + " - online: " + status + "\n")
```
Mas o Go irá reclamar, isso acontece pois a função WriteString recebe uma string, e nós estamos tentando concatenar com um booleano, então precisamos convertê-lo com a função strings. Para converter um tipo booleano em uma string, vamos utilizar o pacote strconv, que possui a função FormatBool:

```
// restante do código omitido

func registraLog(site string, status bool) {

    arquivo, err := os.OpenFile("log.txt", os.O_CREATE|os.O_RDWR, 0666)

    if err != nil {
        fmt.Println("Ocorreu um erro:", err)
    }

    arquivo.WriteString(site + " - online: " + strconv.FormatBool(status) + "\n")

    arquivo.Close()
}
```

Ao iniciar o monitoramento e ficar verificando o arquivo de logs, vemos que as linhas são sobrescritas a cada site novo monitorado. Isso acontece porque por padrão, quando escrevemos em um arquivo, é sempre escrito do seu começo. Para isso, na hora de abrir o arquivo, existe a flag O_APPEND, que faz com que o texto seja escrito ao final do arquivo

## 05 Formatando tempo em Go

```
time.now().format("02/01/2006")
```
https://pkg.go.dev/time
https://go.dev/src/time/format.go


 ## 07 Função imprimeLogs

Nela, não há nenhuma novidade, precisamos abrir o arquivo de log e imprimir o seu conteúdo. Na aula anterior, vimos como exibir o conteúdo de um arquivo através da função ReadFile, do pacote io/ioutil, então é ela que usaremos:

```
// restante do código omitido

func imprimeLogs() {

    arquivo, err := ioutil.ReadFile("log.txt")

    if err != nil {
        fmt.Println("Ocorreu um erro:", err)
    }

    fmt.Println(arquivo)
}
```
Como a função nos retorna o arquivo em bytes, precisamos convertê-los para string:

```
// restante do código omitido

func imprimeLogs() {

    arquivo, err := ioutil.ReadFile("log.txt")

    if err != nil {
        fmt.Println("Ocorreu um erro:", err)
    }

    fmt.Println(string(arquivo))
}
```
O detalhe é que não precisamos fechar o arquivo, pois o pacote ioutil abre o arquivo, o lê e o fecha para nós.




