import Card from '.';
import { CardGridContainer } from './styles';

type CardType = {
  id: string;
  title: string;
  description: string;
  inserted_at: string;
  author: Author;
  technologies: Tech[];
};

type Author = {
  nickname: string;
};

type Tech = {
  name: string;
  id: string;
};

type CardGridProps = {
  cards: CardType[];
};

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <CardGridContainer>
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          inserted_at={card.inserted_at}
          author={card.author.nickname}
          techs={card.technologies}
        />
      ))}
    </CardGridContainer>
  );
}
