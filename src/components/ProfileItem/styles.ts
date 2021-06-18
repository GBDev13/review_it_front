import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.highlight};
  border-radius: 2rem;
  box-shadow: 0px 9px 14px 3px rgba(0, 0, 0, 0.1);

  > div {
    strong {
      color: ${props => props.theme.colors.textSecondary};
      font-weight: 300;
    }

    p {
      margin: 0;
      font-weight: 900;
      font-size: 4.5rem;
    }
  }

  svg {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;

    path {
      fill: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 1500px) {
    padding: 1rem;

    > div {
      strong {
        font-size: 0.9rem;
      }

      p {
        font-size: 3rem;
      }
    }

    svg {
      width: 3rem;
      height: 3rem;
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 450px) {
    > div {
      strong {
        font-size: 0.8rem;
      }

      p {
        font-size: 2rem;
      }
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
