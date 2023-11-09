import Link from '@docusaurus/Link';
import React from 'react';

function GettingStartedPrerequisites() {
  return (
    <ol>
      <li>
        Busy Hour Account (
        <Link to={'https://busyhour.id/auth/sign-up'}>Sign Up</Link> if you
        don't have one yet)
      </li>
      <li>
        Create a Busy Hour Project from the{' '}
        <Link to="https://busyhour.id/dashboard/projects">
          Dashboard/Projects
        </Link>
      </li>
      <li>
        Create a Busy Hour App from from the{' '}
        <Link to="https://busyhour.id/dashboard/apps">Dashboard/Apps</Link>
      </li>
      <li>
        Download Busy Hour App config file from from the{' '}
        <Link to="https://busyhour.id/dashboard/apps">Dashboard/Apps</Link>
      </li>
    </ol>
  );
}

export default GettingStartedPrerequisites;
