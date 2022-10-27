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






