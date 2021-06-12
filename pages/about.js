import React from 'react'

import Header from '../components/Header'
import Abouthome from '../components/Abouthome'
import IntroFull from '../components/IntroFull'
import Layout from '../components/Layout'

const About = () => (
    <Layout>
        <div>
            <Header />
            <IntroFull />
            <Abouthome />
        </div>
    </Layout>
)

export default About