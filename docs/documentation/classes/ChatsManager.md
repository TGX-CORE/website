---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatsManager
#### extends
 `CachedManager`<`number`, [`Chat`](../type-aliases/Chat.md)>

## Constructor
 ```ts
 new ChatsManager( client )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### _add( packet, cache, param2 )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `packet` | `any` | |
| `cache?` | `boolean` | Pass *True* to cache the data. |
| `param2` = `{}` | `any` | Additional data to pass. |
> Add data with cache check to the current manager.
> 
> Returns: `any`

#### $asyncfetch( chat_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean` \| [`Chat`](../type-aliases/Chat.md)>
