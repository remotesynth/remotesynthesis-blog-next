import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link';


const Home = (props) => (
  <div>
    <Head>
      <title>{ props.title }</title>
      <meta name="Description" content={props.description}></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout config={props}>
      <main class="main">
        <div class="container">
          <div class="intro">
            <div class="avatar">
              <a href="/posts/"> <img src="/assets/images/Brian_Rinaldi.png" /> </a>
            </div>
            <h2 class="description">A blog</h2>
            <div class="social-links">
              Social Links Here  
            </div>
          </div>
        </div>
      </main>
    </Layout>
  </div>
)

export default Home

Home.getInitialProps = async function() {
  const configData = await import(`../data/config.json`)
  return {
    ...configData
  }
}
