import { AiFillGithub, AiFillStar } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { VscFileCode } from 'react-icons/vsc';
import { GiRank2 } from 'react-icons/gi';
import { HiCode } from 'react-icons/hi';
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

export default function Profile() {
  return (
    <ProfileContainer>
      <header />
      <ProfileContent>
        <section className="profileSection">
          <UserSection>
            <UserPicture url="https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png" />
            <div>
              <h2>Nome do Usuário</h2>
              <p>EXPERT</p>
            </div>
          </UserSection>
          <div className="navigation">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
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
