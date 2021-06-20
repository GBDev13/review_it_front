import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 3rem 0;

  form {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;

    label {
      color: ${props => props.theme.colors.text};
      font-size: 1.5rem;
      align-self: flex-start;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    input,
    textarea {
      width: 60vw;
    }

    textarea {
      height: 10rem;
      max-height: 18rem;
      resize: vertical;
    }

    section {
      max-width: 28.4rem;
      margin-top: 1rem;
      margin-bottom: 3rem;
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

    @media (max-width: 800px) {
      justify-content: space-around;

      input,
      textarea {
        margin: 0;
      }
    }

    @media (max-width: 500px) {
      width: 80vw;

      label {
        font-size: 1.3rem;
      }
      input,
      textarea,
      section {
        width: 80vw;
      }
    }
  }
`;

export const FieldError = styled.div`
  display: flex;
  align-items: center;

  align-self: flex-start;

  color: ${props => props.theme.colors.error};

  font-size: 1.2rem;

  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  span {
    margin-left: 0.7rem;
  }
`;
