import { GetStaticProps } from 'next';
import { BiCrown } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import Header from '../../components/Header';
import RankingTables from '../../components/RankingTables';
import { api } from '../../services/api';
import {
  ReviewContainer,
  RankingPictures,
  RankingUser,
  RankingPicture
} from './styles';

interface IUser {
  id: string;
  nickname: string;
  picture_url: string | null;
  score: number;
}

export interface IRank {
  id: string;
  position: number;
  user: IUser;
}

export interface RankingProps {
  ranks: IRank[];
}

export default function Ranking({ ranks }: RankingProps) {
  const firstThree = ranks.slice(0, 3);

  function swapPositions(array: IRank[], a: number, b: number){
    array[a] = array.splice(b, 1, array[a])[0];
    return array;
  }
  const formattedFirstThree = swapPositions(firstThree, 0, 1)

  const restRanking = ranks.slice(3, ranks.length)

  return (
    <>
      <Header />
      <ReviewContainer>
        <h1>Ranking mensal de experts</h1>

        <RankingPictures>
          {formattedFirstThree.map((item, index) => (
            <RankingUser middle={index === 1}>
            <div>
              <p>{item.position}</p>
              {index === 1 ? <BiCrown /> : <IoIosArrowDown />}
            </div>
            <RankingPicture url={item.user.picture_url || '/defaultuserpicture.png'} />
            <section>
              <h1>{item.user.nickname}</h1>
              <p>{item.user.score} xp</p>
            </section>
          </RankingUser>
          ))}

        </RankingPictures>

        <RankingTables ranks={restRanking} />
      </ReviewContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/ranks');

  function compare(a,b) {
    return a.position < b.position;
  }

  const formatedData = data.ranks.sort(compare)

  return {
    props: { ranks: formatedData },
    revalidate: 60 * 30 * 24 // 48 hours
  };
};

