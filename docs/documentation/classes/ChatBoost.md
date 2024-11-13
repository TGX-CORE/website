---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatBoost
#### extends
 `BaseClass`<[`ChatBoost`](./ChatBoost.md), `ChatBoostUpdated` \| `ChatBoostRemoved`>
#### implements
 `Partial`<`ChatBoostUpdated`>,`Partial`<`ChatBoostRemoved`>

## Constructor
```ts
 new ChatBoost( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | `ChatBoostUpdated` \| `ChatBoostRemoved` | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get removed : `boolean`

#### $get user : [`User`](./User.md)

#### boost? : `ChatBoostPacket`

#### $readonly client : [`Client`](./Client.md)

#### remove_date? : `number`

#### source? : `ChatBoostSource`
