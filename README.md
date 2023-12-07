# Fundamentos de React

## 00-projeto-resetado

## Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx

JSX -> HTML + JS para criar componentes

App.jsx (Componente PRINCIPAL)
main.jsx (Inicialização do React)
index.html (elemento raiz e chamada do script)

---

## 04-estilos

### CSS in JS
- CSS inline: aplicado via atributo **style** da tag usando sintaxe JS, ou seja, objetos com propriedades.
- CSS externo e global usando arquivo.css e importando no main.jsx
- CSS Module: arquivo CSS especial relacionado ao componente que desejamos estilizar. Normalmente, nomeia-se o arquivo como "NomeComponente.module.css". A vantagem de usar CSS Modules é criar um escopo de estilização evitando conflitos de classes com mesmo nome.

---

## 05-styled-components

Biblioteca (ou lib) muito comum para estilização CSS in JS de componentes.
Para instalação, execute: `npm install styled-components`
Para utilização, crie componentes estilizados usando a sintaxe:

```javascript
const StyledNome = styled.tag`
propriedadecss: valorDaPropriedade;
propriedadecss: valorDaPropriedade;
`;
```

---

## 06-props

São parâmetros/argumentos cin valores/expressões React, normalmente usados para injeção de dados dinâmicos. As `props` funcionam como objetos, e cada `prop` criada por você passar a ter propriedades deste objeto.

As `props` são criadas manualmente, embora também exista uma `prop` especial chamada `children` que permite ler/transmitir o conteúdo que fica entre as tags de abertura/fechamento de um componente.

---

## 09-gerenciamento-de-estados-dos-componentes

`Estados` ou `State` é uma propriedade especial de um componente que pode ser alterada ao longo do tempo. Por exemplo, um componente que exibe um contador de **likes** precisa de um gerenciamento de `states` para controlar a quantidade de **likes** recebidos.

O uso de `states` permite ao React ao React reagir ás mudanças de renderização dos componentes.

## Exemplos de mundanças que podem ser gerenciadas por states

- Captura de dados de formulário
- Visibilidade de compontentes
- Filtros e buscas de dados
- Temas/estilos
- Pontuação/vida de um jogador
---

## 11-navegacao-usando rotas

O React suporta a navegação/links como Single Page Application (SPA) usando uma biblioteca adicional chamada **React Router DOM**.

Portanto, é necessário instalar esta dependência:

`npm install react-router-dom`

---