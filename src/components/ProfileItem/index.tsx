import { ReactElement } from 'react';

import { Container } from './styles';

interface ProfileItemProps {
  info: string | number;
  title: string;
  icon: ReactElement;
  fallback?: string;
}

function ProfileItem({ info, title, icon, fallback }: ProfileItemProps) {
  return (
    <Container>
      {icon}
      <div>
        <strong>{title}</strong>
        {info === null ? <span>{fallback}</span> : <p>{info}</p>}
      </div>
    </Container>
  );
}

export default ProfileItem;
