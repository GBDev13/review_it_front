import { useState } from 'react';
import { FilterItemContainer } from './styles';

interface FilterItemProps {
  text: string;
  id: string;
  setCurrentItens: (params: unknown) => void;
}

export default function FilterItem({
  text,
  id,
  setCurrentItens
}: FilterItemProps) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    if (isActive) {
      setIsActive(false);
      setCurrentItens(oldItens => oldItens.filter(item => item !== id));
    } else {
      setIsActive(true);
      setCurrentItens(oldItens => [...oldItens, id]);
    }
  }

  return (
    <FilterItemContainer onClick={handleClick} isActive={isActive}>
      <p>{text}</p>
    </FilterItemContainer>
  );
}
