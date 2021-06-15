import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1045px) {
    grid-template-columns: 1fr;

    grid-template-rows: 1fr 3fr;
  }
  @media (max-width: 500px) {
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 380px) {
    grid-template-rows: 0.5fr 1fr;
  }
`;

export const LogoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};

  h1 {
    font-size: 6rem;

    span {
      color: #000;
    }
    @media (max-width: 380px) {
      font-size: 4rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    height: 35rem;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    input {
      width: 28.4rem;
      height: 3.5rem;

      background: ${props => props.theme.colors.card};

      border: 3px solid ${props => props.theme.colors.border};
      border-radius: 0.75rem;

      padding: 1rem;

      font-size: 1.25rem;
      font-weight: 600;
      color: ${props => props.theme.colors.textSecondary};

      ::placeholder {
        font-size: 1.25rem;
        color: ${props => props.theme.colors.textSecondary};
        font-weight: 400;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 3rem 3rem 3rem 3rem
          ${props => props.theme.colors.card} inset;
        -webkit-text-fill-color: ${props => props.theme.colors.textSecondary};
      }
    }

    div {
      align-self: flex-start;
    }

    button {
      width: 9.973rem;
      height: 2.8rem;

      border: 0;
      border-radius: 1.25rem;

      background: ${props => props.theme.colors.primary};

      font-size: 1rem;
      font-weight: 600;
      color: ${props => props.theme.colors.text};

      transition: 0.5s;

      &:hover {
        background: ${props => lighten(0.08, props.theme.colors.primary)};
      }
    }
  }
  @media (max-width: 500px) {
    padding: 0 2rem;

    form {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
  @media (max-width: 380px) {
    form button {
      width: 100%;
    }
  }
`;

export const FieldError = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.error};

  font-size: 1.2rem;

  span {
    margin-left: 0.7rem;
  }
`;

export const FlexInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;

  input[type='radio'] {
    width: 1.5rem;
    margin-right: 1rem;
  }
`;

export const GridInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  margin: 0 auto;
`;
