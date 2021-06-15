import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html{
    @media (max-width: 1080px){
      font-size:93.75%;
    }

    @media (max-width: 720px){
      font-size:87.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
