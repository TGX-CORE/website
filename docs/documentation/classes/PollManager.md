---

outline: [1,4]

next: false

prev: false

---

export Class
# PollManager
#### extends
 `BaseManager`<[`PollManagerOptions`](../interfaces/PollManagerOptions.md)>

## Constructor
 ```ts
 new PollManager( client )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### active : `boolean`
 
 > default: false

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : [`PollManagerOptions`](../interfaces/PollManagerOptions.md)

#### interluder? : `__global.NodeJS.Timeout`

#### offset? : `number`

#### $readonly options : [`PollManagerOptions`](../interfaces/PollManagerOptions.md)

## Methods

#### handle( update )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `update` | [`UpdatePacket`](../interfaces/UpdatePacket.md) \| [`UpdatePacket[]`](../interfaces/UpdatePacket.md) | The packet response from Telegram. |
> Handles an incoming update packet from Telegram.
> 
> Returns: `void`

#### $asyncinitialize( )

> 
> 
> Returns: `Promise`<`void`>

#### switch( )

> Enable or disable the poll manager.
> 
> Returns: `void`
