import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu } from '../../store/modules/menus';
import { IState } from '../../store/types';
import Input from '../Input';
import NavLink from './NavLink';
import Logout from './Logout';
import { Container, UserProfile } from './styles';

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: IState) => state);

  function handleOpenMenu() {
    dispatch(toggleMobileMenu(true));
  }

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
            <NavLink href="/create-post">Criar post</NavLink>
          </nav>
        </section>

        <section>
          <Input placeholder="Buscar projetos" />
          <Link href={`profile/${user.id}`}>
            <a>
              <UserProfile
                url={user.picture_url || '/defaultuserpicture.png'}
              />
            </a>
          </Link>
          <Logout />
          <HiMenuAlt2 className="mobileMenu" onClick={handleOpenMenu} />
        </section>
      </div>
    </Container>
  );
}

export default Header;
