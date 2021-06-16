import { Container, FiltersContainer } from './styles';
import FilterItem from './FilterItem';

type FilterListProps = {
  titulo: string;
};

function FilterList({ titulo }: FilterListProps) {
  const filters = [
    'Javascript',
    'Typescript',
    'ReactJS',
    'NodeJS',
    'Java',
    'Python',
    'PHP'
  ];

  return (
    <Container>
      <h1>{titulo}</h1>

      <FiltersContainer>
        {filters.map(filter => (
          <FilterItem key={filter} text={filter} />
        ))}
      </FiltersContainer>
    </Container>
  );
}

export default FilterList;
