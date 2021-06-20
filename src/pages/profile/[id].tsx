import { AiFillGithub, AiFillStar } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { VscFileCode } from 'react-icons/vsc';
import { GiRank2 } from 'react-icons/gi';
import { HiCode } from 'react-icons/hi';
import { GetServerSideProps } from 'next';
import {
  ProfileContainer,
  UserPicture,
  ProfileContent,
  UserSection,
  ProfileGrid,
  UserCard,
  UserDataContainer
} from './styles';
import UserChart from '../../components/UserChart';
import ProfileItem from '../../components/ProfileItem';
import { api } from '../../services/api';
import CardGrid from '../../components/Card/CardGrid';

interface ITech {
  name: string;
  id: string;
  hex_color: string;
}

interface IStat {
  id: string;
  reviews: number;
  technology: ITech;
  technology_id: string;
  user_id: string;
}

interface IUser {
  id: string;
  nickname: string;
  email: string;
  is_expert: boolean;
  picture_url: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  score: number;
  inserted_at: string;
  stats: IStat[];
}

interface ProfileProps {
  user: IUser;
  posts: any[];
}

export default function Profile({ user, posts }: ProfileProps) {
  console.log(user);
  const totalReviews = user.stats.reduce(
    (sumTotal, review) => sumTotal + review.reviews,
    0
  );

  return (
    <ProfileContainer>
      <header />
      <ProfileContent>
        <section className="profileSection">
          <UserSection>
            <UserPicture url={user.picture_url || '/defaultuserpicture.png'} />
            <div>
              <h2>{user.nickname}</h2>
              {user.is_expert && <p>EXPERT</p>}
            </div>
          </UserSection>
          <div className="navigation">
            {user.linkedin_url && (
              <a href={user.linkedin_url} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            )}
            {user.github_url && (
              <a href={user.github_url} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            )}
          </div>
        </section>

        <ProfileGrid isExpert={user.is_expert}>
          {user.is_expert && <UserChart stats={user?.stats} />}
          <UserCard className="userInfos">
            <UserDataContainer>
              <ProfileItem title="Nível" info={22} icon={<AiFillStar />} />
              <ProfileItem title="Classificação" info={2} icon={<GiRank2 />} />
              <ProfileItem
                title="Revisões"
                info={totalReviews}
                icon={<VscFileCode />}
              />
              <ProfileItem
                title="Projetos"
                info={posts.length}
                icon={<HiCode />}
              />
            </UserDataContainer>
          </UserCard>
        </ProfileGrid>

        {posts.length > 0 && (
          <>
            <h2>Projetos do usuário</h2>
            <CardGrid cards={posts} />
          </>
        )}
      </ProfileContent>
    </ProfileContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await api.get(`users/${id}`);
  const { data: postsData } = await api.get(`users/${id}/posts`);

  return {
    props: { user: data.user, posts: postsData.result }
  };
};
