import Link from 'next/link';
import { HaveAccountLink } from './styles';

type FooterNavigationProps = {
  question: string;
  link: string;
  linkText: string;
};

export default function FooterNavigation({
  question,
  link,
  linkText
}: FooterNavigationProps) {
  return (
    <HaveAccountLink>
      <p>{question}</p>
      <Link href={link}>
        <a>{linkText}</a>
      </Link>
    </HaveAccountLink>
  );
}
