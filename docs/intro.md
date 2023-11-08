---
sidebar_position: 1
sidebar_label: Introduction
---

# Busy Hour

Busy Hour is a chat, voice & video call, and activity feeds solutions. Any messages that stored in Busy Hour is fully encrypted, including the activity feeds of the users. The encryption can be enabled through the [dashboard](https://busyhour.id/dashboard) when creating the project and cannot be changed afterwards.

# Quick Example

```tsx title="src/index.ts"
import React, { useEffect } from 'react'
import { initializeApp } from '@busy-hour/react'
// Config file from Busy Hour Dashboard
import busyConfig from './busyConfig.json'

export default function Index() {
  const [isServiceInitialized, setServiceIsInitialized] = useState(false)

  useEffect(() => {
    (async () => {
      // highlight-start
      await initializeApp({
        // initialize the app based on the config file
        configFile: busyConfig,
        projectAppId: 'your-project-app-id',
        projectId: 'your-project-id',
      })
      // highlight-end

      setServiceIsInitialized(true)
    })()
  }, [])

  if (!isServiceInitialized) {
    return <div>Loading...</div>
  }

  return <App />
```

```tsx title="src/main.ts"
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

  return <MainApp />;
}
```
