/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RiErrorWarningFill } from 'react-icons/ri';
// import { toast } from 'react-toastify';

import React from 'react';
import {
  Container,
  LogoContent,
  Content,
  FieldError,
  FlexInput,
  GridInput
} from './styles';
import Input from '../../components/Input';
import FooterNavigation from '../../components/FooterNavigation';

type CreateUserData = {
  nickname: string;
  email: string;
  password: string;
  is_expert: boolean;
  picture_url?: string | null;
};

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

function InvalidURLErrorMessage() {
  return (
    <>
      <RiErrorWarningFill />
      <span>Insira uma URL válida</span>
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
  is_expert: yup.boolean().nullable().required(RequiredFieldErrorMessage),
  picture_url: yup.string().url(InvalidURLErrorMessage)
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserData>({
    resolver: yupResolver(schemaFormValidation)
  });

  const handleSignIn: SubmitHandler<CreateUserData> = async data => {
    if (!data.picture_url) {
      // eslint-disable-next-line no-param-reassign
      data.picture_url = null;
    }

    console.log(data);
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

            <h2>Tipo de usuário:</h2>
            <GridInput>
              <FlexInput>
                <input
                  type="radio"
                  name="isExpert"
                  value="false"
                  id="false"
                  {...register('is_expert')}
                />
                <label htmlFor="false">Padrão</label>
              </FlexInput>
              <FlexInput>
                <input
                  type="radio"
                  name="isExpert"
                  value="true"
                  id="true"
                  {...register('is_expert')}
                />
                <label htmlFor="true">Expert</label>
              </FlexInput>
            </GridInput>
            <FieldError>{errors.is_expert?.message}</FieldError>

            <Input
              placeholder="URL da foto de perfil"
              {...register('picture_url')}
            />
            <FieldError>{errors.picture_url?.message}</FieldError>
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
