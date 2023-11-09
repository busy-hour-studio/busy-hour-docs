---
sidebar_position: 1
sidebar_label: Introduction
---

# Busy Hour

Busy Hour is a chat, voice & video call, and activity feeds solutions. Any messages that stored in Busy Hour is fully encrypted, including the activity feeds of the users. The encryption can be enabled through the [dashboard](https://busyhour.id/dashboard) when creating the project and cannot be changed afterwards.

# Quick Example

```tsx title="src/index.ts"
import React, { useEffect } from 'react'
import { useInitBusyApp } from '@busy-hour/react/hooks';
// Config file from Busy Hour Dashboard
import busyConfig from './busyConfig.json'

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

  // highlight-start
  const isServiceInitialized = useInitBusyService({
    // get user auth data from busy hour through your BE
    // read more at https://docs.busyhour.id/docs/category/nodejs
    // or at https://docs.busyhour.id/docs/category/rest
    accessToken: 'your-user-access-token',
    serviceToken: 'your-user-service-token',
    // determine if the app should be initialized or not
    isShouldInit: isAppInitialized,
  });
  // highlight-end

  if (!isAppInitialized || !isServiceInitialized) {
    return <div>Loading...</div>
  }

  return <App />
```
