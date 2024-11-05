---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction
---

# Busy Hour

Busy Hour is a chat, voice & video call, and activity feeds solutions. Any messages that stored in Busy Hour is fully encrypted, including the activity feeds of the users. The encryption can be enabled through the [dashboard](https://busyhour.id/dashboard) when creating the project and cannot be changed afterwards.

# Quick Example

```tsx title="src/index.ts"
import React, { useEffect } from 'react'
import { useInitBusyApp } from '@busy-hour/react';
// Config file from Busy Hour Dashboard
import busyConfig from './busyConfig.json'

export default function Index() {
  // highlight-start
  const [isAppInitialized, isAppInitializedError] = useInitBusyApp({
    // determine if the app should be initialized or not
    isShouldInit: true,
    clientId: 'your-client-id',
    userId: 'your-user-id',
    projectAppId: 'your-project-app-id',
    projectId: 'your-project-id',
    accessToken: 'your-user-access-token',
    serviceToken: 'your-user-service-token',
    // initialize the app based on the config file, downloaded from the dashboard
    config: busyConfig,
    onError(reinitialize) {
      // Handle the initialization error
      // For example, refetch the user access and service token
      // ...
      // Reinitialize the app
      reinitialize();
    }
  });
  // highlight-end


  if (!isAppInitialized) {
    return <div>Loading...</div>
  }

  if (isAppInitializedError) {
    return <div>Error: {isAppInitializedError}</div>
  }

  return <App />
}
```
