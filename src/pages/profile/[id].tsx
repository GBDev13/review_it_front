import { AiFillGithub, AiFillStar } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { VscFileCode } from 'react-icons/vsc';
import { GiRank2 } from 'react-icons/gi';
import { HiCode } from 'react-icons/hi';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { TiArrowLeftThick } from 'react-icons/ti';
import { useRouter } from 'next/router';
import {
  ProfileContainer,
  UserPicture,
  ProfileContent,
  UserSection,
  ProfileGrid,
  UserCard,
  UserDataContainer
} from '../../styles/ProfileStyles';
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
  posts_amount: number;
}

interface ProfileProps {
  user: IUser;
  posts: any[];
  rank: {
    position: number;
  };
}

export default function Profile({ user, posts, rank }: ProfileProps) {
  const totalReviews = user.stats.reduce(
    (sumTotal, review) => sumTotal + review.reviews,
    0
  );

  const router = useRouter();
  return (
    <>
      <Head>
        <title>review.it | {user.nickname}</title>
      </Head>
      <ProfileContainer>
        <header>
          <TiArrowLeftThick onClick={() => router.back()} />
        </header>
        <ProfileContent>
          <section className="profileSection">
            <UserSection>
              <UserPicture
                url={user?.picture_url || '/defaultuserpicture.png'}
              />
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

          <ProfileGrid isExpert={user.is_expert && user.stats?.length > 0}>
            {user.is_expert && user.stats?.length > 0 && (
              <UserChart stats={user?.stats} />
            )}
            <UserCard className="userInfos">
              <UserDataContainer>
                <ProfileItem
                  title="Experi??ncia"
                  info={user.score}
                  icon={<AiFillStar />}
                />
                <ProfileItem
                  title="Rank do M??s"
                  info={rank?.position || null}
                  fallback="Sem rank"
                  icon={<GiRank2 />}
                />
                <ProfileItem
                  title="Revis??es"
                  info={totalReviews}
                  icon={<VscFileCode />}
                />
                <ProfileItem
                  title="Projetos"
                  info={user.posts_amount}
                  icon={<HiCode />}
                />
              </UserDataContainer>
            </UserCard>
          </ProfileGrid>

          {posts?.length > 0 && (
            <>
              <h2>Projetos do usu??rio</h2>
              <CardGrid cards={posts} />
            </>
          )}
        </ProfileContent>
      </ProfileContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await api.get(`users/${id}`);
  const { data: postsData } = await api.get(`users/${id}/posts`);
  try {
    const { data: userRank } = await api.get(`users/${id}/rank`);

    return {
      props: { user: data.user, posts: postsData.result, rank: userRank.rank }
    };
  } catch (err) {
    return {
      props: { user: data.user, posts: postsData.result, rank: null }
    };
  }
};
