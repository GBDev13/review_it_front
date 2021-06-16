import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { VscFileCode } from 'react-icons/vsc';
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
import UserChart from './UserChart';

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
          <UserCard>
            <UserDataContainer>
              <div>
                <VscFileCode />
                <div>
                  <strong>Revisões</strong>
                  <p>250</p>
                </div>
              </div>
              <div>
                <HiCode />
                <div>
                  <strong>Projetos criados</strong>
                  <p>12</p>
                </div>
              </div>
            </UserDataContainer>
          </UserCard>
        </ProfileGrid>
      </ProfileContent>
    </ProfileContainer>
  );
}
