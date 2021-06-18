import { RiCoinsLine, RiUser3Line, RiCalendarLine } from 'react-icons/ri';
import { CardContainer, TechContainer, FlexContainer } from './styles';

export default function Card() {
  return (
    <CardContainer>
      <h1>refactored-enigma</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. um dolor sit
        amet, consectetur adipiscing elit.
      </p>

      <TechContainer>
        <div>ReactJS</div>
        <div>NodeJS</div>
      </TechContainer>

      <FlexContainer>
        <div>
          <RiCoinsLine />
          <span>R$50</span>
        </div>
        <div>
          <RiUser3Line />
          <span>Unknown</span>
        </div>
        <div>
          <RiCalendarLine />
          <span>12/12/2012</span>
        </div>
      </FlexContainer>
    </CardContainer>
  );
}
