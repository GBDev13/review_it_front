import CodeReviewItem from './CodeReviewItem';
import { Container } from './styles';

interface IUser {
  id: string;
  nickname: string;
  picture_url: string | null;
  score: number;
}

export interface IReviews {
  id: string;
  description: string;
  suggestions: string;
  strengths: string;
  weakness: string;
  post_id: string;
  user_id: string;
  inserted_at: string;
  user: IUser;
}

interface CodeReviewListProps {
  reviews: IReviews[];
  starReviewId: string;
}

function CodeReviewList({ reviews, starReviewId }: CodeReviewListProps) {
  return (
    <Container>
      {reviews.map(review => (
        <CodeReviewItem
          review={review}
          key={review.id}
          star={starReviewId === review.id}
        />
      ))}
    </Container>
  );
}

export default CodeReviewList;
