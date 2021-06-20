/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import { RiErrorWarningFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { Container, Content, FieldError } from './styles';
import Header from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { api } from '../../services/api';

interface SendReviewProps {
  description: string;
  suggestions: string;
  strengths: string;
  weakness: string;
  post_id: string;
}

interface CreateReviewProps {
  id: string;
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
  description: yup.string().required(RequiredFieldErrorMessage),
  suggestions: yup.string().required(RequiredFieldErrorMessage),
  strengths: yup.string().required(RequiredFieldErrorMessage),
  weakness: yup.string().required(RequiredFieldErrorMessage)
});

export default function CreateReview({ id }: CreateReviewProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SendReviewProps>({
    resolver: yupResolver(schemaFormValidation)
  });

  const handleReviewSubmit: SubmitHandler<SendReviewProps> = async data => {
    data.post_id = id;

    try {
      const response = await api.post('/reviews', data);
      if (response.data.message === 'Review created!') {
        toast.success('Review criado com sucesso!');
        Router.push(`/post/${response.data.review.post_id}`);
      }
    } catch (err) {
      if (err.response.data.errors.user_id[0] === 'has already been taken') {
        toast.info(
          'Você já enviou um code review para este post anteriormente'
        );
        return;
      }

      toast.error(
        'Não foi possível enviar este code review no momento. Perdão 😥'
      );
    }
  };

  return (
    <>
      <Head>
        <title>review.it | criar review</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form onSubmit={handleSubmit(handleReviewSubmit)}>
            <label htmlFor="description">Descrição</label>
            <Textarea
              placeholder=""
              id="description"
              {...register('description')}
            />
            <FieldError>{errors.description?.message}</FieldError>

            <label htmlFor="suggestions">Sugestões</label>
            <Textarea
              placeholder=""
              id="suggestions"
              {...register('suggestions')}
            />
            <FieldError>{errors.suggestions?.message}</FieldError>

            <label htmlFor="strengths">Pontos fortes</label>
            <Textarea
              placeholder=""
              id="strengths"
              {...register('strengths')}
            />
            <FieldError>{errors.strengths?.message}</FieldError>

            <label htmlFor="weakness">Pontos a melhorar</label>
            <Textarea placeholder="" id="weakness" {...register('weakness')} />
            <FieldError>{errors.strengths?.message}</FieldError>

            <button type="submit">Enviar review</button>
          </form>
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  return {
    props: { id }
  };
};
