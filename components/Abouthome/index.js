import SEO from '../SEO'
import WorkList from '../WorkList'
import styles from './Abouthome.module.css'

const Abouthome = () => (
  <div className={styles.about}>
    <SEO
      title="Saugaat Allabadi"
      description="Portfolio of Saugaat, a Machine Learning Engineer"
    />
    {/* <WorkList /> */}
  </div>
)

export default Abouthome
