import Link from '@docusaurus/Link';
import React from 'react';

function ActivityFeed() {
  return (
    <ol>
      <li>
        App Initialized (see{' '}
        <Link to="../../getting-started#initializing-busy-hour-projectapp">
          Initializing Busy Hour Project/App
        </Link>
        )
      </li>
      <li>
        Main Service Initialized (see{' '}
        <Link to="../../getting-started#initializing-busy-hour-main-service">
          Initializing Busy Hour Main Service
        </Link>
        )
      </li>
      <li>
        Activity Feed Service Initialized (see{' '}
        <Link to="../../initializing-services#initializing-activity-feeds">
          Initializing Activity Feeds
        </Link>
        )
      </li>
    </ol>
  );
}

export default ActivityFeed;
