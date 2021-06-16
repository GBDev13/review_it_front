import styled from 'styled-components';

export const HaveAccountLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${props => props.theme.colors.text};
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
`;
