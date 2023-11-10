import Link from '@docusaurus/Link';
import React from 'react';

function Prerequisite() {
  return (
    <ol>
      <li>
        Busy Hour Account (
        <Link to="https://busyhour.id/auth/sign-up">Sign Up</Link> if you don't
        have one yet)
      </li>
      <li>
        Generate a Master/Project API Key from{' '}
        <Link to={'https://busyhour.id/dashboard/settings'}>
          Dashboard/Settings
        </Link>{' '}
        or from{' '}
        <Link to={'https://busyhour.id/dashboard/projects'}>
          Dashboard/Projects
        </Link>
      </li>
    </ol>
  );
}

export default Prerequisite;
