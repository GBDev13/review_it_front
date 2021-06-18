import { Container, FiltersContainer } from './styles';
import FilterItem from './FilterItem';

type Tech = {
  name: string;
  hex_color: string;
  id: string;
};

type FilterListProps = {
  title: string;
  techs: Tech[];
};

function FilterList({ title, techs }: FilterListProps) {
  const filters = techs;

  return (
    <Container>
      <h1>{title}</h1>

      <FiltersContainer>
        {filters.map(filter => (
          <FilterItem key={filter.id} text={filter.name} />
        ))}
      </FiltersContainer>
    </Container>
  );
}

export default FilterList;
