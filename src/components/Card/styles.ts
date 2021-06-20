import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1rem;

  background: ${props => props.theme.colors.card};

  border: 3px solid ${props => props.theme.colors.border};
  border-radius: 1.875rem;
  transition: 0.5s;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textSecondary};

    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    h1 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const TechContainer = styled.div`
  display: flex;
  width: 100%;

  div {
    display: flex;

    align-items: center;
    justify-content: center;

    min-width: 3.75rem;
    height: 1.375rem;

    padding: 0 1%;

    background: ${props => props.theme.colors.primary};

    margin-top: 0.5rem;
    margin-right: 0.375rem;

    font-size: 0.625rem;

    border-radius: 0.25rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 1.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textSecondary};

    span {
      margin-left: 0.25rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CardGridContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
