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

#### type : `"private"` \| `"group"` \| `"supergroup"` \| `"channel"`

#### user_name? : `string`

## Methods

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
