import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <React.Fragment>
        Busy Hour is designed to be easy to use as simple as a function call.
      </React.Fragment>
    ),
  },
  {
    title: 'Easy to Customize',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <React.Fragment>
        Busy Hour is designed to give the greatest developer experience as much
        as possible.
      </React.Fragment>
    ),
  },
  {
    title: 'Fully Encrypted',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <React.Fragment>
        Any messages that stored in Busy Hour is fully encrypted, including the
        activity feeds of users.
      </React.Fragment>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
