import React, { useContext } from 'react'

import WorksContext from '../../Works.Context'
import Footer from '../Footer'
import Intro from '../Intro'
import WorkCard from './WorkCard'
import styles from './WorkList.module.css'

const WorkList = (props) => {
  var filtering = useContext(WorksContext).filter(
    (data) => data.document.data.typeOfContent == 'project'
  )

  var works = filtering.sort(
    (a, b) => new Date(b.document.data.date) - new Date(a.document.data.date)
  )

  if (props.length != undefined) {
    works = works.slice(0, props.length)
  }

  return (
    <>
      <div className={styles.workContainer}>
        <h1 className={styles.title}>Recent works</h1>
        <div className={styles.workList}>
          {works && works.map((p, i) => <WorkCard key={p.slug} index={i} {...p} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WorkList
