import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IState } from '../../store/types';
import { Container } from './styles';
import { toggleMobileMenu } from '../../store/modules/menus';

function MobileMenu() {
  const { menus } = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  function handleCloseMenu() {
    dispatch(toggleMobileMenu(false));
  }

  return (
    <Container isActive={menus.mobileIsOpen}>
      {menus.mobileIsOpen && (
        <>
          <AiOutlineCloseCircle onClick={handleCloseMenu} />
          <div>
            <section>
              <p>user e notificações</p>
            </section>
            <nav>
              <a>Home</a>
              <a>Profile</a>
            </nav>
          </div>
        </>
      )}
    </Container>
  );
}

export default MobileMenu;
