import { BiBell } from 'react-icons/bi';
import NavLink from './NavLink';
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
          <input placeholder="Buscar projetos" />
          <UserProfile url="https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png" />
          <BiBell />
        </section>
      </div>
    </Container>
  );
}

export default Header;
