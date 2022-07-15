# Aprendendo o que é Ruby
DIGITAL INNOVATION ONE 

Ruby, rails e as Gems (Bibliotecas)

O que é Ruby? 

- Criada em 1995 por Matz
- Interpretada
- Multi paradigma
- Foco em simplicidade
- Popularidade em 2001 apóso livro"Programming Ruby"


#### Ruby  
Uma linguagem dinâmica, open source com foco na simplicidade e na produtividade.Tem uma sintaxe elegante de leitura naturalefácil escrita.

Caracteristicas  
   Tipagem dinamica e forte  
   Orientado a objeto
   Foco em sinplicidade
   

```ruby
   class Hello
      def initialize(name)
        @name = name.capitalize
      end
      def speak
        puts "Olá #{@nome}"
      end
   end
   #Criar um objeto
   h - Hello.new("mundo")
   
   #saída:"Olá mundo"
   g.speak
   
```
   #### Rails
- Framework Web escrito em Ruby
- Criada em 2004 por David Heinemeier Hansson(DHH)
- Extraído do Basecamp
- Otimizado paraafelicidade da pessoa programando
- Convenção sobre configuração

Padrão MVC
Model -> View -> Controller

#### Fluxo
Router -> Controller <--> Model  
Controller -> View  
   
   
#### Estrutura de pastas e arquivos
```
   > app
      assets
      channels
      controllers
      helpers
      javascript
      jobs
      mailers
      models
      views
   > bin
   > config
   > db
   > lib
   > log
   > node_modules
   > public
   > storage
   > test
   > tmp
   > vendor
   ```
   
   #### GENS
   Bibilitecas
   
   > SITE: rubygems.org
   
   #### Instalr uma Gems
   
   > # gem install nome_da_gem
   
   Primeira aula e 2 Video
   
   
