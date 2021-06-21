import styled from 'styled-components';

interface RankingPictureProps {
  url: string;
  middle?: boolean;
}
interface RankingUserProps {
  middle?: boolean;
}

export const ReviewContainer = styled.main`
  width: 100%;
  height: 100%;

  > h1 {
    text-align: center;
    margin: 5rem 0;
  }
`;

export const RankingPictures = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  max-width: 40rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    grid-gap: 1rem;
    max-width: 90vw;
  }
`;

export const RankingUser = styled.div<RankingUserProps>`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: ${props => (props.middle ? '3rem' : '0rem')};

  > div {
    p {
      font-weight: ${props => (props.middle ? '500' : '300')};
      font-size: 2rem;
    }

    svg {
      color: ${props =>
        props.middle ? props.theme.colors.primary : props.theme.colors.text};
      margin: 0.5rem 0;
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  section {
    h1 {
      font-weight: 300;
      font-size: 1.3rem;
    }
    p {
      font-weight: 900;
      font-size: 1.3rem;
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 720px) {
    margin-bottom: ${props => (props.middle ? '2rem' : '0rem')};

    > div {
      p {
        font-weight: ${props => (props.middle ? '500' : '300')};
        font-size: 1.3rem;
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    section {
      h1 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`;

export const RankingPicture = styled.div<RankingPictureProps>`
  width: ${props => (props.middle ? '13rem' : '10rem')};
  height: ${props => (props.middle ? '13rem' : '10rem')};
  border-radius: 50%;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  margin-bottom: 0.5rem;
  box-shadow: 0px 0px 15px rgba(109, 85, 253, 0.85);
  border: 5px solid ${props => props.theme.colors.primary};

  @media (max-width: 720px) {
    width: ${props => (props.middle ? '8rem' : '5rem')};
    height: ${props => (props.middle ? '8rem' : '5rem')};
    margin-bottom: 0.5rem;
    border: 3px solid ${props => props.theme.colors.primary};
  }
`;
