import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const router = useRouter();

  return (
    <Link href={href}>
      <NavLinkContainer isActive={router.pathname === href}>
        {children}
      </NavLinkContainer>
    </Link>
  );
}
