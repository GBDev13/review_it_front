import { lighten } from 'polished';
import styled from 'styled-components';

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 3rem 0;

  button {
    width: 9.973rem;
    height: 2.8rem;

    margin-bottom: 3rem;

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
      text-transform: uppercase;
    }

    &:first-child {
      margin-right: 2rem;
    }

    &.user {
      cursor: pointer;
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

export const ReviewButtonContainer = styled.div`
  margin: 5rem 0;

  div.star {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      transition: 0.5s;
    }

    p {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.5rem;
      transition: 0.5s;
    }

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 61.25rem;

  & + & {
    margin-top: 4.5rem;
  }

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
    text-align: justify;
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
