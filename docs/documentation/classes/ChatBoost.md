---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatBoost
#### extends
 `BaseClass`\<[`ChatBoost`](./ChatBoost.md), [`ChatBoostUpdated`](../interfaces/ChatBoostUpdated.md) \| [`ChatBoostRemoved`](../interfaces/ChatBoostRemoved.md)\>
#### implements
 `Partial`\<[`ChatBoostUpdated`](../interfaces/ChatBoostUpdated.md)\>,`Partial`\<[`ChatBoostRemoved`](../interfaces/ChatBoostRemoved.md)\>

## Constructor
 ```ts
 new ChatBoost( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatBoostUpdated`](../interfaces/ChatBoostUpdated.md) \| [`ChatBoostRemoved`](../interfaces/ChatBoostRemoved.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get removed : `boolean`

#### $get user : [`User`](./User.md)

#### boost? : [`ChatBoostPacket`](../interfaces/ChatBoostPacket.md)

#### boost_id : `string`

#### $readonly client : [`Client`](./Client.md)

#### remove_date? : `number`

#### source? : [`ChatBoostSource`](../type-aliases/ChatBoostSource.md)
