---
sidebar_position: 1
sidebar_label: Getting Started
---

# Getting Started

In this section, we will show you how to initialize the Busy Hour App and Main Service.

## Prerequisites

1. Busy Hour Account ([Sign Up](https://busyhour.id/auth/sign-up) if you don't have one yet)
2. Create a Busy Hour Project from the [Dashboard/Projects](https://busyhour.id/dashboard/projects)
3. Create a Busy Hour App from from the [Dashboard/Apps](https://busyhour.id/dashboard/apps)
4. Download Busy Hour App config file from from the [Dashboard/Apps](https://busyhour.id/dashboard/apps)

## Initializing Busy Hour Project/App

To initialize Busy Hour Project/App, you can use the `initializeApp` function. The `initializeApp` function is exported from the `@busy-hour/react` package and take the following arguments:

- `configFile` - Config file from Busy Hour Dashboard/Apps
- `projectAppId` - Project App ID from Busy Hour Dashboard/Apps
- `projectId` - Project ID from Busy Hour Dashboard/Projects
- `serviceWorker` - Service Worker File location, default is `messaging-init-sw.js`

:::warning
You need to put the `messaging-init-sw.js` file in the `public` folder or set the `serviceWorker` argument to the place where your `messaging-init-sw.js` located in the `public` folder.

In case the `serviceWorker` argument is not set, the `messaging-init-sw.js` will be loaded from the `public` folder and if it doesn't exist, you will not be able to receive messages while the app is running in the background.
:::

<details>
<summary>With Hook</summary>

```tsx title="src/index.tsx"
import React from 'react';
import { useInitBusyApp } from '@busy-hour/react/hooks';
// Config file from Busy Hour Dashboard
import busyConfig from './busyConfig.json';

export default function Index() {
  // highlight-start
  const isAppInitialized = useInitBusyApp({
    // initialize the app based on the config file
    configFile: busyConfig,
    projectAppId: 'your-project-app-id',
    projectId: 'your-project-id',
    // determine if the app should be initialized or not
    isShouldInit: true,
  });
  // highlight-end

  if (!isAppInitialized) {
    return <div>Loading...</div>;
  }

  return <App />;
}
```

</details>

<details>
<summary>Without Hook</summary>

```tsx title="src/index.tsx"
import React, { useEffect } from 'react';
import { initializeApp } from '@busy-hour/react';
// Config file from Busy Hour Dashboard
import busyConfig from './busyConfig.json';

export default function Index() {
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      // highlight-start
      await initializeApp({
        // initialize the app based on the config file
        configFile: busyConfig,
        projectAppId: 'your-project-app-id',
        projectId: 'your-project-id',
      });
      // highlight-end

      setIsAppInitialized(true);
    })();
  }, []);

  if (!isAppInitialized) {
    return <div>Loading...</div>;
  }

  return <App />;
}
```

</details>

## Initializing Busy Hour Main Service

After initializing Busy Hour Project/App, now you can initialize Busy Hour main services using `initializeService` function. The `initializeService` function is exported from the `@busy-hour/react` package and take the following arguments:

- `accessToken` - User access token
- `serviceToken` - Service token

:::warning
To get the user access token and service token, you can use the `fetch/axios` to request user auth data from Busy Hour. Please keep in mind, that the process of requesting user auth data should be done only from your Backend and not from your Frontend.

In this example, the idea is that you request the auth data to your Backend and then requesting it from Backend to our REST API or using the `@busy-hour/node` package, afterwards the response will be passed to the `initializeService` function.
:::

<details>
<summary>With Hook</summary>

```tsx title="src/main.tsx"
import React from 'react';
import { useInitBusyService } from '@busy-hour/react/hooks';

export default function Main() {
  // highlight-start
  const isServiceInitialized = useInitBusyService({
    // get user auth data from busy hour through your BE
    // read more at https://docs.busyhour.id/docs/category/nodejs
    // or at https://docs.busyhour.id/docs/category/rest
    accessToken: 'your-user-access-token',
    serviceToken: 'your-user-service-token',
    // determine if the app should be initialized or not
    isShouldInit: true,
  });
  // highlight-end

  if (!isServiceInitialized) {
    return <div>Loading...</div>;
  }

  return <MainApp />;
}
```

</details>

<details>
<summary>Without Hook</summary>

```tsx title="src/main.tsx"
import React, { useEffect } from 'react';
import { initializeService } from '@busy-hour/react';

export default function Main() {
  useEffect(() => {
    (async () => {
      // get user auth data from busy hour through your BE
      // read more at https://docs.busyhour.id/docs/category/nodejs
      // or at https://docs.busyhour.id/docs/category/rest
      // highlight-start
      const { data } = await axios.post<{
        accessToken: string,
        serviceToken: string
      }>(...)
      // highlight-end

      // initialize the service using the auth
      // highlight-next-line
      await initializeService(data.accessToken, data.serviceToken);
    })();
  }, []);

  return <MainApp />
}
```

</details>