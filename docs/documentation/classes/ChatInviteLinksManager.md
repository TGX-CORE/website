---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatInviteLinksManager
#### extends
 `CachedManager`<`string`, `ChatInviteLink`>

## Constructor
```ts
 new ChatInviteLinksManager( chat )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`SuperGroupChat`](./SuperGroupChat.md) \| [`GroupChat`](./GroupChat.md) \| [`ChannelChat`](./ChannelChat.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### $get defaults : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

#### chat : [`SuperGroupChat`](./SuperGroupChat.md) \| [`GroupChat`](./GroupChat.md) \| [`ChannelChat`](./ChannelChat.md)

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

#### $asynccreate( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`ChatInviteLinkCreatePayload`](../interfaces/ChatInviteLinkCreatePayload.md) | |
> 
> 
> Returns: `Promise`<`boolean` \| `ChatInviteLink`>

#### $asynccreateSubscription( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`ChatInviteLinkSubscriptionPayload`](../interfaces/ChatInviteLinkSubscriptionPayload.md) | |
> 
> 
> Returns: `Promise`<`boolean` \| `ChatInviteLink`>

#### $asyncedit( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | `ChatInviteLinkEditPayload` | |
> 
> 
> Returns: `Promise`<`boolean` \| `ChatInviteLink`>

#### $asynceditSubscription( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`ChatInviteLinkSubscriptionEditPayload`](../interfaces/ChatInviteLinkSubscriptionEditPayload.md) | |
> 
> 
> Returns: `Promise`<`boolean` \| `ChatInviteLink`>

#### $asyncexport( )

> 
> 
> Returns: `Promise`<`boolean` \| `ChatInviteLink`>

#### $asyncrevoke( invite_link )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `invite_link` | `string` | |
> 
> 
> Returns: `Promise`<`boolean` \| `ChatInviteLink`>
