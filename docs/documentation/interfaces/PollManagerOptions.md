---

outline: [1,4]

next: false

prev: false

---

export Interface
# PollManagerOptions

## Properties

#### allowed_updates? : [`AllowedUpdatesOptions`](../classes/AllowedUpdatesOptions.md)
 > The allowed updates to receive by the client.
 > default: `[AllowedUpdates.Message]`

#### delay? : `number`
 > The delay before sending another request in milliseconds for long polling.
 > default: `5_000`

#### ignore_bots? : `boolean`
 > Whether to not emit updates from other bots.
 > default: `true`

#### ignore_self? : `boolean`
 > Whether to not emit updates from self.
 > default: `true`

#### ignore_sender_chats? : `boolean`
 > Wheter to not emit updates from sender chats.
 > default: `false`

#### limit? : `number`
 > Limits the number of updates to be retrieved. Values between 1-100 are accepted.

#### timeout? : `number`
 > Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
 > default: `0`
