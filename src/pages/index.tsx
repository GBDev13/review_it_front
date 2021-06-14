import Header from '../components/Header';
import { HomeContainer, HomeContent } from '../styles/HomeStyles';
import FilterList from '../components/FilterList';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <FilterList />
      </HomeContent>
    </HomeContainer>
  );
}
