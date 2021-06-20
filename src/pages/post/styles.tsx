import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 3rem 0;

  h1 {
    font-size: 4rem;
    width: 61.25rem;
  }

  @media (max-width: 980px) {
    margin: 2rem 0;

    h1 {
      width: 90vw;
    }
  }

  @media (max-width: 500px) {
    h1 {
      width: 80vw;
      font-size: 3rem;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  width: 61.25rem;
  flex-direction: row;
  align-items: flex-start;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.textSecondary};

    span {
      margin-left: 0.25rem;
    }

    &:first-child {
      margin-right: 2rem;
    }
  }

  @media (max-width: 980px) {
    width: 90vw;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 500px) {
    width: 80vw;

    div {
      font-size: 1.2rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 61.25rem;

  margin-top: 4.5rem;

  h2 {
    font-size: 2.8rem;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;

    svg {
      margin-right: 1.5rem;
    }
  }

  p {
    font-size: 2rem;
    margin-top: 2.8rem;
  }

  @media (max-width: 980px) {
    width: 90vw;
  }

  @media (max-width: 500px) {
    width: 80vw;

    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.6rem;
      margin-top: 2rem;
    }
  }
`;

export const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 61.25rem;

  margin-top: 5rem;

  h2 {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;

    svg {
      margin-right: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    padding: 1.75rem 3rem;
    border: 3px solid ${props => props.theme.colors.border};
    border-radius: 0.75rem;
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.colors.card};
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 2.8rem;
  }

  @media (max-width: 980px) {
    width: 90vw;
  }

  @media (max-width: 500px) {
    width: 80vw;

    h2 {
      font-size: 2.4rem;
    }

    a {
      padding: 1rem;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 380px) {
    a {
      padding: 1rem;
      font-size: 1rem;
    }
  }
`;

export const CodeReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 61.25rem;

  margin-top: 5rem;

  h2 {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;

    svg {
      margin-right: 1.5rem;
    }
  }

  p {
    font-size: 2rem;
    margin-top: 2.8rem;
  }

  @media (max-width: 980px) {
    width: 90vw;
  }

  @media (max-width: 500px) {
    width: 80vw;

    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.6rem;
      margin-top: 2rem;
    }
  }
`;
