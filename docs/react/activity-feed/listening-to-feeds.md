---
sidebar_position: 1
sidebar_label: Listening to Activity Feeds
---

# Listening to Activity Feeds

In this section, we will show you how to listen to activity feeds from the activity feeds service.

## Preqrequisites

1. App Initialized (see [Initializing Busy Hour Project/App](../getting-started#initializing-busy-hour-projectapp))
2. Main Service Initialized (see [Initializing Busy Hour Main Service](../getting-started#initializing-busy-hour-main-service))
3. Activity Feed Service Initialized (see [Initializing Activity Feeds](../initializing-services#initializing-activity-feeds))

## Listen to Latest Activity Feeds

To listen to all latest activity feeds, you can use the `useLastFeedListener` hook which is exported from the `@busy-hour/react/hooks` package. The hook will return an object that contains `feeds`, `myFeeds`, `listenLastFeeds`, and `removeLastFeedListener`. For more detail about the properties see the detail from this table:

| Property                 | Type             | Description                                 |
| ------------------------ | ---------------- | ------------------------------------------- |
| `feeds`                  | `ActivityFeed[]` | The last activity feeds                     |
| `myFeeds`                | `ActivityFeed[]` | The last activity feeds of the current user |
| `listenLastFeeds`        | `function`       | Listen to latest activity feeds             |
| `removeLastFeedListener` | `function`       | Remove the listener                         |

### Quick Example

```tsx title="src/main.tsx"

import React, { useEffect } from 'react'
import { useLastFeedListener } from '@busy-hour/react/hooks'

export default Main() {
  // highlight-next-line
  const { listenLastFeeds, removeLastFeedListener } = useLastFeedListener()

  useEffect(() => {
    // highlight-start
    // Start listening to all incoming last messages
    listenLastFeeds()

    return () => {
      // Stop listening to all incoming last messages
      removeLastFeedListener()
    }
    // highlight-end
  }, [])

  return <MainApp />
}

```
