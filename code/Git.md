# Adicionando sua chave de segurança (SSH)

Instalar Git


```
// Verssão do Git
$ git --version or git -v 
```

### Configuração
```
// configurar nome e email
$ git config --global user.name "Nome"
$ git config --global user.email nome@gmail.com


ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/seu_user/.ssh/id_rsa): # dê ENTER
Enter passphrase (empty for no passphrase): # Sua senha, pode deixar em branco
Enter same passphrase again: # Repita a senha ou Enter para branco
Your identification has been saved in /Users/seu_user/.ssh/id_rsa.
Your public key has been saved in /Users/seu_user/.ssh/id_rsa.pub.
The key fingerprint is:
4a:a5:34:59:d5:a5:56:29:d3:5e:6e:12:e8:7b:74:da seu_user@sua_maquina
The key's randomart image is:
+--[ RSA 2048]----+
| o+o+o+o.o |
| .....=o o o|
| oo . o |
| . . o . .|
| . S o + |
| . . . o E|
| . . |
| |
| |
+-----------------+


```

04. Git Básico
```
mkdir desafios  
cd desafios
mkdir git-basico  
cd git-basico
git init
git status
thout teste.txt
git status
git add . OR git teste.txt
git commit -m "criando o Projeto"
git log
// Alterar arquivo teste e criar arquivo README.md
git status
git add teste.tct
git add README.md
git status
git config --global --list
git config --list


// Help
git help
git help config


```


Iniciando um repositório

```
mkdir meu_projeto
cd meu_projeto/
git init
git branch --show-current
// master

git branch -m main
git branch --show-current
// main

touch README.md
git status
git add README.md
git status
git commit -m "Meu primeiro commit"
git status

git log

code README.md

> Esse comando só funciona se você tem o VS Code instalado, mas você pode usar qualquer editor de código ou texto. E se esse comando não funcionar, você pode abrir o editor normalmente como faria com qualquer programa de computador.

git status
git add README.md
git status
git add README.md
git config core.editor
git config core.editor "nano"


$ git config core.editor
core.editor=vim
$ git config core.editor "nano"
git add README.md
$ git commit
```


#### Desafio
```
git clone git@git.codesaga.com.br:fabriciosantana/git-example
git log
git remote -v

$ touch mais_um_arquivo.txt
$ git add mais_um_arquivo.txt
$ git commit -m "mais um arquivo adicionado"

$ git push origin main


```

