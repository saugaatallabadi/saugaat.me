import SEO from '../SEO'
import WorkList from '../WorkList'
import styles from './HomeWork.module.css'

const HomeWork = (props) => (
  <div className={styles.home}>
    <SEO
      title="Saugaat Allabadi"
      description="Portfolio of Saugaat, a Machine Learning Engineer"
    />
    <WorkList length={props.length} />
  </div>
)

export default HomeWork
