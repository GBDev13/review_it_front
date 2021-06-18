/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, SetStateAction, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdPhotoCamera } from 'react-icons/md';
import { toast } from 'react-toastify';
import axios from 'axios';

import { FileInputContainer, FileAddedContainer } from './styles';

type ProfilePicture = {
  name: string;
};

type FileInputProps = {
  setProfilePictureUrl: Dispatch<SetStateAction<string>>;
};

export function FileInput({ setProfilePictureUrl }: FileInputProps) {
  const [selectPicture, setSelectPicture] = useState<ProfilePicture>();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const onChangeHandler = async event => {
    setSelectPicture(event.target.files[0]);
    setIsFilePicked(true);

    const formData = new FormData();

    formData.append('file', event.target.files[0]);

    try {
      const response = await axios.post(
        'http://localhost:4000/ap/files',
        formData
      );

      setProfilePictureUrl(response.data.response.image_url);
    } catch {
      toast.error(
        'Erro ao obter uma URL para a foto. Por favor tente novamente mais tarde'
      );
    }
  };

  return (
    <FileInputContainer>
      <label htmlFor="profile_picture">
        {isFilePicked ? (
          <FileAddedContainer>
            <MdPhotoCamera fontSize="2rem" />
            <p>{selectPicture.name}</p>
          </FileAddedContainer>
        ) : (
          <IoMdAdd />
        )}
      </label>
      <input type="file" id="profile_picture" onChange={onChangeHandler} />
    </FileInputContainer>
  );
}
