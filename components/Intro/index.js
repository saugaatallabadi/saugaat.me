import Link from 'next/link'
import styles from './Intro.module.css'

const Intro = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.shortOne}>
        <p className={styles.greeting}>Hi, I’m Saugaat</p>
        <p className={styles.myTitle}>
          {/* a Software Engineer <br />
          and Conversation Architect. */}
          and I turn coffee into code.
        </p>
        {/* <a target="_blank" rel="noopener noreferrer" href="mailto:saugaatallabadi@gmail.com">
          <button className={styles.helloButton}>About me</button>
        </a> */}
        <Link href="/about"><a className={styles.helloButton}>About me</a></Link>
      </div>
      <div className={styles.longOne}>

        <p>
          A software engineer, open source creator, writer, and former procrastinator.
        </p>
        <p>
          This website is my <strong>digital garden</strong> and a compendium of the things I have learned over the past couple years.
        </p>


        Currently working for full-time as Senior Software Engineer with {' '}
        <a
          href="https://www.pwc.com/m1/en.html"
          target="_blank"
          rel="noreferrer"
        >
          PwC
        </a>.
      </div>
    </div>
    <div className={styles.br}></div>
  </>
)

export default Intro
