import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import { setCurrentSearch } from '../../store/modules/filters';
import { Input } from '../Input';

export default function SearchInput({ ...rest }) {
  const [searchDisplayValue, setSearchDisplayValue] = useState('');
  const dispatch = useDispatch();

  function onChangeValue(search: string) {
    dispatch(setCurrentSearch(search));
  }

  const debouncedChange = useDebounce(onChangeValue, 500);

  function handleChangeSearch(event) {
    setSearchDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <Input
      placeholder="Buscar projetos"
      value={searchDisplayValue}
      onChange={handleChangeSearch}
      {...rest}
    />
  );
}
