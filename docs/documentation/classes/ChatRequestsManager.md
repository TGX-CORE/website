---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatRequestsManager
#### extends
 `CachedManager`<`string`, [`ChatJoinRequest`](./ChatJoinRequest.md)>

## Constructor
 ```ts
 new ChatRequestsManager( chat )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`BaseGroupChat`](./BaseGroupChat.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### chat : [`BaseGroupChat`](./BaseGroupChat.md)

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### _add( data, cache, param2 )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `any` | The data to add to the cache manager. |
| `cache` = `true` | `boolean` | Pass *True* to cache the data. |
| `param2` = `{}` | `any` | Additional data to pass. |
> Add data with cache check to the current manager.
> 
> Returns: `any`

#### $asyncapprove( user_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncdecline( user_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>
