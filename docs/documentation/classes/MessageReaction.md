---

outline: [1,4]

next: false

prev: false

---

export Class
# MessageReaction
#### extends
 `BaseClass`<[`MessageReaction`](./MessageReaction.md), [`MessageReactionPacket`](../interfaces/MessageReactionPacket.md)>

## Constructor
```ts
 new MessageReaction( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`MessageReactionPacket`](../interfaces/MessageReactionPacket.md) | |

## Properties

#### $get actor_chat : `undefined` \| [`Chat`](../type-aliases/Chat.md)

#### $get chat : `undefined` \| [`Chat`](../type-aliases/Chat.md)

#### $get id : `number`

#### $get user : `undefined` \| [`User`](./User.md)

#### $get value : `string`

#### actor_chat_id? : `number`

#### $readonly client : [`Client`](./Client.md)

#### custom_emoji_id? : `string`

#### emoji? : `string`

#### type : `string`
