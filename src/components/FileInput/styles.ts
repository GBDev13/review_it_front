import { lighten } from 'polished';
import styled from 'styled-components';

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.card};

    color: ${props => props.theme.colors.primary};
    font-size: 3.125rem;

    border: 3px solid ${props => props.theme.colors.border};
    border-radius: 0.75rem;

    width: 7.5rem;
    height: 6.25rem;

    cursor: pointer;

    transition: 0.8s;
    &:hover {
      background: ${props => lighten(0.05, props.theme.colors.card)};
    }
  }
`;
