import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Quicksand';
  src: url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap') format('tff');
}

@font-face {
  font-family: 'Roboto';
  src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap') format('tff');
}

body {
  font-family: 'Roboto', sans-serif;
}
`;

export default FontStyles;
