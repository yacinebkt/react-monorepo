import styles from './shared-components.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  siteTitle: string;
  children: React.ReactNode;
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['container']} data-test-id="Header">
      <a rel="home" href="/">{props.siteTitle || "bla bla"}</a>
      {props.children}
    </header>
  );
}

export default Header;