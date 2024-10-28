---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# BaseChat
#### extends
 [`ChatBase`](./ChatBase.md)<[`BaseChat`](./BaseChat.md), [`ChatPacket`](../interfaces/ChatPacket.md)>
#### implements
 [`ChatPacket`](../interfaces/ChatPacket.md)

## Constructor
 ```ts
 new BaseChat( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatPacket`](../interfaces/ChatPacket.md) | |

## Properties

#### $get partial : `boolean`

#### $readonly client : [`Client`](./Client.md)

#### first_name? : `string`

#### id : `number`

#### is_forum? : `boolean`

#### last_message_id? : `number`
 
 > default: 0

#### last_name? : `string`

#### message_thread_id? : `number`

#### messages : [`MessagesManager`](./MessagesManager.md)

#### photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)

#### type : `"channel"` \| `"private"` \| `"group"` \| `"supergroup"`

#### user_name? : `string`

## Methods

#### createMessageCollector( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |
> Creates a message collector to the current chat.
> 
> Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncdeleteStickerSet( )

> 
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

#### $asyncsend( method, packet, form_data )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `method` | [`MessagePayloadMethod`](../enumerations/MessagePayloadMethod.md) | The method of the message. |
| `packet` | [`MessagePayload`](../type-aliases/MessagePayload.md) | The packet of what the message will contain. |
| `form_data?` | [`FormDataBuilder`](./FormDataBuilder.md) | The form data for uploading media, see also File |
> Sends a message to the current channel.
> 
> Returns: `Promise`<[`Message`](./Message.md)>

#### $asyncsendInvoice( id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |
> Sends the stored invoice with the id to the current chat.
> 
> Returns: `Promise`<`void` \| [`Message`](./Message.md)>

#### $asyncsendText( text )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | The text content of the message. |
> Sends a text message to the current chat.
> 
> Returns: `Promise`<[`Message`](./Message.md)>

#### $asyncsetDescription( description )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetStrickerSet( sticker_set_name )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sticker_set_name` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetTitle( title )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>
