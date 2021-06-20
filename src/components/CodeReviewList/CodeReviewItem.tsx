import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { AiFillStar } from 'react-icons/ai';
import { IReviews } from '.';
import { CodeReviewContainer, CodeReviewUserInfos } from './styles';

interface CodeReviewProps {
  review: IReviews;
  star: boolean;
}

export default function CodeReviewItem({ review, star }: CodeReviewProps) {
  const formattedDate = format(new Date(review.inserted_at), 'P', {
    locale: ptBR
  });

  const router = useRouter();

  return (
    <CodeReviewContainer onClick={() => router.push(`/review/${review.id}`)}>
      <CodeReviewUserInfos>
        <div>
          <img src={review?.user?.picture_url || '/defaultuserpicture.png'} />
          <div>
            <h3>{review.user.nickname}</h3>
            <span>EXPERT</span>
          </div>
        </div>
        <div>
          <span>{formattedDate}</span>
          {star && <AiFillStar />}
        </div>
      </CodeReviewUserInfos>
      <p>{review.description}</p>
    </CodeReviewContainer>
  );
}
