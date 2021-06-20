/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { IState } from '../../store/types';
import { Container } from './styles';
import { toggleMobileMenu } from '../../store/modules/menus';

function MobileMenu() {
  const { menus, user } = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleCloseMenu() {
    dispatch(toggleMobileMenu(false));
  }

  function handleRedirect(route: string) {
    router.push(route);
    handleCloseMenu();
  }

  return (
    <Container isActive={menus.mobileIsOpen}>
      {menus.mobileIsOpen && (
        <>
          <AiOutlineCloseCircle onClick={handleCloseMenu} />
          <div>
            <section onClick={() => handleRedirect(`/profile/${user.id}`)}>
              <img src={user?.picture_url || '/defaultuserpicture.png'} />
              <p>{user.nickname}</p>
            </section>
            <nav>
              <a onClick={() => handleRedirect('/')}>Home</a>
              <a onClick={() => handleRedirect('/ranking')}>Ranking</a>
              <a onClick={() => handleRedirect('/create-post')}>Criar post</a>
            </nav>
          </div>
        </>
      )}
    </Container>
  );
}

export default MobileMenu;
