import styled from 'styled-components';

interface LegendItemProps {
  color: string;
}

export const Legends = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;

  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const LegendItem = styled.li<LegendItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    background: ${props => props.color};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  & + & {
    margin-top: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    > div {
      width: 0.8rem;
      height: 0.8rem;
    }
    & + & {
      margin-top: 0rem;
    }
  }
`;
