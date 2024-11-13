---

outline: [1,4]

next: false

prev: false

---

export Class
# CallbackQuery
#### extends
 `BaseClass`<[`CallbackQuery`](./CallbackQuery.md), [`CallbackQueryPacket`](../interfaces/CallbackQueryPacket.md)>
#### implements
 `Partial`<[`CallbackQueryPacket`](../interfaces/CallbackQueryPacket.md)>

Represents a callback query.

## Constructor
```ts
 new CallbackQuery( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`CallbackQueryPacket`](../interfaces/CallbackQueryPacket.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get message : [`Message`](./Message.md)

#### $get user : [`User`](./User.md)

#### _chat : `number`

#### _from : `number`

#### _message : `number`

#### chat_instance : `string`

#### $readonly client : [`Client`](./Client.md)

#### data : `string`

#### from : [`User`](./User.md)

#### game_short_name? : `string`

#### id : `string`

#### inline_message_id? : `string`
