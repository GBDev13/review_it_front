import { IRank } from '../../pages/ranking';
import { RankingItemContainer } from './styles';

interface RankingItemProps {
  rankItem: IRank;
}

export default function RankingItem({ rankItem }: RankingItemProps) {
  return (
    <RankingItemContainer>
      <strong>{rankItem.position}</strong>
      <div>
        <div className="img">
          <img
            src={rankItem.user.picture_url || '/defaultuserpicture.png'}
            alt={rankItem.user.nickname}
          />
        </div>
        <section>
          <p>{rankItem.user.nickname}</p>
          <strong>{rankItem.user.score} xp</strong>
        </section>
      </div>
    </RankingItemContainer>
  );
}
