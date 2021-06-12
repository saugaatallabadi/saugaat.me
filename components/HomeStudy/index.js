import SEO from '../SEO'
// import WorkList from '../WorkList'
import StudyList from '../StudyList'
import styles from './HomeStudy.module.css'

const HomeStudy = () => (
  <div className={styles.home}>
    <SEO
      title="Saugaat Allabadi"
      description="Portfolio of Saugaat, a Machine Learning Engineer"
    />
    <StudyList />
  </div>
)

export default HomeStudy
