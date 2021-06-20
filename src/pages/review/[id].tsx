import Head from 'next/head';
import React, { useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  RiCalendarLine,
  RiFileInfoLine,
  RiQuestionAnswerLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiUser3Line,
  RiStarFill
} from 'react-icons/ri';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import {
  FeedbackContainer,
  InfoContainer,
  ReviewContainer,
  ReviewContent
} from './styles';
import { api } from '../../services/api';
import { IReviews } from '../../components/CodeReviewList';
import { IState } from '../../store/types';

interface ReviewProps {
  review: IReviews;
  postOwner: string;
}

export default function Review({ review, postOwner }: ReviewProps) {
  const [isStarred, setIsStarred] = useState(false);
  const [canStar, setCanStar] = useState(false);

  const { user } = useSelector((state: IState) => state);

  if (postOwner === user.id) {
    setCanStar(true);
  }

  const handleGiveStar = async () => {
    try {
      await api.post(`/reviews/${review.id}/star`);
      setIsStarred(!isStarred);
    } catch {
      toast.error(
        'Não foi possível dar uma estrela no momento, tente mais tarde'
      );
    }
  };

  return (
    <>
      <Head>
        <title>review.it | review</title>
      </Head>
      <ReviewContainer>
        <Header />

        <ReviewContent>
          <InfoContainer>
            <div>
              <RiCalendarLine />
              <span>
                {format(new Date(review.inserted_at), 'P', {
                  locale: ptBR
                })}
              </span>
            </div>

            <Link href={`/profile/${review.user_id}`}>
              <div>
                <RiUser3Line />
                <span>{review.user.nickname}</span>
              </div>
            </Link>
          </InfoContainer>

          {canStar && (
            <div>
              <button
                type="button"
                onClick={() => {
                  handleGiveStar();
                }}
              >
                {!isStarred ? 'Dar estrela' : 'Retirar estrela'}
              </button>
            </div>
          )}

          {isStarred && <RiStarFill fontSize="3rem" />}

          <FeedbackContainer>
            <h2>
              <RiFileInfoLine /> Descrição
            </h2>
            <p>{review.description}</p>
          </FeedbackContainer>

          <FeedbackContainer>
            <h2>
              <RiQuestionAnswerLine /> Sugestões
            </h2>

            <p>{review.suggestions}</p>
          </FeedbackContainer>

          <FeedbackContainer>
            <h2>
              <RiArrowUpSLine /> Pontos fortes
            </h2>
            <p>{review.strengths}</p>
          </FeedbackContainer>

          <FeedbackContainer>
            <h2>
              <RiArrowDownSLine /> Pontos a melhorar
            </h2>
            <p>{review.weakness}</p>
          </FeedbackContainer>
        </ReviewContent>
      </ReviewContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const { data } = await api.get(`/posts/${id}`);

  const { reviews } = data.post;
  const review = reviews[0];

  const postOwner = data.post.author.id;

  return {
    props: { review, postOwner }
  };
};
