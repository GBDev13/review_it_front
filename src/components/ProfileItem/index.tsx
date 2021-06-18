import { ReactElement } from 'react';

import { Container } from './styles';

interface ProfileItemProps {
  info: string | number;
  title: string;
  icon: ReactElement;
}

function ProfileItem({ info, title, icon }: ProfileItemProps) {
  return (
    <Container>
      {icon}
      <div>
        <strong>{title}</strong>
        <p>{info}</p>
      </div>
    </Container>
  );
}

export default ProfileItem;
