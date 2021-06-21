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
  oldItem?: any;
  hasRedux?: boolean;
};

function FilterList({
  title,
  techs,
  setCurrentItens,
  oldItem,
  hasRedux = false
}: FilterListProps) {
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
            oldItem={oldItem}
            hasRedux={hasRedux}
          />
        ))}
      </FiltersContainer>
    </Container>
  );
}

export default FilterList;
