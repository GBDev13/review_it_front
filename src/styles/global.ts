import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: ${({ theme }) => lighten(0.08, theme.colors.primary)};
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.colors.textSecondary};
      border-radius: 10px;
    }
  }

  html{
    @media (max-width: 1080px){
      font-size:93.75%;
    }

    @media (max-width: 720px){
      font-size:87.5%;
    }
  }

  body, textarea {
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
