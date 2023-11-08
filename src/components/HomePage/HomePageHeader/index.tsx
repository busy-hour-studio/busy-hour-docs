import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React from 'react';
import styles from '../../../pages/index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className={clsx('hero hero--primary bg-slate-800', styles.heroBanner)}
    >
      <div className="container">
        <h1 className="hero__title text-uppercase text-3xl text-white">
          {siteConfig.title}
        </h1>
        <div className={'w-full flex justify-center items-center'}>
          <p className="w-half hero__subtitle text-lg text-gray-300">
            {siteConfig.tagline}
          </p>
        </div>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Getting Started
        </Link>
      </div>
    </header>
  );
}

export default HomepageHeader;
