import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';
import { IReviews } from '.';
import { CodeReviewContainer, CodeReviewUserInfos } from './styles';

interface CodeReviewProps {
  review: IReviews;
}

export default function CodeReviewItem({ review }: CodeReviewProps) {
  const formattedDate = format(new Date(review.inserted_at), 'P', {
    locale: ptBR
  });

  return (
    <CodeReviewContainer>
      <CodeReviewUserInfos>
        <div>
          <img src={review?.user?.picture_url || '/defaultuserpicture.png'} />
          <div>
            <h3>{review.user.nickname}</h3>
            <span>EXPERT</span>
          </div>
        </div>
        <span>{formattedDate}</span>
      </CodeReviewUserInfos>
      <p>{review.description}</p>
    </CodeReviewContainer>
  );
}
