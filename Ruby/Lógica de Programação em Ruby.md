#### Lógica de Programação em Ruby
https://ifrnead.github.io/rubynapratica/contents/programacao_estruturada/hashes.html

# 1. I/O

## Comando No console Depois de instalar Ruby

```
#ruby -v
ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x64-mingw-ucrt]


// Interactive Ruby
// 
#irb

// Comando de saida
#puts

// Comando de entrada
#gets

// Sair do tarminal linha de comando
# exit

```

###### Arquivo CookBook.rb
```
puts "Bem vindo ao CookBook, Sua rede social de receitas"

puts "Digite o nome da receita: "
receita = gets

puts receita

puts "Receita cadastrada com sucesso"

```
#ruby cookbook.rb


# 2. Variáveis

![image](https://user-images.githubusercontent.com/60019853/196965132-b507e56c-318e-4276-897f-09745f9e7771.png)


#### String
String sem utilisar concatenação

```ruby
puts "Digite o seu nome"
nome = gets.comp()


puts "Meu nome é #{nome}."
```

### Conversão
Tabela 1 - Métodos para conversão de tipos

  <valor>.to_i	- Converte <valor> para um número inteiro (Integer)	
    "10".to_i  

  <valor>.to_f	- Converte <valor> para um número real (Float)	"
    3.14".to_f  

  <valor>.to_s	- Converte <valor> para uma String	
    12.to_s  


# 3. Array

```ruby
receitas = []

receitas << "bolo de cenoura".comp()
receitas << 3

receitas.delete(3)

puts receitas[0]
```

# 4. Estruturas de Repetição

### while
```ruby
while(true) do

end
```

### For
```ruby
for receita in receitas do
  puts receita
end
```

### Each
```ruby
receitas.each do |receita|
  puts receita
end
```

# 5. Estruturas Condicionais

```ruby

if(opcao ==1)

elsif(opcao == 2)

else

end
```
    
 # 6. Hash

    Na última aula estudamos os arrays, que são importantes estruturas de dados capazes de guardar um conjunto de dados, evitando a criação de várias variáveis. Os hashes também são estruturas de dados, bem semelhantes aos arrays, que guardam um conjunto de dados. A principal diferença entre os arrays e os hashes é que, nos arrays cada posição é "endereçada" (indexada) por um número inteiro, enquanto nos hashes, cada posição é endereçada por uma chave (SOUZA, 2012).

Uma definição muito simples para os hashes é que eles são uma coleção de pares chave-valor. Confira a Figura 1, que ilustra a estrutura de um hash.
    
    ![image](https://user-images.githubusercontent.com/60019853/196966604-2488671d-ec1b-4baf-9b6a-0d47cca88459.png)


    
    
    
