import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import React from 'react';
import HomepageHeader from '../components/HomePage/HomePageHeader';

function Home() {
  return (
    <Layout description="in-app messaging/call/feeds without headaches">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
