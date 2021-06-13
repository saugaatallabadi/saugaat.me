import React from 'react'

import Header from '../components/Header'
import HomeWork from '../components/HomeWork'
import Intro from '../components/Intro'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <div>
      <Header />
      <Intro />
      <HomeWork length={3} />
    </div>
  </Layout>
)

export default Index
