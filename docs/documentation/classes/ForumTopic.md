---

outline: [1,4]

next: false

prev: false

---

export Class
# ForumTopic
#### extends
 [`ChatBase`](./ChatBase.md)<[`ForumTopic`](./ForumTopic.md), [`SerializedForumTopicPacket`](../interfaces/SerializedForumTopicPacket.md)>
#### implements
 [`SerializedForumTopicPacket`](../interfaces/SerializedForumTopicPacket.md)

## Constructor
```ts
 new ForumTopic( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`SerializedForumTopicPacket`](../interfaces/SerializedForumTopicPacket.md) | |

## Properties

#### $get chat : [`SuperGroupChat`](./SuperGroupChat.md)

#### $get id : `number`

#### $readonly client : [`Client`](./Client.md)

#### icon_color : `number`

#### icon_custom_emoji_id : `string`

#### message_thread_id : `number`

#### name : `string`

#### type : `ForumType`

## Methods

#### $asyncclose( )

> Close the current forum topic.
> 
> Returns: `Promise`<`boolean`>

#### createCallbackCollector( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options?` | [`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md) | The options for the collector. |
> Creates a callback query collector to the current chat.
> 
> Returns: [`CallbackCollector`](./CallbackCollector.md)

#### createMessageCollector( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options?` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |
> Creates a message collector to the current chat.
> 
> Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncdelete( )

> Delete the current forum topic.
> 
> Returns: `Promise`<`boolean`>

#### $asyncedit( name, icon_custom_emoji_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name?` | `string` | The new name of the forum topic. |
| `icon_custom_emoji_id?` | `string` | The id of the new custom emoji of the forum topic. |
> Edit the current forum topic.
> 
> Returns: `Promise`<`boolean`>

#### $asyncreopen( )

> Reopen the current forum topic.
> 
> Returns: `Promise`<`boolean`>

#### $asyncsend( method, packet, form )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `method` | [`MessagePayloadMethod`](../enumerations/MessagePayloadMethod.md) | The method of the message. |
| `packet` | [`MessagePayload`](../type-aliases/MessagePayload.md) | The packet of what the message will contain. |
| `form?` | [`FormDataBuilder`](./FormDataBuilder.md) | The form data for uploading media, see also File . |
> Sends a message to the current channel.
> 
> Returns: `Promise`<`false` \| [`Message`](./Message.md)>

#### $asyncsendInvoice( id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |
> Sends the stored invoice with the id to the current chat.
> 
> Returns: `Promise`<`null` \| [`Message`](./Message.md)>

#### $asyncsendText( text )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | The text content of the message. |
> Sends a text message to the current chat.
> 
> Returns: `Promise`<`false` \| [`Message`](./Message.md)>

#### $asyncunpinAll( )

> Unpin all the messages of the current topic.
> 
> Returns: `Promise`<`boolean`>
