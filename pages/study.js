import React from 'react'

import Header from '../components/Header'
import HomeStudy from '../components/HomeStudy'
import Intro from '../components/Intro'
import Layout from '../components/Layout'

const Study = () => (
    <Layout>
        <div>
            <Header />
            {/* <Intro /> */}
            <HomeStudy />
        </div>
    </Layout>
)

export default Study