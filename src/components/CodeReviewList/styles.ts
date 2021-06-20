import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  cursor: pointer;
`;

export const CodeReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  & + & {
    border-top: 1px dashed
      ${props => lighten(0.05, props.theme.colors.textSecondary)};
    padding-top: 2rem;
    margin-top: 2rem;
  }

  &:hover {
    h3,
    p {
      color: ${props => props.theme.colors.primary};
    }

    img {
      filter: brightness(1.2);
    }
  }

  > p {
    margin: 0;
    font-size: 1.2rem;
    transition: 0.5s;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const CodeReviewUserInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  > div {
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
      transition: 0.5s;
    }

    > div {
      h3 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
        transition: 0.5s;
      }

      span {
        font-size: 1rem;
        font-weight: 300;
        margin: 0;
        background: ${props => props.theme.colors.primary};
        display: initial;
        padding: 0.3rem;
        border-radius: 0.3rem;
        color: ${props => props.theme.colors.text};
      }
    }

    @media (max-width: 768px) {
      img {
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
      }

      > div {
        h3 {
          font-size: 1.3rem;
        }

        span {
          font-size: 0.8rem;
          padding: 0.2rem;
          border-radius: 0.2rem;
        }
      }
    }

    @media (max-width: 420px) {
      > div {
        margin-bottom: 1rem;
      }
    }
  }

  span {
    font-weight: 300;
    color: ${props => props.theme.colors.textSecondary};
  }
`;
