# Exercícios

## Branch 05-styled-components

### 1) Componente Artigo.jsx

Transforme o `<Artigo>` em um componente estilizado (dê o nome que quiser) com as seguintes configurações:

- Cor de fundo de sua preferência
- Espaçamento interno de `1rem`
- Margem superior/inferior de `0.5rem` e esquerda/direita de `0`

Faça regras adicionais para:

- Colocar uma cor e uma borda inferior no elemento `<h3>`
- Aumentar o tamanho do `<p>` para 1.1rem

#### 📢 DESAFIO

- Crie uma **Media Query** que faça os 3 componentes `<Artigo>` ficarem lado a lado se a aplicação estiver em uma tela com largura mínima de `650px`.

- Faça os ajustes necessários no HTML/JSX e no CSS (Styled) para haja um espaço entre os artigos.

### 2) Componente Rodape.jsx

Transforme o `<Rodape>` em um componente estilizado chamado `StyledRodape` com as seguintes configurações:

- Plano de fundo com gradiente/degrade de cores de sua preferência
- Altura de `30vh`
- Recursos do flex para alinhamento centralizado total

#### 📢 DESAFIO DE REFATORAÇÃO

- Separe o componente estilizado (`StyledRodape`) do componente principal (`Rodape`)

- Você pode criar dentro do `src` uma nova pasta chamada `styles`, e nela criar um arquivo `styles.js` (ou outros nomes de sua preferência)

- No arquivo `styles.js`, importe a `lib` `styled-components`, tire a `const StyledRodape` do `Rodape.jsx` e a coloque aqui no `styles.js`.

- Em seguida, exporte esta `const` sem usar `default`.

- Volte para o componente `Rodape.jsx`, substitua o import do styled-component pelo import do styles.js trazendo a const `StyledMenu`
