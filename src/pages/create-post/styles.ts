import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;

  form {
    display: flex;
    height: 80vh;
    align-items: center;
    flex-direction: column;

    label {
      color: ${props => props.theme.colors.text};
      font-size: 1.5rem;
      align-self: flex-start;
      margin-bottom: 1rem;
    }

    input,
    textarea {
      width: 28.4rem;
    }

    textarea {
      height: 10rem;
      max-height: 18rem;
      resize: vertical;
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
