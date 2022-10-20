#### Lógica de Programação em Ruby

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

#### String
String sem utilisar concatenação

```ruby
puts "Digite o seu nome"
nome = gets.comp()


puts "Meu nome é #{nome}."
```

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

