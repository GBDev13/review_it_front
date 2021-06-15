import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import FilterList from '../components/FilterList';
import CardGrid from '../components/Card/CardGrid';
import MobileMenu from '../components/MobileMenu';

import { HomeContainer, HomeContent } from '../styles/HomeStyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>review.it | home</title>
      </Head>

      <HomeContainer>
        <MobileMenu />
        <Header />
        <HomeContent>
          <FilterList />
          <CardGrid />
        </HomeContent>
      </HomeContainer>
    </>
  );
}
