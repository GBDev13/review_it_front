/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RiErrorWarningFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

import { GetStaticProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  LogoContent,
  Content,
  FieldError,
  FlexInput
} from '../styles/CreateUserStyles';
import { Input } from '../components/Input';
import FooterNavigation from '../components/FooterNavigation';
import FilterList from '../components/FilterList';
import { FileInput } from '../components/FileInput';
import { api } from '../services/api';
import { clearState, signupUser } from '../store/modules/user';
import { IState } from '../store/types';

type CreateUserData = {
  nickname: string;
  email: string;
  password: string;
  is_expert: boolean;
  picture_url?: string | null;
  technologies: String[];
  github_url?: string | null;
  linkedin_url?: string | null;
};

type Tech = {
  name: string;
  hex_color: string;
  id: string;
};

interface SignUpProps {
  techs: Tech[];
}

function InvalidEmailErrorMessage() {
  return (
    <>
      <RiErrorWarningFill />
      <span>Formato de e-mail inválido</span>
    </>
  );
}

function RequiredFieldErrorMessage() {
  return (
    <>
      <RiErrorWarningFill />
      <span>Campo obrigatório</span>
    </>
  );
}

function MinCharsErrorMessage() {
  return (
    <>
      <RiErrorWarningFill />
      <span>A senha deve ter no mínimo 8 caracteres</span>
    </>
  );
}

function InvalidURLErrorMessage() {
  return (
    <>
      <RiErrorWarningFill />
      <span>Insira uma URL válida</span>
    </>
  );
}

const schemaFormValidation = yup.object().shape({
  nickname: yup.string().required(RequiredFieldErrorMessage),
  email: yup
    .string()
    .email(InvalidEmailErrorMessage)
    .required(RequiredFieldErrorMessage),
  password: yup
    .string()
    .min(8, MinCharsErrorMessage)
    .required(RequiredFieldErrorMessage),
  is_expert: yup.boolean().nullable(),
  github_url: yup.string().url(InvalidURLErrorMessage).nullable(),
  linkedin_url: yup.string().url(InvalidURLErrorMessage).nullable()
});

export default function SignUp({ techs }: SignUpProps) {
  const [pictureUrl, setPictureUrl] = useState('');
  const [isExpert, setIsExpert] = useState(false);
  const [currentTechs, setCurrentTechs] = useState<String[]>([]);

  const dispatch = useDispatch();

  const { user } = useSelector((state: IState) => state);
  const { isSuccess, isError } = user;

  useEffect(
    () => () => {
      dispatch(clearState());
    },
    []
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
    }

    if (isError) {
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserData>({
    resolver: yupResolver(schemaFormValidation)
  });

  const handleSignIn: SubmitHandler<CreateUserData> = async data => {
    if (pictureUrl) {
      data.picture_url = pictureUrl;
    }

    if (!data.picture_url) {
      // eslint-disable-next-line no-param-reassign
      data.picture_url = null;
    }

    if (isExpert && currentTechs.length < 1) {
      toast.error('Selecione pelo menos uma tecnologia');
      return;
    }

    if (data.github_url === '') {
      data.github_url = null;
    }

    if (data.linkedin_url === '') {
      data.linkedin_url = null;
    }

    data.technologies = currentTechs;

    dispatch(signupUser(data));
  };

  return (
    <>
      <Head>
        <title>review.it | criar uma conta</title>
      </Head>

      <Container>
        <LogoContent>
          <h1>
            review<span>.it</span>
          </h1>
        </LogoContent>

        <Content>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input placeholder="Nome de usuário" {...register('nickname')} />
            <FieldError>{errors.nickname?.message}</FieldError>

            <Input placeholder="E-mail" {...register('email')} />
            <FieldError>{errors.email?.message}</FieldError>

            <Input placeholder="URL do Github" {...register('github_url')} />
            <FieldError>{errors.github_url?.message}</FieldError>

            <Input
              placeholder="URL do Linkedin"
              {...register('linkedin_url')}
            />
            <FieldError>{errors.linkedin_url?.message}</FieldError>

            <Input
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
            <FieldError>{errors.password?.message}</FieldError>

            <h2>Foto de perfil</h2>
            <FileInput setProfilePictureUrl={setPictureUrl} />

            <p>
              Expert é o usuário que ajuda os demais realizando reviews e
              gerando feedbacks
            </p>

            <FlexInput>
              <input
                type="checkbox"
                name="isExpert"
                value="true"
                id="true"
                {...register('is_expert')}
                onClick={() => setIsExpert(!isExpert)}
              />
              <label htmlFor="true">Quero ser um expert</label>
            </FlexInput>
            <FieldError>{errors.is_expert?.message}</FieldError>

            {isExpert && (
              <FilterList
                title="Tecnologias"
                techs={techs}
                setCurrentItens={setCurrentTechs}
              />
            )}

            <button type="submit">Cadastrar</button>
          </form>

          <FooterNavigation
            question="Já possui uma conta?"
            link="/login"
            linkText="Entrar"
          />
        </Content>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/technologies');
  const techs = data.technologies;

  return {
    props: { techs },
    revalidate: 60 * 30 * 24 // 48 hours
  };
};
