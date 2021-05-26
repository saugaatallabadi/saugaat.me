import SEO from '../SEO'
import WorkList from '../WorkList'
import styles from './Home.module.css'

const Home = () => (
  <div className={styles.home}>
    <SEO
      title="Saugaat Allabadi"
      description="Portfolio of Saugaat, a Machine Learning Engineer"
    />
    <WorkList />
  </div>
)

export default Home
