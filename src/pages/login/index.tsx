import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RiErrorWarningFill } from 'react-icons/ri';

import React from 'react';
import { Container, LogoContent, Content, FieldError } from './styles';
import Input from '../../components/Input';
import FooterNavigation from '../../components/FooterNavigation';

type SignInFormData = {
  email: string;
  password: string;
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

const schemaFormValidation = yup.object().shape({
  email: yup
    .string()
    .email(InvalidEmailErrorMessage)
    .required(RequiredFieldErrorMessage),
  password: yup.string().required(RequiredFieldErrorMessage)
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>({
    resolver: yupResolver(schemaFormValidation)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>review.it | login</title>
      </Head>

      <Container>
        <LogoContent>
          <h1>
            review<span>.it</span>
          </h1>
        </LogoContent>

        <Content>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input placeholder="E-mail" {...register('email')} />
            <FieldError>{errors.email?.message}</FieldError>

            <Input
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
            <FieldError>{errors.password?.message}</FieldError>

            <button type="submit">Entrar</button>
          </form>

          <FooterNavigation
            question="Não possui uma conta?"
            link="/create-user"
            linkText="Criar conta"
          />
        </Content>
      </Container>
    </>
  );
}
