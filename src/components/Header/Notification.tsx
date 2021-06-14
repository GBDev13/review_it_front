import { BiBell } from 'react-icons/bi';
import { NotificationContainer } from './styles';

export default function Notification() {
  return (
    <NotificationContainer hasNotification={false}>
      <BiBell />
    </NotificationContainer>
  );
}
