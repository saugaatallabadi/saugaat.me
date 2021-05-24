import styles from './Intro.module.css'

const Intro = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.shortOne}>
        <p className={styles.greeting}>Hi, I’m Saugaat</p>
        <p className={styles.myTitle}>
          a web developer <br />
          and UI/UX designer
        </p>
        <a target="_blank" rel="noopener noreferrer" href="mailto:mail@saugaat.me">
          <button className={styles.helloButton}>Say hello</button>
        </a>
      </div>
      <div className={styles.longOne}>
        <p>
          I am a Software Developer by day...and by night...and the next day... ∞
        <br /> I’m experienced in <strong>HTML5</strong>
          , <strong>JS</strong> and <strong>CSS3</strong> and modern libraries{' '}
          <strong>React</strong>, <strong>Gatsby </strong>
          and <strong>Next.js</strong>.
        </p>
        <p>
          I’m also the organizer of{' '}
          <a
            href="https://kommunity.com/reactjs-istanbul"
            target="_blank"
            rel="noreferrer"
          >
            Tech Talks
          </a>
          , a community for React developers in Dubai.
        </p>
        <p>
          Currently working for full-time as Senior Software Engineer with PwC.
        </p>
      </div>
    </div>
    <div className={styles.br}></div>
  </>
)

export default Intro
