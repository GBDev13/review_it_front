import { lighten } from 'polished';
import styled from 'styled-components';

interface UserProfileProps {
  url: string;
}

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 400;
      font-size: 4rem;
      margin-right: 5rem;
      cursor: pointer;

      span {
        color: ${props => props.theme.colors.primary};
      }
    }

    > section {
      display: flex;
      align-items: center;
    }
  }

  svg.mobileMenu {
    display: none;
  }

  @media (max-width: 1100px) {
    > div h1 {
      font-size: 2rem;
    }

    > div > section input {
      display: none;
    }
  }
  @media (max-width: 650px) {
    > div h1 {
      margin-right: 0;
    }
    > div > section > nav {
      display: none;
    }
    svg.mobileMenu {
      display: block;
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
      cursor: pointer;
      path {
        fill: ${props => props.theme.colors.textSecondary};
        transition: 0.5s;
      }

      &:hover {
        path {
          fill: ${props => lighten(0.06, props.theme.colors.textSecondary)};
        }
      }
    }
  }
`;

export const NavLinkContainer = styled.a<NavLinkProps>`
  background: ${props =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.card};
  border: 3px solid
    ${props =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.border};
  transition: 0.5s;
  padding: 0.5rem 1rem;
  color: ${props =>
    props.isActive
      ? props.theme.colors.text
      : props.theme.colors.textSecondary};
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${props =>
      lighten(
        0.08,
        props.isActive ? props.theme.colors.primary : props.theme.colors.card
      )};
    border-color: ${props =>
      lighten(
        0.08,
        props.isActive ? props.theme.colors.primary : props.theme.colors.border
      )};
  }

  & + & {
    margin-left: 1.5rem;
  }
`;

export const UserProfile = styled.div<UserProfileProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0 1.8rem;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: brightness(1.3);
  }

  @media (max-width: 650px) {
    margin: 0 1rem;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

export const LogoutContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  svg {
    width: 2.5rem;
    height: 2.5rem;
    transition: 0.5s;
    cursor: pointer;
  }

  &:hover {
    color: ${props => lighten(0.05, props.theme.colors.textSecondary)};
  }

  @media (max-width: 650px) {
    width: 2rem;
    height: 2rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const LogInButtonContainer = styled.div`
  margin-left: 1rem;
  button {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border: none;
    padding: 1rem;
    font-weight: 300;
    border-radius: 0.5rem;
    height: 100%;
    transition: 0.5s;
  }

  &:hover {
    button {
      background: ${props => lighten(0.08, props.theme.colors.primary)};
    }
  }

  @media (max-width: 360px) {
    display: none;
  }
`;
