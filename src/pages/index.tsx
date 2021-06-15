import Header from '../components/Header';
import { HomeContainer, HomeContent } from '../styles/HomeStyles';
import FilterList from '../components/FilterList';
import CardGrid from '../components/Card/CardGrid';
import MobileMenu from '../components/MobileMenu';

export default function Home() {
  return (
    <HomeContainer>
      <MobileMenu />
      <Header />
      <HomeContent>
        <FilterList />
        <CardGrid />
      </HomeContent>
    </HomeContainer>
  );
}
