---

outline: [1,4]

next: false

prev: false

---

export Class
# MessagesManager
#### extends
 `CachedManager`<`number`, [`Message`](./Message.md)>

## Constructor
 ```ts
 new MessagesManager( chat )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`BaseChat`](./BaseChat.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### chat : [`BaseChat`](./BaseChat.md)

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

#### $asynccopy( payload, ...message_ids )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`CopyMessagePayload`](../interfaces/CopyMessagePayload.md) | The payload data of the copy. |
| `...message_ids` | `number[]` | The ids of the messages to forward. |
> Copy messages of that belongs to this manager.
> 
> Returns: `Promise`<`boolean`>

#### $asyncdelete( ...message_ids )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...message_ids` | `number[]` | |
> Delete or bulk delete messages.
> 
> Returns: `Promise`<`boolean`>

#### $asyncedit( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageEditPayload`](../interfaces/MessageEditPayload.md) | The payload data of the edit. |
> Edits a message that belongs to this manager.
> 
> Returns: `Promise`<`boolean` \| [`Message`](./Message.md)>

#### $asynceditCaption( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessagecaptionEditPayload`](../interfaces/MessagecaptionEditPayload.md) | the payload data of the caption. |
> Edits the caoption of a message that belongs to this manager.
> 
> Returns: `Promise`<`boolean` \| [`Message`](./Message.md)>

#### $asynceditMedia( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageMediaEditPayload`](../interfaces/MessageMediaEditPayload.md) | The payload data of the media. |
> Edits the media of a message that belongs to this manager.
> 
> Returns: `Promise`<`boolean` \| [`Message`](./Message.md)>

#### $asynceditReplyMarkup( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageReplyMarkupEditPayload`](../interfaces/MessageReplyMarkupEditPayload.md) | The payload data of the reply markup. |
> Edits the reply markup of a message that belongs to this manager.
> 
> Returns: `Promise`<`boolean` \| [`Message`](./Message.md)>

#### $asyncforward( payload, ...message_ids )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`ForwardPayload`](../interfaces/ForwardPayload.md) | The payload data of the forward. |
| `...message_ids` | `string \| number[]` | The ids of the messages to forward. |
> Forward messages that belongs to this manager.
> 
> Returns: `Promise`<`boolean` \| `number[]`>

#### $asyncpin( message_id, disable_notification, business_connection_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_id` | `number` | |
| `disable_notification?` | `boolean` | |
| `business_connection_id?` | `string` | |
> Pins a message.
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetReaction( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageReactionPayload`](../interfaces/MessageReactionPayload.md) | The payload data of the reaction. |
> Sets the reaction of a message that belongs to this manager.
> 
> Returns: `Promise`<`boolean`>

#### $asyncunpin( message_id, business_connection_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_id` | `number` | |
| `business_connection_id` | `string` | |
> Unpins a message.
> 
> Returns: `Promise`<`boolean`>

#### $asyncunpinAll( )

> Unpin all pinned messages.
> 
> Returns: `Promise`<`boolean`>
