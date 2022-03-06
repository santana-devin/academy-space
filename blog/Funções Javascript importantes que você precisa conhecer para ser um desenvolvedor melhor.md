# Funções Javascript importantes que você precisa conhecer para ser um desenvolvedor melhor

[link](https://dev.to/asapsonter/important-javascript-functions-you-have-to-know-to-be-a-better-developer-2if8)

#javascript
#webdev
#reagir
#iniciantes

Pessoal, hoje vou mostrar exemplos de algumas funções Javascript importantes.

### DEEP COPY (CÓPIA PROFUNDA)
JavaScript permite que você faça uma cópia profunda de um objeto convertendo-o em string e depois de volta em objeto.

Aqui está um exemplo:
```javascript
const deepCopy = (obj) => { 
JSON.parse(JSON.stringify(obj)) 
};
```
### WAIT FUNCTION (FUNÇÃO DE ESPERA)
Javascript pode fazer um envio com uma função setTimeout,
mas não retorna um objeto de promessa, dificultando o uso em funções assíncronas. Então, temos que escrever nossa própria função wait sleep.
Aqui está um exemplo:
```javascript
const wait = new Promise((resolve) => setTimeout(resolve, ms));

const asyncFunction = async() => {
    await wait(1000);
    console.log("async");

};
asyncFunction();
```

### Intersection Observer (Observador de Interseção)
Você pode verificar se um elemento está visível na viewport.
Vou fazer uso de interseçãoObserver()
para verificar se um elemento está visível na viewport.
```javascript
const callback = (entries) => {
        entries.foreach((entry) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            //enter target in dom element.
                            //e.g entry.target.classList.add('animated');
                            console.log(`${entry.target} is visible`);
                        }
                    });
                };

                const options = {
                    threshold: 1.0,
                };

                const observer = new IntersectionObserver(callback, options);
                const btn = document.getElementById('.btn');
                const bottomBtn = document.getElementById('.bottomBtn');

observer.observe(btn); 
observer.observe(bottomBtn);
```
Personalize o comportamento do observador usando o parâmetro de opção. **limiar** é o atributo mais útil.
Ele define a porcentagem do elemento que precisa estar visível na janela de visualização do gatilho do navegador.

### HIDE ELEMENTS (OCULTAR ELEMENTOS)
você pode alternar a visibilidade de um elemento usando o estilo. visiabilty e caso queira removê-lo do fluxo de renderização, você pode usar a propriedade **style.display** .
Aqui está um exemplo:
```javascript
const hideElement = (element, removeFromFlow = false) => {
    removeFromFlow
        ?
        (element.style.display = 'none') :
        (element.style.visibility = 'hidden');
}
```

### GET URL PARAMETERS (OBTER PARÂMETROS DE URL)
Pesquisa fácil de parâmetros de objetos de URL.
Aqui está um exemplo:
```javascript
const url = new URL(window.location.href);
const paramterValue = url.searchParams.get("pramaName");
console.log(paramterValue);
```

### DECTECT DEVICE TYPES (DETECTAR TIPOS DE DISPOSITIVOS)
Use **navigator.UserAgent** para detectar o dispositivo que está executando o aplicativo.
Aqui está o exemplo:
```javascript
const dectectDeviceType = () =>
    /Andriod|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    ) ?
    "mobile" :
    "desktop";
console.log(dectectDeviceType);
```

Se você não remover um elemento do fluxo de renderização, ele ficará oculto, mas seu espaço será ocupado. é muito útil ao renderizar uma longa lista de elementos.
Os elementos não visíveis podem ser testados usando **IntersectionObserver** Pode ser ocultado para fornecer um aumento de desempenho.

# Observações
___
Luke Shiru
Você pode querer atualizar alguns:

. Deep Copy: Agora você tem **[structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)** , não há necessidade de implementá-lo você mesmo.
. Aguarde: Você não precisa ter waitum valor separado, você pode apenas transformá-lo em uma função:
```javascript
const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));
```
. Ocultar elementos: Por favor, não faça assim. Idealmente, use o atributo **hidden** que é mais acessível e você pode estilizá-lo do CSS para torná-lo oculto com **visibility** ou **display**:
```javascript
const toggleHidden = element => (element.hidden = !element.hidden);
```
. Detectar tipos de dispositivos: Outra coisa a evitar. Não confie **navigator.userAgent**. É melhor usar a detecção de recursos, não a detecção de dispositivos. Você NUNCA deve se preocupar com o sistema operacional/dispositivo do usuário.

___

Lars Feldeisen

Você não deve usar JSON.stringify para clonar o objeto. Isso leva a problemas porque não pode restringir funções, símbolos etc.
```javascript
JSON.stringify({ 
    fun: () => console.log('lol'), 
    s: Symbol(), 
    u: undefined, 
    n: NaN, 
    in: Infinity
})
'{"n":null,"in":null}'
````
Basta usar lodash. Ou escreva seu próprio algoritmo de clonagem profunda. Ou ao usar o navegador, você pode usar o **structuredClone** (há alguns limites também).

