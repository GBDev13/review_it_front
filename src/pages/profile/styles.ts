import styled, { css } from 'styled-components';

interface UserPictureProps {
  url: string;
}

interface ProfileGridProps {
  isExpert: boolean;
}

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;

  header {
    background: ${props => props.theme.colors.primary};
    height: 12rem;
    width: 100%;
  }
`;

export const ProfileContent = styled.main`
  width: 100%;
  height: 100%;
  max-width: 95vw;
  margin: 0 auto;
  padding: 0 2rem;

  > h2 {
    font-size: 2rem;
    margin-top: 3rem;
  }

  > section.profileSection {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
    height: 10rem;

    div.navigation {
      a {
        svg {
          width: 2.5rem;
          height: 2.5rem;
          path {
            fill: ${props => props.theme.colors.textSecondary};
            transition: 0.5s;
          }

          &:hover {
            path {
              fill: ${props => props.theme.colors.primary};
            }
          }
        }

        & + a {
          margin-left: 0.8rem;
        }
      }
    }

    @media (max-width: 720px) {
      height: auto;
      margin-bottom: 3rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      font-size: 2rem;
    }
    p {
      margin-top: 0.5rem;
      padding: 0.3rem 0.5rem;
      border-radius: 0.3rem;
      letter-spacing: 2px;
      font-weight: 300;
      background: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    margin-bottom: 2rem;
    text-align: center;

    div {
      align-items: center;
    }
  }
`;

export const UserPicture = styled.div<UserPictureProps>`
  position: relative;
  top: -9.5rem;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  box-shadow: 0px 9px 14px 3px rgba(0, 0, 0, 0.1);
  margin-right: 1rem;

  @media (max-width: 720px) {
    margin-right: 0rem;
    position: absolute;
    top: 3.5rem;
  }
`;

export const ProfileGrid = styled.section<ProfileGridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }

  ${props =>
    !props.isExpert &&
    css`
      grid-template-columns: 1fr;
    `}
`;

export const UserCard = styled.div`
  background: ${props => props.theme.colors.card};
  border: 3px solid ${props => props.theme.colors.border};
  border-radius: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 9px 14px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 27rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }

  &.userInfos {
    height: auto;
  }
`;

export const UserDataContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
