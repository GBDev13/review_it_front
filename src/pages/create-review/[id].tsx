/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Container, Content, FieldError } from './styles';
import Header from '../../components/Header';
import { Textarea } from '../../components/Textarea';

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

    console.log(data);
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

  console.log(id);

  return {
    props: { id }
  };
};
