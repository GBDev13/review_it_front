import styled, { css } from 'styled-components';

interface FilterItemContainerProps {
  isActive: boolean;
}

export const Container = styled.section`
  width: 100%;
  padding: 1.5rem;
  background: ${props => props.theme.colors.card};
  border: 3px solid ${props => props.theme.colors.border};
  border-radius: 2rem;
  margin-top: 3rem;

  h1 {
    font-weight: 500;
    font-size: 2rem;

    &::before {
      display: inline-block;
      content: '';
      height: 0.9rem;
      width: 4px;
      vertical-align: middle;
      margin-right: 0.5rem;
      background: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 550px) {
    padding: 1rem;

    h1 {
      font-size: 1rem;
    }
  }
`;

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  gap: 0.8rem;
`;

export const FilterItemContainer = styled.div<FilterItemContainerProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 300;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};

  cursor: pointer;
  transition: 0.5s;

  ${props =>
    props.isActive &&
    css`
      font-weight: 500;
      background: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.text};
    `}
`;
