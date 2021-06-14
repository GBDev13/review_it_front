import { InputContainer } from './styles';

interface InputProps {
  placeholder: string;
  type?: string;
}

function Input({ placeholder, type = 'text', ...rest }: InputProps) {
  return (
    <InputContainer
      placeholder={placeholder}
      type={type}
      {...rest}
      hasValue={false}
    />
  );
}

export default Input;
