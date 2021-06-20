import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RankingProps } from '../../pages/ranking';
import { api } from '../../services/api';
import { IState } from '../../store/types';
import RankingItem from './RankingItem';
import { Container } from './styles';

function RankingTables({ ranks }: RankingProps) {
  const { user } = useSelector((state: IState) => state);

  const [loading, setLoading] = useState(false);
  const [userPosition, setUserPosition] = useState(null);

  const userIsTop = ranks.find(rank => rank.user.id === user?.id);

  useEffect(() => {
    async function getUserRank() {
      if (loading) return;
      try {
        setLoading(true);
        const { data } = await api.get(`users/${user.id}/rank`);

        setUserPosition(data.rank);
      } catch {
        return;
      } finally {
        setLoading(false);
      }
    }
    if (user?.is_expert) {
      getUserRank();
    }
  }, []);

  return (
    <Container>
      {ranks.map(rankItem => (
        <RankingItem
          key={rankItem.id}
          rankItem={rankItem}
          isMe={rankItem.user.id === user?.id}
        />
      ))}
      {!userIsTop && user?.is_expert && user?.id && (
        <RankingItem rankItem={userPosition} isMe />
      )}
    </Container>
  );
}

export default RankingTables;
