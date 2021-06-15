import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 40px;
  right: 40px;
  width: 1px;
  height: 1px;

  > div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeIn 1s ease-in-out forwards;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    section {
      margin-bottom: 5rem;
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
        font-size: 1.3rem;
        cursor: pointer;
        font-weight: 300;
        padding: 0 2rem;

        & + a {
          border-top: 1px solid ${props => props.theme.colors.textSecondary};
          margin-top: 1rem;
          padding-top: 1rem;
        }
      }
    }
  }

  &::after {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};

    // screen diameter can be 142vmax at most,
    // circle needs to be twice that size to cover it
    width: 284vmax;
    height: 284vmax;
    top: -142vmax;
    left: -142vmax;

    transform: scale(0);
    transform-origin: 50% 50%;
    transition: transform 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06);

    // will-change tells the browser we plan to
    // animate this property in the near future
    will-change: transform;
  }

  ${props =>
    props.isActive &&
    css`
      &::after {
        transform: scale(1);
      }
    `}
`;
