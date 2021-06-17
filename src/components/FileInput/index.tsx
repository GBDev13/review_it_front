/* eslint-disable jsx-a11y/label-has-associated-control */
import { IoMdAdd } from 'react-icons/io';
import { FileInputContainer } from './styles';

export function FileInput() {
  return (
    <FileInputContainer>
      <label htmlFor="profile_picture">
        <IoMdAdd />
      </label>
      <input type="file" id="profile_picture" />
    </FileInputContainer>
  );
}
