import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useRouter } from 'next/router';
import { toggleMobileMenu } from '../../store/modules/menus';
import { IState } from '../../store/types';
import NavLink from './NavLink';
import Logout from './Logout';
import { Container, UserProfile, LogInButtonContainer } from './styles';
import SearchInput from './SearchInput';

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: IState) => state);

  function handleOpenMenu() {
    dispatch(toggleMobileMenu(true));
  }

  const router = useRouter();

  return (
    <Container>
      <div>
        <section>
          <Link href="/">
            <h1>
              review<span>.it</span>
            </h1>
          </Link>

          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/ranking">Ranking</NavLink>
            <NavLink href="/create-post">Criar post</NavLink>
          </nav>
        </section>

        <section>
          {router.pathname === '/' && <SearchInput />}
          {!user.id && (
            <LogInButtonContainer>
              <Link href="/login">
                <a>
                  <button type="button">Entrar</button>
                </a>
              </Link>
            </LogInButtonContainer>
          )}
          {user.id && (
            <>
              <Link href={`/profile/${user.id}`}>
                <a>
                  <UserProfile
                    url={user?.picture_url || '/defaultuserpicture.png'}
                  />
                </a>
              </Link>
              <Logout />
            </>
          )}

          <HiMenuAlt2 className="mobileMenu" onClick={handleOpenMenu} />
        </section>
      </div>
    </Container>
  );
}

export default Header;
