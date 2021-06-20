import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 90vw;
  margin: 5rem auto;
`;

export const RankingItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    width: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    font-weight: 900;
    color: ${props => props.theme.colors.primary};
    font-size: 3.5rem;
  }

  > div {
    background: ${props => props.theme.colors.card};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5rem;
    width: 100%;

    border: 2px solid ${props => props.theme.colors.card};
    transition: 0.5s;

    &:hover {
      border-color: ${props => props.theme.colors.primary};

      > img {
        filter: brightness(1.3);
      }
    }

    > div.img {
      transition: 0.5s;
      width: 5rem;
      height: 5rem;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 1rem;
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    > section {
      padding: 0 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.75rem;

      p {
        font-weight: 300;
      }

      strong {
        font-weight: 900;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  @media (max-width: 720px) {
    > strong {
      margin-right: 1.5rem;
      font-size: 2rem;
    }

    > div {
      padding: 0.8rem;
      > section {
        padding: 0 0.5rem;
        font-size: 1rem;
      }
    }

    > div.img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
