---

outline: [1,4]

next: false

prev: false

---

export Class
# SuperGroupChat
#### extends
 [`BaseGroupChat`](./BaseGroupChat.md)

## Constructor
```ts
 new SuperGroupChat( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatPacket`](../interfaces/ChatPacket.md) | |

## Properties

#### $get partial : `boolean`

#### $readonly client : [`Client`](./Client.md)

#### id : `number`

#### invites : [`ChatInviteLinksManager`](./ChatInviteLinksManager.md)

#### last_message_id? : `number`
 
 > default: 0

#### members : [`MembersManager`](./MembersManager.md)

#### message_thread_id? : `number`

#### messages : [`MessagesManager`](./MessagesManager.md)

#### photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)

#### requests : [`ChatRequestsManager`](./ChatRequestsManager.md)

#### topics : [`TopicsManager`](./TopicsManager.md)

#### type : `"group"` \| `"supergroup"` \| `"channel"`

## Methods

#### $asyncadministrators( )

> Get the administrators of the chat.
> 
> Returns: `Promise`<[`Member[]`](./Member.md)>

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

#### $asyncdeletePhoto( )

> Delete the current photo of the chat.
> 
> Returns: `Promise`<`boolean`>

#### $asyncdeleteStickerSet( )

> Deletes the current set of sticker from the current chat.
> 
> Returns: `Promise`<`boolean`>

#### $asyncfetch( )

> 
> 
> Returns: `Promise`<`boolean` \| [`Chat`](../type-aliases/Chat.md)>

#### $asyncleave( )

> 
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

#### $asyncsetAdministratorCustomTitle( user_id, custom_title )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
| `custom_title` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetDescription( description )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | The new description of the chat. |
> Set the description of the current chat.
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetPhoto( photo )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `photo` | [`InputFile`](../type-aliases/InputFile.md) | |
> Set the current photo of the chat.
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetStickerSet( sticker_set_name )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sticker_set_name` | `string` | The name of the set of stickers. |
> Set the sticker set of the current chat.
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetTitle( title )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The new title of the chat. |
> Set the title of the current chat.
> 
> Returns: `Promise`<`boolean`>
