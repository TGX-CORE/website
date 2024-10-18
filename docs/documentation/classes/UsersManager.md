---

outline: [1,4]

next: false

prev: false

---

export Class
# UsersManager
#### extends
 `CachedManager`\<`number`, [`User`](./User.md)\>

## Constructor
 ```ts
 new UsersManager( client )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get cache : `Collection`\<`CachedManager.K`, `CachedManager.V`\>

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### _add( data, cache, param2 )
Add data with cache check to the current manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `any` | The data to add to the cache manager. |
| `cache` = `true` | `boolean` | Pass *True* to cache the data. |
| `param2` = `{}` | `any` | Additional data to pass. |

Returns: `any`