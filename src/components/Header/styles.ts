import { lighten } from 'polished';
import styled from 'styled-components';

interface UserProfileProps {
  url: string;
}

interface NavLinkProps {
  isActive: boolean;
}

interface NotificationProps {
  hasNotification: boolean;
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

      span {
        color: ${props => props.theme.colors.primary};
      }
    }

    > section {
      display: flex;
      align-items: center;
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
`;

export const NotificationContainer = styled.div<NotificationProps>`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    transition: 0.5s;
    cursor: pointer;

    path {
      fill: ${props =>
        props.hasNotification
          ? props.theme.colors.primary
          : props.theme.colors.textSecondary};
      transition: 0.5s;
    }

    &:hover {
      width: 3rem;
      height: 3rem;

      path {
        fill: ${props =>
          props.hasNotification
            ? lighten(0.05, props.theme.colors.primary)
            : lighten(0.05, props.theme.colors.textSecondary)};
      }
    }
  }
`;
