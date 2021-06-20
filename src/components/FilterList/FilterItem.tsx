import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterItemContainer } from './styles';

interface FilterItemProps {
  text: string;
  id: string;
  setCurrentItens: (params: unknown) => void;
  hasRedux?: boolean;
  oldItem?: any;
}

export default function FilterItem({
  text,
  id,
  setCurrentItens,
  oldItem,
  hasRedux
}: FilterItemProps) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  function handleReduxClick() {
    if (isActive) {
      setIsActive(false);
      dispatch(setCurrentItens(oldItem.filter(item => item !== id)));
    } else {
      setIsActive(true);
      dispatch(setCurrentItens([...oldItem, id]));
    }
  }

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
    <FilterItemContainer
      onClick={hasRedux ? handleReduxClick : handleClick}
      isActive={isActive}
    >
      <p>{text}</p>
    </FilterItemContainer>
  );
}
