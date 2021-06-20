/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RiErrorWarningFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

import { GetStaticProps } from 'next';
import { useDispatch } from 'react-redux';
import {
  Container,
  LogoContent,
  Content,
  FieldError,
  FlexInput
} from './styles';
import { Input } from '../../components/Input';
import FooterNavigation from '../../components/FooterNavigation';
import FilterList from '../../components/FilterList';
import { FileInput } from '../../components/FileInput';
import { api } from '../../services/api';
import { signupUser } from '../../store/modules/user';

type CreateUserData = {
  nickname: string;
  email: string;
  password: string;
  is_expert: boolean;
  picture_url?: string | null;
  technologies: String[];
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
  is_expert: yup.boolean().nullable()
});

export default function SignUp({ techs }: SignUpProps) {
  const [pictureUrl, setPictureUrl] = useState('');
  const [isExpert, setIsExpert] = useState(false);
  const [currentTechs, setCurrentTechs] = useState<String[]>([]);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
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

    data.technologies = currentTechs;

    try {
      dispatch(signupUser(data));

      reset();
    } catch {
      toast.error('Erro ao criar o usuário. Tente novamente mais tarde');
    }
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
