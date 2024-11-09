---

outline: [1,4]

next: false

prev: false

---

export Class
# ForceReply
#### extends
 [`Builder`](./Builder.md)

Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply').

This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.

## Constructor
```ts
 new ForceReply( input_field_placeholder, selective )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `input_field_placeholder?` | `string` | The placeholder to be shown in the input field when the reply is active; 1-64 characters |
| `selective?` | `boolean` | Use this parameter if you want to force reply from specific users only. Targets: 1) users that are mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. |
