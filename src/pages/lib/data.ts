import user from './user.json';
import links from './links.json';
import DataProps from '../../interfaces/data';

export const DATA: DataProps = {
  user,
  socialLinks: user.socialLinks,
  links
};
