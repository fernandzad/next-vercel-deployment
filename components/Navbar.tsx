/* eslint-disable @next/next/no-html-link-for-pages */
import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/contact',
    text: 'Contact'
  },
  {
    href: '/pricing',
    text: 'Pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({ href, text }) => <ActiveLink key={href} text={text} href={href}/>)
      }
    </nav>
  )
}

export default Navbar;
