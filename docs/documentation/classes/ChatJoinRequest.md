---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatJoinRequest
#### extends
 `BaseClass`\<[`ChatJoinRequest`](./ChatJoinRequest.md), [`ChatJoinRequestPacket`](../interfaces/ChatJoinRequestPacket.md)\>

## Constructor
 ```ts
 new ChatJoinRequest( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatJoinRequestPacket`](../interfaces/ChatJoinRequestPacket.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get manager : [`ChatRequestsManager`](./ChatRequestsManager.md)

#### $get user : [`User`](./User.md)

#### _chat : `number`

#### _from : `number`

#### $readonly client : [`Client`](./Client.md)

## Methods

#### $asyncapprove( )

Returns: `Promise`\<`boolean`\>

#### $asyncdecline( )

Returns: `Promise`\<`boolean`\>
