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
}

interface ProfileProps {
  user: IUser;
}

export default function Profile({ user }: ProfileProps) {
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

        <ProfileGrid>
          <UserChart />
          <UserCard className="userInfos">
            <UserDataContainer>
              <ProfileItem title="Nível" info={22} icon={<AiFillStar />} />
              <ProfileItem title="Classificação" info={2} icon={<GiRank2 />} />
              <ProfileItem title="Revisões" info={250} icon={<VscFileCode />} />
              <ProfileItem title="Projetos" info={12} icon={<HiCode />} />
            </UserDataContainer>
          </UserCard>
        </ProfileGrid>
      </ProfileContent>
    </ProfileContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await api.get(`users/${id}`);
  return {
    props: { user: data.user }
  };
};
