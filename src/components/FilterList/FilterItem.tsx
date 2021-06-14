import { useState } from 'react';
import { FilterItemContainer } from './styles';

interface FilterItemProps {
  text: string;
}

export default function FilterItem({ text }: FilterItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <FilterItemContainer
      onClick={() => setIsActive(oldState => !oldState)}
      isActive={isActive}
    >
      <p>{text}</p>
    </FilterItemContainer>
  );
}
