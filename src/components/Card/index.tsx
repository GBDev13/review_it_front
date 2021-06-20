import { RiUser3Line, RiCalendarLine } from 'react-icons/ri';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CardContainer, TechContainer, FlexContainer } from './styles';

type CardProps = {
  title: string;
  description: string;
  author: string;
  inserted_at: string;
  technologies: Tech[];
};

type Tech = {
  name: string;
  id: string;
};

export default function Card({
  title,
  description,
  author,
  technologies,
  inserted_at
}: CardProps) {
  const formattedDate = format(new Date(inserted_at), 'P', {
    locale: ptBR
  });
  return (
    <CardContainer>
      <h1>{title}</h1>

      <p>{description}</p>

      <TechContainer>
        {technologies.map(tech => (
          <div key={tech.id}>{tech.name}</div>
        ))}
      </TechContainer>

      <FlexContainer>
        <div>
          <RiUser3Line />
          <span>{author}</span>
        </div>
        <div>
          <RiCalendarLine />
          <span>{formattedDate}</span>
        </div>
      </FlexContainer>
    </CardContainer>
  );
}
