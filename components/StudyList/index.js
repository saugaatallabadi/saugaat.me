import React, { useContext } from 'react'

import WorksContext from '../../Works.Context'
import Footer from '../Footer'
import Intro from '../Intro'
// import WorkCard from './WorkCard'
import StudyCard from './StudyCard'
import styles from './StudyList.module.css'

const StudyList = () => {

  const filtering = useContext(WorksContext).filter(
    (data) => data.document.data.typeOfContent == 'study'
  )

  const study = filtering.sort(
    (a, b) => new Date(b.document.data.date) - new Date(a.document.data.date)
  )

  return (
    <>
      <div className={styles.studyContainer}>
        <h1 className={styles.title}>Recent studies</h1>
        <div className={styles.studyList}>
          {study && study.map((p, i) => <StudyCard key={p.slug} index={i} {...p} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default StudyList
