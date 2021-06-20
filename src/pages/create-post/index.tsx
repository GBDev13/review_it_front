/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from '@hookform/resolvers/yup';
import { GetStaticProps } from 'next';
import Router from 'next/router';
import Head from 'next/head';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiErrorWarningFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import FilterList from '../../components/FilterList';

import Header from '../../components/Header';
import { Input } from '../../components/Input';
import Textarea from '../../components/Textarea';
import { api } from '../../services/api';
import { Container, Content, FieldError } from './styles';

type PostProps = {
  title: string;
  description: string;
  code_url: string;
  technologies: String[];
};

type Tech = {
  name: string;
  hex_color: string;
  id: string;
};
interface CreatePostProps {
  techs: Tech[];
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

function MinCharsTitleErrorMessage() {
  return (
    <>
      <RiErrorWarningFill />
      <span>O título deve ter no mínimo 10 caracteres</span>
    </>
  );
}

function MinCharsDescriptionErrorMessage() {
  return (
    <>
      <RiErrorWarningFill />
      <span>A descrição deve ter no mínimo 20 caracteres</span>
    </>
  );
}

const schemaFormValidation = yup.object().shape({
  title: yup
    .string()
    .min(10, MinCharsTitleErrorMessage)
    .required(RequiredFieldErrorMessage),
  description: yup
    .string()
    .min(20, MinCharsDescriptionErrorMessage)
    .required(RequiredFieldErrorMessage),
  code_url: yup
    .string()
    .url(InvalidURLErrorMessage)
    .required(RequiredFieldErrorMessage)
});

export default function CreatePost({ techs }: CreatePostProps) {
  const [currentTechs, setCurrentTechs] = useState<String[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PostProps>({
    resolver: yupResolver(schemaFormValidation)
  });

  const handlePostSubmit: SubmitHandler<PostProps> = async data => {
    if (currentTechs.length < 1) {
      toast.error('Selecione pelo menos uma tecnologia');
      return;
    }

    data.technologies = currentTechs;

    try {
      const response = await api.post('/posts', data);

      if (response.data.message === 'Post created!') {
        toast.success('Post criado com sucesso!');
        Router.push(`/post/${response.data.post.id}`);
      }
    } catch {
      toast.error('Erro ao criar o post. Tente novamente mais tarde');
    }
  };

  return (
    <>
      <Head>
        <title>review.it | criar post</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form onSubmit={handleSubmit(handlePostSubmit)}>
            <label htmlFor="title">Título do post</label>
            <Input placeholder="" id="title" {...register('title')} />
            <FieldError>{errors.title?.message}</FieldError>

            <label htmlFor="description">Descrição</label>
            <Textarea
              placeholder=""
              id="description"
              {...register('description')}
            />
            <FieldError>{errors.description?.message}</FieldError>

            <label htmlFor="code_url">URL do repositório</label>
            <Input placeholder="" id="code_url" {...register('code_url')} />
            <FieldError>{errors.code_url?.message}</FieldError>

            <FilterList
              title="Tecnologias"
              techs={techs}
              setCurrentItens={setCurrentTechs}
            />

            <button type="submit">Enviar post</button>
          </form>
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
