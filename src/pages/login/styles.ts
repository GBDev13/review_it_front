import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const LogoContent = styled.div`
  width: 35.5rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};

  h1 {
    font-size: 6rem;

    span {
      color: #000;
    }
  }
`;

export const Content = styled.div`
  width: 54.5rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
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

      &:first-child {
        margin-bottom: 2.375rem;
      }
    }

    button {
      width: 9.973rem;
      height: 2.8rem;

      margin-top: 2.7rem;

      border: 0;
      border-radius: 1.25rem;

      background: ${props => props.theme.colors.primary};

      font-size: 1rem;
      font-weight: 600;
      color: ${props => props.theme.colors.text};
    }
  }
`;
