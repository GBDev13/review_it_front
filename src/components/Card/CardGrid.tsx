import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Card from '.';
import { api } from '../../services/api';
import { IState } from '../../store/types';
import Loader from '../Loader';
import { CardGridContainer, NoResults } from './styles';

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
  techFilters?: String[];
};

export default function CardGrid({ cards, techFilters }: CardGridProps) {
  const [loading, setLoading] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const { filters } = useSelector((state: IState) => state);

  useEffect(() => {
    if (loading) return;
    async function getFilteredPosts() {
      try {
        if (techFilters.length > 0) {
          setLoading(true);
          const { data } = await api.get('/posts', {
            params: {
              technologies: techFilters.join(),
              search_string: filters.currentSearch
            }
          });
          setFilteredResults(data.result);
        } else if (filters.currentSearch.length > 0) {
          setLoading(true);
          const { data } = await api.get('/posts', {
            params: {
              search_string: filters.currentSearch
            }
          });
          setFilteredResults(data.result);
        }
      } catch {
        toast.error('Ocorreu um erro ao realizar esse filtro');
      } finally {
        setLoading(false);
      }
    }
    getFilteredPosts();
  }, [techFilters, filters.currentSearch]);

  return (
    <CardGridContainer>
      {loading && <Loader />}
      {!techFilters.length &&
        !filters.currentSearch &&
        cards.map(card => (
          <Link key={card.id} href={`/post/${card.id}`}>
            <div>
              <Card
                title={card.title}
                description={card.description}
                inserted_at={card.inserted_at}
                author={card.author.nickname}
                technologies={card.technologies}
              />
            </div>
          </Link>
        ))}
      {(techFilters.length > 0 || filters.currentSearch.length > 0) &&
        !loading &&
        filteredResults.map(card => (
          <Link key={card.id} href={`/post/${card.id}`}>
            <div>
              <Card
                title={card.title}
                description={card.description}
                inserted_at={card.inserted_at}
                author={card.author.nickname}
                technologies={card.technologies}
              />
            </div>
          </Link>
        ))}
      {(filters.currentSearch.length > 0 || filters.techFilters.length > 0) &&
        (!filteredResults.length || !cards.length) &&
        !loading && (
          <NoResults>
            Não foi possível encontrar resultados com os filtros atuais
          </NoResults>
        )}
    </CardGridContainer>
  );
}
