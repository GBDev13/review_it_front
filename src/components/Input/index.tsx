import { forwardRef, ForwardRefRenderFunction } from 'react';
import { InputContainer } from './styles';

interface InputProps {
  placeholder: string;
  type?: string;
  value?: string | number;
  id?: string;
  onChange?: (event: any) => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type = 'text', id, ...rest },
  ref
) => (
  <InputContainer
    placeholder={placeholder}
    type={type}
    id={id}
    {...rest}
    hasValue={false}
    ref={ref}
  />
);

export const Input = forwardRef(InputBase);
