import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import Header from '../components/Header';
import FilterList from '../components/FilterList';
import CardGrid from '../components/Card/CardGrid';
import MobileMenu from '../components/MobileMenu';

import { HomeContainer, HomeContent } from '../styles/HomeStyles';
import { api } from '../services/api';

type Tech = {
  name: string;
  hex_color: string;
  id: string;
};
interface HomeProps {
  techs: Tech[];
}

export default function Home({ techs }: HomeProps) {
  return (
    <>
      <Head>
        <title>review.it | home</title>
      </Head>

      <HomeContainer>
        <MobileMenu />
        <Header />
        <HomeContent>
          <FilterList title="Filtre por tecnologia" techs={techs} />
          <CardGrid />
        </HomeContent>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/technologies');
  const techs = data.technologies;

  return {
    props: { techs },
    revalidate: 60 * 30 * 24 // 48 hours
  };
};
