import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { useSelector } from 'react-redux';
import Header from '../components/Header';
import FilterList from '../components/FilterList';
import CardGrid from '../components/Card/CardGrid';

import { HomeContainer, HomeContent } from '../styles/HomeStyles';
import { api } from '../services/api';
import { setTechFilters } from '../store/modules/filters';
import { IState } from '../store/types';
import SearchInput from '../components/Header/SearchInput';

type Tech = {
  name: string;
  hex_color: string;
  id: string;
};

type Author = {
  nickname: string;
};

type CardProps = {
  title: string;
  description: string;
  inserted_at: string;
  id: string;
  author: Author;
  technologies: Tech[];
  code_url: string;
  star_review: string | null;
};
interface HomeProps {
  techs: Tech[];
  posts: CardProps[];
}

export default function Home({ techs, posts }: HomeProps) {
  const { filters } = useSelector((state: IState) => state);

  return (
    <>
      <Head>
        <title>review.it | home</title>
      </Head>

      <HomeContainer>
        <Header />
        <HomeContent>
          <FilterList
            title="Filtre por tecnologia"
            techs={techs}
            setCurrentItens={setTechFilters}
            hasRedux
            oldItem={filters.techFilters}
          />
          <SearchInput
            className="busca"
            style={{ width: '100%', marginTop: '3rem' }}
          />
          <CardGrid cards={posts} techFilters={filters.techFilters} />
        </HomeContent>
      </HomeContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseTechnologies = await api.get('/technologies');
  const techs = responseTechnologies.data.technologies;

  const responsePosts = await api.get('/posts');
  const posts = responsePosts.data.result;

  posts.sort((a, b) => {
    if (a.inserted_at > b.inserted_at) {
      return -1;
    }
    return true;
  });

  return {
    props: { techs, posts }
  };
};
