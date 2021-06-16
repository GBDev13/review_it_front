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
      <a href={link}>{linkText}</a>
    </HaveAccountLink>
  );
}
