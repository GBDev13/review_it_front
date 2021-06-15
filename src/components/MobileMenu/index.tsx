import { Container } from './styles';

function MobileMenu() {
  const isActive = false;
  return (
    <Container isActive={isActive}>
      {isActive && (
        <div>
          <section>
            <p>user e notificações</p>
          </section>
          <nav>
            <a>Home</a>
            <a>Profile</a>
          </nav>
        </div>
      )}
    </Container>
  );
}

export default MobileMenu;
