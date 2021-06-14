import { Container, FiltersContainer } from './styles';
import FilterItem from './FilterItem';

function FilterList() {
  const filters = [
    'Javascript',
    'ReactJS',
    'Typescript',
    'Java',
    'Javascript',
    'ReactJS',
    'Typescript',
    'Java',
    'Javascript',
    'ReactJS',
    'Typescript',
    'Java',
    'Javascript',
    'ReactJS',
    'Typescript',
    'Java'
  ];

  return (
    <Container>
      <h1>Filtre por tecnologia</h1>

      <FiltersContainer>
        {filters.map(filter => (
          <FilterItem key={filter} text={filter} />
        ))}
      </FiltersContainer>
    </Container>
  );
}

export default FilterList;
