import styled from 'styled-components';

interface LegendItemProps {
  color: string;
}

export const Legends = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
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
`;
