---

outline: [1,4]

next: false

prev: false

---

export Class
# MembersManager
#### extends
 `CachedManager`<`number`, [`Member`](./Member.md)>

## Constructor
```ts
 new MembersManager( chat )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`BaseGroupChat`](./BaseGroupChat.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### $get defaults : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

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

#### $asyncban( user_id, revoke_messages, until_date )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
| `revoke_messages?` | `boolean` | |
| `until_date?` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asynccount( )

> 
> 
> Returns: `Promise`<`number`>

#### $asyncfetch( user_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
> 
> 
> Returns: `Promise`<`false` \| [`Member`](./Member.md)>

#### $asyncpromote( user_id, permissions )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
| `permissions` | [`ChatAdministratorRights`](./ChatAdministratorRights.md) | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncrestrict( user_id, permissions, use_independent_chat_permissions, until_date )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
| `permissions` | [`ChatPermissions`](./ChatPermissions.md) | |
| `use_independent_chat_permissions?` | `boolean` | |
| `until_date?` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncunban( user_id, only_if_banned )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
| `only_if_banned` | `boolean` | |
> 
> 
> Returns: `Promise`<`boolean`>
