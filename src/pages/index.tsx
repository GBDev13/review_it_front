import React, { useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import Header from '../components/Header';
import FilterList from '../components/FilterList';
import CardGrid from '../components/Card/CardGrid';

import { HomeContainer, HomeContent } from '../styles/HomeStyles';
import { api } from '../services/api';

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
  const [currentFilters, setCurrentFilters] = useState<String[]>([]);

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
            setCurrentItens={setCurrentFilters}
          />
          <CardGrid cards={posts} />
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

  return {
    props: { techs, posts }
  };
};
