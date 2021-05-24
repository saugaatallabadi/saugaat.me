import SEO from '../SEO'
import WorkList from '../WorkList'
import styles from './Home.module.css'

const Home = () => (
  <div className={styles.home}>
    <SEO
      title="Saugaat | Portfolio"
      description="Portfolio of Saugaat, a web developer and UI/UX designer"
    />
    <WorkList />
  </div>
)

export default Home
