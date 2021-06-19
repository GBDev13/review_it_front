import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/user';
import { LogoutContainer } from './styles';

export default function Logout() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <LogoutContainer onClick={handleLogout}>
      <FiLogOut />
    </LogoutContainer>
  );
}
