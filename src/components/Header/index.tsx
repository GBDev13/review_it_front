import Input from '../Input';
import NavLink from './NavLink';
import Notification from './Notification';
import { Container, UserProfile } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <section>
          <h1>
            review<span>.it</span>
          </h1>

          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/profile">Profile</NavLink>
          </nav>
        </section>

        <section>
          <Input placeholder="Buscar projetos" />
          <UserProfile url="https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png" />
          <Notification />
        </section>
      </div>
    </Container>
  );
}

export default Header;
