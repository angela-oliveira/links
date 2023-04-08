import user from './user.json';
import links from './links.json';
import DataProps from '../interfaces/data';

export const Data: DataProps = {
  user,
  socialLinks: user.socialLinks,
  links
};
