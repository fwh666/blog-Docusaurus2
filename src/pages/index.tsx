import React from 'react'
import Layout from '@theme/Layout'
import HomepageHero from './_components/HomepageHero'
import HomepageBlog from './_components/HomepageBlog'
import HomepageFeatures from './_components/HomepageFeatures'
import HomepageProject from './_components/HomepageProject'

function Home() {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHero></HomepageHero>
      <main className="container-wrapper">
        <HomepageBlog />
        {/* <HomepageProject /> */}
        {/* <HomepageFeatures /> */}
        <a href="https://aistak.com" title="AI STAK: Discover thousands of AI Tools">AI STAK</a>
      </main>
    </Layout>
  )
}

export default Home
