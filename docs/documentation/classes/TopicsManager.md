---

outline: [1,4]

next: false

prev: false

---

export Class
# TopicsManager
#### extends
 `CachedManager`<`number`, [`ForumTopic`](./ForumTopic.md)>

## Constructor
 ```ts
 new TopicsManager( chat )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`SuperGroupChat`](./SuperGroupChat.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### $readonly chat : [`SuperGroupChat`](./SuperGroupChat.md)

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

#### $asyncclose( message_thread_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_thread_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asynccloseGeneral( )

> 
> 
> Returns: `Promise`<`boolean`>

#### $asynccreate( name, icon_color, icon_custom_emoji_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | |
| `icon_color?` | `number` | |
| `icon_custom_emoji_id?` | `string` | |
> 
> 
> Returns: `Promise`<`boolean` \| [`ForumTopic`](./ForumTopic.md)>

#### $asyncdelete( message_thread_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_thread_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncedit( message_thread_id, name, icon_custom_emoji_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_thread_id` | `number` | |
| `name?` | `string` | |
| `icon_custom_emoji_id?` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asynceditGeneral( name )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asynchideGeneral( )

> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncreopen( message_thread_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_thread_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncreopenGeneral( )

> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncunhideGeneral( )

> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncunpinAll( message_thread_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_thread_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncunpinAllGeneral( )

> 
> 
> Returns: `Promise`<`boolean`>
