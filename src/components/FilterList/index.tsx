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
  setCurrentItens: (params: unknown) => void;
};

function FilterList({ title, techs, setCurrentItens }: FilterListProps) {
  const filters = techs;

  return (
    <Container>
      <h1>{title}</h1>

      <FiltersContainer>
        {filters.map(filter => (
          <FilterItem
            key={filter.id}
            text={filter.name}
            id={filter.id}
            setCurrentItens={setCurrentItens}
          />
        ))}
      </FiltersContainer>
    </Container>
  );
}

export default FilterList;
