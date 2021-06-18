import { InputContainer } from './styles';

interface InputProps {
  placeholder: string;
  type?: string;
  id?: string;
}

function Input({ placeholder, type = 'text', id, ...rest }: InputProps) {
  return (
    <InputContainer
      placeholder={placeholder}
      type={type}
      id={id}
      {...rest}
      hasValue={false}
    />
  );
}

export default Input;
