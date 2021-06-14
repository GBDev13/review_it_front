import Header from '../components/Header';
import { HomeContainer, HomeContent } from '../styles/HomeStyles';
import FilterList from '../components/FilterList';
import CardGrid from '../components/Card/CardGrid';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <FilterList />
        <CardGrid />
      </HomeContent>
    </HomeContainer>
  );
}
