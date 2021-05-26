import Link from 'next/link'

import styles from './Header.module.css'
import logo from './logo.png'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link href="/">
        <a>
          <img className={styles.logo} src={logo} width="150" alt="" />
        </a>
      </Link>
      {/* <nav className={styles.nav}>
        <Link href="/blog"><a>Blog</a></Link>
        <a
          className={styles.contactLink}
          href="mailto:saugaatallabadi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav> */}
    </div>
  </header>
)

export default Header
