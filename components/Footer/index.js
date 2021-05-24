import Link from 'next/link'
import React from 'react'

import dribbbleLogo from './dribble.svg'
import styles from './Footer.module.css'
import githubLogo from './github.svg'
import logomark from './logomark.svg'
// import twitterLogo from './twitter.svg'

const Footer = ({ noBorder }) => (
  <footer>
    <div className={noBorder ? styles.containerNoBorder : styles.container}>
      <Link href="/">
        <img src={logomark} width="70px" alt="saugaat logo" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/saugaat"
            >
              <img src={dribbbleLogo} alt="saugaat on dribbble" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/saugaatallabadi">
              <img src={githubLogo} alt="saugaat on github" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer
