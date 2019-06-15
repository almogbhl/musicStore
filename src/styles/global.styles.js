import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  list-style: none;
}
html {
  font-size: 62.5%;
}

:root {
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  font-family: 'Varela Round', serif
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

h1, h2, h3 {
  font-family: 'Suez One', serif;
  color: rgba(0, 0, 0, 0.85);
}

h1 {
  font-size: 2.8rem;
}


`;



export default GlobalStyle;