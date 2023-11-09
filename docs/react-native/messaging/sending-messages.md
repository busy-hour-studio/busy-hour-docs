---
sidebar_position: 2
sidebar_label: Sending Messages
---

# Sending Messages

## Preqrequisites

1. App Initialized (see [Initializing Busy Hour Project/App](../getting-started#initializing-busy-hour-projectapp))
2. Main Service Initialized (see [Initializing Busy Hour Main Service](../getting-started#initializing-busy-hour-main-service))
3. Messaging Service Initialized (see [Initializing Messaging](../initializing-services#initializing-messaging))

## Sending Messages

To start sending a messages, you will need to use the `useChatMessages` which is exported from the `@busy-hour/react-native/hooks` package. For more detail about the usage of the hook you can read more about the useChatMessages from the [Listening to Messages](../react-native/listening-to-messages#listen-to-specific-incoming-messages). To send a message, you can use the `sendMessage` function which is one of the return properties of the `useChatMessages` hook. To use it, you need to pass some properties which detailed below.

| Property      | Type                      | Description                                 |
| ------------- | ------------------------- | ------------------------------------------- |
| `message`     | `string`                  | The message to send                         |
| `custom`      | `string` (optional)       | The custom message to send (JSON stringify) |
| `attachments` | `attachment[]` (optional) | The attachments data to send                |

For more detail about the `attachment` object in case you want to pass it, you can read more about it below.

| Property | Type     | Description            |
| -------- | -------- | ---------------------- |
| `uri`    | `string` | URI of the attachment  |
| `name`   | `string` | Name of the attachment |
| `type`   | `string` | Type of the attachment |

### Quick Example

```tsx title="src/main.tsx"

import React, { useEffect, useCallback } from 'react'
import { useChatMessages } from '@busy-hour/react-native/hooks'

export default Main() {
  // highlight-start
  const { mesages, sendMessage } = useChatMessages({
    type: 'private',
    chatId: 'the-chat-id-to-listen-to',
  })
  // highlight-end

  // highlight-start
  const sendNewMessage = useCallback((payload: unknown) => {
    sendMessage(payload)
  }, [sendMessage])
  // highlight-end

  return <MainApp />
}

```
