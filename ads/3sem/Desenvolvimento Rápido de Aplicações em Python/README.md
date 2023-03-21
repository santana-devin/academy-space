# Tema 1
# Rad (rapid Applications Development)

### DEFINIÇÃO
Apresentação da metodologia de desenvolvimento rápido de software (RAD) e sua aplicação prática com o uso da linguagem de programação Python e frameworks para a aceleração do desenvolvimento.

### PROPÓSITO
Compreender os conceitos, as fases e vantagens e desvantagens da RAD e apresentar a linguagem de programação Python e frameworks para RAD.

## OBJETIVOS
![Objetivos](https://user-images.githubusercontent.com/60019853/226642407-a220f0bb-350c-4419-b7a0-ac3ba384b30d.PNG)

### INTRODUÇÃO
O desenvolvimento de software tem como objetivo atender as demandas da sociedade, cada vez mais complexas e com abrangência em diversas áreas. Logo nos primórdios da indústria de software, aplicavam-se metodologias que seguiam etapas que não eram revistas e, no final dos projetos, muitas vezes, desenvolvedores e clientes ficavam frustrados com o resultado obtido. Nesse sentido, a necessidade de criar formas mais eficazes de desenvolver sistemas levou à criação da metodologia rápida de desenvolvimento de software, mais conhecida pela sigla em inglês: RAD (Rapid Application Development). Baseia-se na entrega de protótipos para os clientes, a fim de que possam ter uma noção mais clara do progresso do desenvolvimento do software e que também possam colaborar com comentários que permitam aos desenvolvedores fazer alterações para atender as expectativas do cliente.


## MÓDULO 1
Descrever a contextualização, os conceitos, princípios, as ferramentas e técnicas da metodologia de desenvolvimento rápido de software (RAD)

CONTEXTUALIZAÇÃO
O desenvolvimento rápido de aplicações RAD (Rapid Application Development) é uma metodologia de desenvolvimento de software com foco na entrega em um período muito inferior ao do ciclo de desenvolvimento tradicional de software. Não se trata de uma entrega final, mas, sim, de um **protótipo do software**. Para que isso seja possível, é feito um planejamento mínimo para obter um protótipo rápido.

Na metodologia RAD, existe uma concentração no desenvolvimento dos principais módulos funcionais do sistema. Essa versão inicial, que, apesar de limitada, já é funcional, é chamada de protótipo.

> **Protótipo do software**  
Um protótipo de software é um modelo funcional que equivale funcionalmente a um componente do produto. Ou seja, simula apenas alguns aspectos do produto e é útil para o entendimento e a evolução do sistema final.


#### PROTÓTIPO
* É muito útil para a compreensão do sistema
* Serve de demonstração para os clientes
* É mais flexível para mudanças
* Quando está mais evoluído, pode ser integrado ao produto completo para uma entrega mais rápida da versão final

> A RAD também pode ser aplicada para aperfeiçoar o treinamento prático de estudantes de computação, auxiliando-os em seus futuros empregos. Isso porque os estudantes podem aplicar o conhecimento adquirido nas aulas para desenvolver sistemas em etapas, conforme é proposto pela RAD. Como será mostrado mais adiante, o fator humano é um importante requisito para a aplicação dessa metodologia, então a sua aplicação para treinar recursos humanos pode acelerar a curva de aprendizado dentro de um curto período.

Os projetos RAD seguem o **modelo iterativo e incremental**. As equipes de desenvolvimento são pequenas, compostas por desenvolvedores, analistas de negócio e representantes de clientes. **Um dos aspectos mais importantes deste modelo é garantir que os protótipos desenvolvidos sejam reutilizáveis para o projeto do sistema, ou seja, a ideia não é criar unidades descartáveis**. Isso não contradiz o fato de o protótipo ser flexível.

> **Modelo iterativo e incremental**
O desenvolvimento iterativo promove progressos sucessivos, em que o produto é refinado por etapas. No modelo incremental, o software é entregue em pedaços, que são chamados de incrementos. A ideia é que o software seja criado em ciclos curtos, com introdução de funcionalidades, coleta de feedback e revisão.


> O RAD foca no desenvolvimento rápido por meio de iterações frequentes e feedback contínuo.

#### Você sabia
O modelo RAD foi introduzido pelo consultor de tecnologia e autor James Martin em 1991 (MARTIN, 1991). Surgiu como o reconhecimento da necessidade de atender o competitivo mercado de software, que tem uma demanda contínua por novas aplicações. Uma característica que foi explorada para a formalização da RAD foi a flexibilidade do desenvolvimento de software para projetar modelos de desenvolvimento. Trata-se de uma combinação de sessões JAD, desenvolvimento de protótipos, equipes SWAT, entregas com prazo de entrega e ferramentas CASE.

### RAD
* É muito prática em diversos ambientes modernos de desenvolvimento.
* Apresenta uma abordagem útil para criar aplicações de comércio eletrônico e aplicativos de dispositivos móveis.
* Possui uma velocidade de entrega que pode determinar o posicionamento de uma empresa em um ambiente de mercado muito competitivo.


Portanto, trata-se de uma metodologia importante a ser empregada para que as empresas lancem suas aplicações antes de seus concorrentes.

#### Observe no fluxo como iniciar um projeto RAD:

1. Uma das formas de iniciar o projeto RAD é através da aplicação da metodologia Joint Application Development (JAD).
2. Trata-se de uma metodologia na qual usuários e analistas projetam o sistema juntos, sob uma liderança em oficinas de trabalho.
3. A ideia é potencializar o resultado do desenvolvimento através de dinâmicas de grupo.
4. Ou seja, definir os objetivos e as aplicações do sistema, desde a geração de telas até a geração de relatórios.
5. Tem como princípios: dinâmica de grupo; recursos audiovisuais; processo organizado e racional; a escolha do local; documentação com a abordagem WYSIWIG – “O que você vê é o que você obtém”.

A RAD foi a precursora do gerenciamento ágil de projetos. As características de prototipagem rápida e ciclos de liberação e iterações mais curtos fortaleceram o posicionamento da RAD como um método eficaz no desenvolvimento de software, tornando-se cada vez mais popular entre as empresas ágeis que procuram métodos que acompanhem o crescimento de suas necessidades comerciais e de clientes. Trata-se de uma metodologia orientada pelo feedback do usuário, e não por um planejamento detalhado e caro.

Os métodos tradicionais de desenvolvimento de software, como, por exemplo, a metodologia de desenvolvimento **cascata**, seguem modelos rígidos de processo. Isso significa que, nesses modelos tradicionais, os clientes são pressionados a estabelecer os requisitos antes do início do projeto. A iteração ao longo do projeto é baixa, o que complica o processo de mudança para novos requisitos e ajustes de viabilidade.

#### CONCEITOS
Trata-se de uma abordagem interativa com o objetivo de produzir o desenvolvimento de software de alta qualidade. O resultado da aplicação da RAD é um software com menor custo, menos erros e menor tempo de desenvolvimento.

> A RAD pode ser considerada um tipo de técnica ágil. ***(NAZ & KHAN, 2015)***.

A metodologia RAD combina diversas técnicas para acelerar o desenvolvimento de aplicações de software. Outra forma pela qual a RAD é conhecida é como “Construção Rápida de Aplicações”, do inglês Rapid Application Building (RAB). Um dos principais elementos da RAD é o desenvolvimento de protótipos para chegar ao sistema final. Trata-se de um modelo adaptativo, uma vez que o desenvolvimento é feito em iterações em que mudanças podem ser realizadas a partir dos comentários do usuário. A ênfase está na criação rápida de um protótipo, em vez de um planejamento detalhado.

#### A metodologia RAD possui quatro elementos fundamentais:

> USO DE FERRAMENTAS PARA DAR SUPORTE AO DESENVOLVIMENTO
O uso de ferramentas CASE facilita a automação no desenvolvimento de sistemas. Isso é obtido através de recursos como geração de código e verificação automática de erros de consistência. As ferramentas CASE, portanto, são usadas para gerar protótipos, dando, assim, suporte ao desenvolvimento iterativo, possibilitando que os usuários finais acompanhem a evolução do sistema à medida que ele está sendo construído.

> **METODOLOGIA BEM DEFINIDA**
É seguido um processo formal de desenvolvimento com atividades em etapas e entregas intermediárias. As tarefas são organizadas de modo a não negligenciar nenhum dos aspectos pré-acordados, e as técnicas são documentadas para garantir que uma tarefa seja executada da maneira correta.

> **PESSOAS**
Deve haver treinamento das pessoas tanto na metodologia de trabalho como no uso das ferramentas. As tarefas devem ser distribuídas por pequenas equipes, que devem trabalhar bem juntas.

> **GESTÃO**
O gerenciamento do projeto deve ser feito com rapidez. Isso é obtido através de oficinas de Planejamento de Requisitos e Design de Sistema para extrair rapidamente os requisitos dos usuários. Além disso, deve ser feita alocação de tempo fixo (**Timebox**) para entregar iterativamente o sistema para os usuários.





