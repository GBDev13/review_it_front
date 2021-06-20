import { forwardRef, ForwardRefRenderFunction } from 'react';
import { TextareaContainer } from './styles';

interface TextareaProps {
  placeholder: string;
  id?: string;
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ placeholder, id, ...rest }, ref) => (
  <TextareaContainer
    placeholder={placeholder}
    id={id}
    {...rest}
    hasValue={false}
    ref={ref}
  />
);

export const Textarea = forwardRef(TextareaBase);
