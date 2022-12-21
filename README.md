# pesquisa-typescript — Pesquisa sobre TypeScript

> resumo dos resultados obtidos, para posterior apresentação na aula de Interfaces Ricas

<h2>(<del>Java</del>)TypeScript: JavaScript com tipos</h2>
Segundo a W3Schools — site educacional voltado ao ensino de tecnologias web —, TypeScript é JavaScript com sintaxe para tipos estáticos adicionada. É um dos resultados do suposto amor da Microsoft pelo “open source”.

Enquanto o JavaScript puro tem tipagem dinâmica — os tipos das variáveis podem mudar em tempo de execução — e fraca — a conversão de dados pode ficar a cargo do interpretador —, TypeScript inverte os estilos e lança exceções quando essas regras são quebradas.

É dito que o TypeScript é um superconjunto de JavaScript. Significa dizer que TypeScript compartilha da mesma base para sua sintaxe, mas adiciona algo a ela: o suporte a tipagem estática.


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

Não deveria mesmo. Mas o JavaScript ampliou seu terreno e foi para o backend. Dessa forma, TypeScript pode ser bastante útil no backend — uma vez que fornece segurança reforçada contra erros de pensamento do desenvolvedor.

> Qualquer código válido em JavaScript, é válido também em TypeScript. O inverso, porém, é falso, pois o código TypeScript deve ser compilado e transpilado para JavaScript. Ou seja, no final das contas, o browser e os outros motores feitos para rodar JavaScript, têm que apenas rodar JavaScript.

#### Conclusão
Nesse sentido, qualquer código válido em JavaScript, é válido também em TypeScript. O inverso, porém, é falso, pois o código TypeScript deve ser compilado e transpilado para JavaScript. Ou seja, no final das contas, o browser e os outros motores feitos para rodar JavaScript, têm que apenas rodar JavaScript.

## “Hello, World!” em TypeScript

Para rodar o TypeScript, um projeto node deve ser criado:

```bash
$ npm init
```

> Após a execução do comando acima, um arquivo `package.json` é gerado

Então, instale o pacote `typescript` com o NPM:

```bash
$ npm install typescript --save-dev
```

> O comando acima instalará o compilador `tsc` e registrará a dependência no `package.json`

Rode o seguinte comando para criar um arquivo `tsconfig.json`:

```bash
$ npx tsc --init
```

> O arquivo `tsconfig.json` indica que o projeto NPM usa TypeScript

Executados os comandos anteriores, você já deve ser capaz de escrever em TypeScript e compilar arquivos com a extensão `.ts`.
Para tanto, basta criar um arquivo `.ts` na raiz do projeto.

Para fins de exemplo, criaremos um arquivo chamado `helloworld.ts`:

```bash
$ touch helloworld.js
```

E adicionaremos o seguinte código TypeScript nele:

```ts
let msg: string = "Hello, World!"
console.log(msg)
```

E o compilaremos (transpilaremos para JavaScript):

```bash
$ npx tsc helloworld.ts
```

Finalmente, poderemos rodar o arquivo que o `tsc` gerou, usando o node:

```sh
$ node helloworld.js
Hello, World!
```
Saída:

> Hello, World!

## Fontes
- [TypeScript: JavaScript With Syntax For Types](https://www.typescriptlang.org/);
- [W3Schools](https://duckduckgo.com);
- [Wikipédia](https://pt.wikipedia.org/wiki/TypeScript).

##  Slides
- [Google Apresentações](https://docs.google.com/presentation/d/1SLd3gfY79CPHQivekRXGIF9NUGDHNtXVbBZ0c2tVqgE/edit?usp=sharing) (acesso exclusivo aos alunos do IFRN)

## Integrantes
- [Alanis Isabelle de Oliveira Silva](https://github.com/allanisPixel);
- [Hilquias Abias Figueiredo Silva](https://github.com/HilquiasAbias);
- [Luan da Costa Redmann](https://github.com/cannudo);
- [Marcos Vinicius Góes Fernandes](https://github.com/MarVin17G).