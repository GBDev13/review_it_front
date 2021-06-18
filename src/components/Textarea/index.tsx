import { TextareaContainer } from './styles';

interface TextareaProps {
  placeholder: string;
  id?: string;
}

export default function Textarea({ placeholder, id, ...rest }: TextareaProps) {
  return (
    <TextareaContainer
      placeholder={placeholder}
      id={id}
      {...rest}
      hasValue={false}
    />
  );
}
