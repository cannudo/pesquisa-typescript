# pesquisa-typescript — Pesquisa sobre TypeScript

> resumo dos resultados obtidos nas pesquisas sobre TypeScript, realizadas para um seminário da aula de Interfaces Ricas.

O projeto serve como um passo inicial para entender conceitos básicos da linguagem TypeScript.

## Pesquisadores

> Participaram e contribuiram nas pesquisas os seguintes octocats:

- [Alanis Isabelle de Oliveira Silva](https://github.com/allanisPixel);
- [Hilquias Abias Figueiredo Silva](https://github.com/HilquiasAbias);
- [Luan da Costa Redmann](https://github.com/cannudo);
- [Marcos Vinicius Góes Fernandes](https://github.com/MarVin17G).

## Assets

O repositório têm dois projetos node embutidos na pasta [src/](src/):

1. Na raiz, há o projeto gerado nos exemplos do Hello World (adiante);
1. Na pasta [src/consumindo_api/](src/consumindo_api/), há o projeto que consome a API do [json placeholder](https://jsonplaceholder.typicode.com/).

# Pesquisa

<h2>(<del>Java</del>)TypeScript: JavaScript com tipos</h2>

Segundo a W3Schools, site educacional voltado ao ensino de tecnologias web, TypeScript é JavaScript com sintaxe para tipos estáticos adicionada, sendo chamada de “superconjunto” de JavaScript. É um dos resultados do suposto amor da Microsoft pelo “open source”.

Enquanto JavaScript tem tipagem dinâmica e fraca — os tipos das variáveis podem mudar em tempo de execução e a conversão dos tipos dos dados pode ficar a cargo do interpretador —, TypeScript define regras para que o desenvolvedor não consiga atribuir um valor de tipo `x` a uma variável de tipo `y`. Isso diminui a margem para erros de lógica ou falta de atenção dos desenvolvedores.

A afirmação que trata TypeScript como um superconjunto de JavaScript significa que TypeScript compartilha da mesma base de JavaScript para sua sintaxe, mas adiciona algo a ela: o suporte a tipagem estática.

Outra característica que diferencia as duas linguagens é que TypeScript é compilada. Significa dizer que há um programa que gera um arquivo executável. Esse programa recebe um arquivo com a extensão `.ts` e devolve um arquivo com extensão `.js` no caso de sucesso.

> Os insucessos do processo de compilação podem vir, principalmente, da atribuição de um valor de um tipo diferente ao do que determinada variável foi configurada para receber. Nesse caso, o programa de compilação retorna erro e algumas IDEs, com as extensões certas, alertam sobre este erro antes mesmo da tentativa de compilação.

### Análise de código: javascript convertendo tipos
```js
let fals = 0 // typeof fals >> "number"
fals = false // typeof fals >> "boolean"
```

JavaScript não gera exceção por mudança de tipagem durante o tempo de execução.

### Análise de código: typescript dando erro de compilação

```ts
let fals: number = 0 // typeof(fals) >> "number"
fals = false // erro de compilação
```

> Este não deveria ser um ponto de interesse em uma linguagem que funciona só pra mudar a cor da página.

Não deveria mesmo. Mas o JavaScript ampliou seu terreno e foi para o backend. Talvez TypeScript possa ser bastante útil no backend — uma vez que fornece segurança reforçada contra erros de pensamento do desenvolvedor.

## Curiosidade

Os motores JavaScript não reconhecem código TypeScript. Ou seja, se o desenvolvedor tentar rodar TypeScript diretamente no Node, por exemplo, ou no console do navegador, vai receber erros. Isso porque os códigos TypeScript devem ser compilados antes da execução. No final das contas, o que o motor vai rodar será código JavaScript.

## “Hello, World!” em TypeScript

Para rodar o TypeScript, um projeto node deve ser criado:

```console
$ npm init
```

> Após a execução do comando acima, um arquivo `package.json` é gerado

Então, instale o pacote `typescript` com o NPM:

```console
cannudo@local:~$ npm install typescript --save-dev
```

> O comando acima instala o compilador `tsc` e registra sua dependência no arquivo `package.json`

Rode o seguinte comando para criar um arquivo `tsconfig.json`:

```console
cannudo@local:~$ npx tsc --init
```

> O arquivo `tsconfig.json` indica que o projeto NPM usa TypeScript

Executados os comandos anteriores, você já deve ser capaz de escrever em TypeScript e compilar arquivos com a extensão `.ts`.
Para tanto, basta criar um arquivo `.ts` na raiz do projeto.

Para fins de exemplo, criaremos um arquivo chamado `helloworld.ts`:

```console
cannudo@local:~$ touch helloworld.ts
```

E adicionaremos o seguinte código TypeScript nele:

```ts
let msg: string = "Hello, World!"
console.log(msg)
```

Então, compilaremos:

```console
cannudo@local:~$ npx tsc helloworld.ts
```

Finalmente, poderemos rodar o arquivo que o `tsc` gerou, usando o node:

```console
cannudo@local:~$ node helloworld.js
```

Saída:

> Hello, World!

## Mais informações

Para descobrir mais sobre TypeScript, aprender sobre tipos e como usar a linguagem em um projeto, visite o site [https://www.typescriptlang.org/](https://www.typescriptlang.org/).

## Fontes
- [TypeScript official site](https://www.typescriptlang.org/);
- [W3Schools](https://duckduckgo.com);
- [Wikipédia](https://pt.wikipedia.org/wiki/TypeScript).

##  Slides
- [Google Apresentações](https://docs.google.com/presentation/d/1SLd3gfY79CPHQivekRXGIF9NUGDHNtXVbBZ0c2tVqgE/edit?usp=sharing) (acesso exclusivo aos alunos do IFRN)
- [Instalando TS localmente em um projeto Node](https://docs.google.com/presentation/d/1eU608ehedxkQEOMkPzwViGISCSXLGSDMOGDxjQpWFrw/edit?usp=sharing) (acesso exclusivo aos alunos do IFRN)