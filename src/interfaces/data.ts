import UserProps from './user';
import LinksProps from './links';
import SocialLinksProps from './social-links';

export default interface DataProps {
  user: UserProps;
  links: LinksProps[];
  socialLinks: SocialLinksProps[];
}
