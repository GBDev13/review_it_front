import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  RiCalendarLine,
  RiUser3Line,
  RiFileInfoLine,
  RiGitRepositoryLine,
  RiPencilLine,
  RiExternalLinkLine
} from 'react-icons/ri';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { api } from '../../services/api';
import {
  CodeReviewContainer,
  DescriptionContainer,
  InfoContainer,
  PostContainer,
  PostContent,
  RepositoryContainer
} from './styles';
import CodeReviewList, { IReviews } from '../../components/CodeReviewList';
import { IState } from '../../store/types';

type PostProps = {
  post: {
    id: string;
    title: string;
    description: string;
    code_url: string;
    inserted_at: string;
    author: {
      nickname: string;
    };
    star_review: string | null;
  };
  reviews: IReviews[];
};

export default function Post({ post, reviews }: PostProps) {
  const { user } = useSelector((state: IState) => state);

  return (
    <>
      <Head>
        <title>review.it | {post.title}</title>
      </Head>
      <PostContainer>
        <Header />

        <PostContent>
          <h1>{post.title}</h1>

          <InfoContainer>
            <div>
              <RiCalendarLine />
              <span>
                {format(new Date(post.inserted_at), 'P', {
                  locale: ptBR
                })}
              </span>
            </div>
            <div>
              <RiUser3Line />
              <span>{post.author}</span>
            </div>
          </InfoContainer>

          <DescriptionContainer>
            <h2>
              <RiFileInfoLine /> Descrição
            </h2>
            <p>{post.description}</p>
          </DescriptionContainer>

          <RepositoryContainer>
            <h2>
              <RiGitRepositoryLine /> Repositório
            </h2>

            <a href={post.code_url} target="blank">
              <span>{post.code_url}</span>
              <RiExternalLinkLine />
            </a>
          </RepositoryContainer>

          <CodeReviewContainer>
            <h2>
              <RiPencilLine /> Code Review
            </h2>

            {reviews.length > 0 ? (
              <CodeReviewList reviews={reviews} />
            ) : (
              <p>Não há code reviews para este post ainda.</p>
            )}
          </CodeReviewContainer>

          {reviews.length <= 0 && user.is_expert && (
            <button
              type="button"
              onClick={() => {
                Router.push(`/create-review/${post.id}`);
              }}
            >
              Criar Review
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              Router.push(`/review/${post.id}`);
            }}
          >
            Ver Review
          </button>
        </PostContent>
      </PostContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const { data } = await api.get(`/posts/${id}`);

  const post = {
    id: data.post.id,
    title: data.post.title,
    description: data.post.description,
    code_url: data.post.code_url,
    inserted_at: data.post.inserted_at,
    author: data.post.author.nickname,
    star_review: data.post.star_review
  };

  const { reviews } = data.post;

  return {
    props: { post, reviews }
  };
};
