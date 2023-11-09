---
sidebar_position: 2
sidebar_label: Creating New Activity Feeds
---

# Creating New Activity Feeds

In this section, we will show you how to create new activity feeds from the activity feeds service.

## Preqrequisites

1. App Initialized (see [Initializing Busy Hour Project/App](../getting-started#initializing-busy-hour-projectapp))
2. Main Service Initialized (see [Initializing Busy Hour Main Service](../getting-started#initializing-busy-hour-main-service))
3. Activity Feed Service Initialized (see [Initializing Activity Feeds](../initializing-services#initializing-activity-feeds))

## Create New Activity Feeds

To create a new activity feeds, you can use the `useFeedCreator` hook which is exported from the `@busy-hour/react/hooks` package. The hook will return a function that allowing you to create a new activity feed.

### Quick Example

```tsx title="src/main.tsx"
import { useFeedCreator } from '@busy-hour/react/hooks';

export default Main() {
  const createFeed = useFeedCreator()

  return <MainApp />
}
```
