import Head from 'next/head';
import React, { useEffect, useState } from 'react';
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
  ReviewContent,
  ReviewButtonContainer
} from '../../styles/ReviewStyles';
import { api } from '../../services/api';
import { IReviews } from '../../components/CodeReviewList';
import { IState } from '../../store/types';

interface ReviewProps {
  review: IReviews;
  postOwner: string;
  hasStar: string;
}

export default function Review({ review, postOwner, hasStar }: ReviewProps) {
  const [isStarred, setIsStarred] = useState(hasStar === review.id);
  const [canStar, setCanStar] = useState(false);

  const currentStared = hasStar === review.id;

  const { user } = useSelector((state: IState) => state);
  useEffect(() => {
    if (postOwner === user.id) {
      setCanStar(true);
    }
  }, []);
  const handleGiveStar = async () => {
    try {
      await api.post(`/reviews/${review.id}/star`);
      setIsStarred(true);
    } catch {
      toast.error(
        'Não foi possível dar ou remover a estrela no momento, tente mais tarde'
      );
    }
  };

  return (
    <>
      <Head>
        <title>review.it | review de {review.user.nickname}</title>
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
              <div className="user">
                <RiUser3Line />
                <span>{review.user.nickname}</span>
              </div>
            </Link>
          </InfoContainer>

          <ReviewButtonContainer>
            {canStar && !hasStar && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    handleGiveStar();
                  }}
                >
                  Dar estrela
                </button>
              </div>
            )}

            {currentStared && (
              <div className="star">
                <RiStarFill fontSize="3rem" /> <p>Premiado</p>
              </div>
            )}
          </ReviewButtonContainer>

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

  const { data } = await api.get(`/reviews/${id}`);
  const { data: postData } = await api.get(`/posts/${data.review.post_id}`);

  return {
    props: {
      review: data.review,
      postOwner: postData.post.author.id,
      hasStar: postData.post.star_review_id
    }
  };
};
