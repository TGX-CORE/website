---

outline: [1,4]

next: false

prev: false

---

export Interface
# ReplyButtonPayload

This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.

## Properties

#### request_chat? : [`RequestChat`](./RequestChat.md)

#### request_contact? : `boolean`

#### request_location? : `boolean`

#### request_poll? : `Object`

#### request_users? : [`RequestUsers`](./RequestUsers.md)

#### text : `string`

#### web_app? : [`WebAppInfo`](./WebAppInfo.md)
