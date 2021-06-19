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
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 1rem;

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
`;
