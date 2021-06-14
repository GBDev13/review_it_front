import { MdAttachMoney, MdPerson, MdDateRange } from 'react-icons/md';
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
          <MdAttachMoney />
          <span>R$50</span>
        </div>
        <div>
          <MdPerson />
          <span>Unknown</span>
        </div>
        <div>
          <MdDateRange />
          <span>12/12/2012</span>
        </div>
      </FlexContainer>
    </CardContainer>
  );
}
