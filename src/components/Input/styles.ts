import styled, { css } from 'styled-components';

interface InputContainerProps {
  hasValue: boolean;
  hasError?: boolean;
}

export const InputContainer = styled.input<InputContainerProps>`
  background: ${props => props.theme.colors.card};
  border: 3px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  box-shadow: 0px 9px 14px 3px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.2rem;
    font-weight: 300;
  }

  ${props =>
    props.hasValue &&
    css`
      border-color: ${props.theme.colors.primary};
    `}

  ${props =>
    props.hasError &&
    css`
      border-color: ${props.theme.colors.error};
      color: ${props.theme.colors.error};

      &::placeholder {
        color: ${props.theme.colors.error};
      }
    `}
`;
