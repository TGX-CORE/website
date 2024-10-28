---

outline: [1,4]

next: false

prev: false

---

export Class
# MessageReactionCount
#### extends
 `BaseClass`<[`MessageReactionCount`](./MessageReactionCount.md), [`MessageReactionCountPacket`](../interfaces/MessageReactionCountPacket.md)>
#### implements
 `Partial`<[`MessageReactionCountPacket`](../interfaces/MessageReactionCountPacket.md)>

## Constructor
 ```ts
 new MessageReactionCount( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`MessageReactionCountPacket`](../interfaces/MessageReactionCountPacket.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get message : [`Message`](./Message.md)

#### $readonly client : [`Client`](./Client.md)

#### date : `number`

#### message_id : `number`

#### reactions : `Object[]`
