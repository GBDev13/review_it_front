import React from 'react';
import {
  RiCalendarLine,
  RiUser3Line,
  RiFileInfoLine,
  RiGitRepositoryLine,
  RiPencilLine,
  RiExternalLinkLine
} from 'react-icons/ri';
import Header from '../../components/Header';
import {
  CodeReviewContainer,
  DescriptionContainer,
  InfoContainer,
  PostContainer,
  PostContent,
  RepositoryContainer
} from './styles';

export default function Post() {
  return (
    <PostContainer>
      <Header />

      <PostContent>
        <h1>refactored-enigma</h1>

        <InfoContainer>
          <div>
            <RiCalendarLine />
            <span>19/06/2021</span>
          </div>
          <div>
            <RiUser3Line />
            <span>Fulano de tal</span>
          </div>
        </InfoContainer>

        <DescriptionContainer>
          <h2>
            <RiFileInfoLine /> Descrição
          </h2>
          <p>
            Gostaria de uma revisão a respeito do aspecto xpto, mais
            precisamento nos módulos rxc, msd, oeç.
          </p>
        </DescriptionContainer>

        <RepositoryContainer>
          <h2>
            <RiGitRepositoryLine /> Repositório
          </h2>

          <a
            href="https://github.com/viniciusoliveiras/viniciusoliveiras"
            target="blank"
          >
            <span>https://github.com/viniciusoliveiras/viniciusoliveiras</span>
            <RiExternalLinkLine />
          </a>
        </RepositoryContainer>

        <CodeReviewContainer>
          <h2>
            <RiPencilLine /> Code Review
          </h2>

          <p>Não há code reviews para este post ainda.</p>
        </CodeReviewContainer>
      </PostContent>
    </PostContainer>
  );
}
