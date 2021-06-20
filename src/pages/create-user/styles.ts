import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const LogoContent = styled.div`
  width: 100%;
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
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
    width: 50%;

    input {
      margin: 1rem 0;
    }

    h2 {
      margin-top: 1rem;
    }

    label {
      width: 100%;

      &:first-child {
        min-width: 28.5rem;
        height: 9rem;
        margin-top: 1.5rem;
      }
    }

    p {
      margin-top: 2rem;
      font-size: 1.8rem;
    }

    button {
      margin-top: 4rem;
      border-radius: 1.25rem;
      border: none;
      padding: 1rem 3rem;
      width: 10rem;

      align-self: center;

      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.text};

      font-size: 1rem;
      font-weight: 600;

      &:hover {
        background: ${props => lighten(0.08, props.theme.colors.primary)};
      }
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
  width: 30rem;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    justify-content: center;
    margin-left: 0.5rem;
  }

  input[type='checkbox'] {
    display: none;
  }

  label {
    position: relative;

    color: ${props => props.theme.colors.text};
    font-size: 1.125rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  label:before {
    content: '';

    width: 2rem;
    height: 2rem;

    border: 0.35rem solid ${props => props.theme.colors.border};
    border-radius: 20%;

    background: ${props => props.theme.colors.card};

    margin-right: 1rem;
  }

  input[type='checkbox']:checked + label:before {
    width: 1.25rem;
    height: 1.25rem;
    border: 0.75rem solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.card};
  }
`;
