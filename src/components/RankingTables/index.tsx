import { RankingProps } from '../../pages/ranking';
import RankingItem from './RankingItem';
import { Container } from './styles';

function RankingTables({ ranks }: RankingProps) {
  const userPosition = {
    id: 3,
    name: 'Você',
    picture_url:
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ranking: 54,
    experience: 566
  };

  return (
    <Container>
      {ranks.map(rankItem => (
        <RankingItem key={rankItem.id} rankItem={rankItem} />
      ))}
      {/* <RankingItem rankItem={userPosition} /> */}
    </Container>
  );
}

export default RankingTables;
