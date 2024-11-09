---

outline: [1,4]

next: false

prev: false

---

export Class
# PrivateChat
#### extends
 [`BaseChat`](./BaseChat.md)
#### implements
 [`PrivateChatPacket`](../interfaces/PrivateChatPacket.md)

## Constructor
```ts
 new PrivateChat( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatPacket`](../interfaces/ChatPacket.md) | |

## Properties

#### $get partial : `boolean`

#### bio? : `string`

#### birthdate? : [`Birthdate`](../interfaces/Birthdate.md)

#### business_intro? : [`BusinessIntro`](../interfaces/BusinessIntro.md)

#### business_location? : [`BusinessLocation`](../interfaces/BusinessLocation.md)

#### business_opening_hours? : [`BusinessOpeningHours`](../interfaces/BusinessOpeningHours.md)

#### $readonly client : [`Client`](./Client.md)

#### emoji_status_custom_emoji_id? : `string`

#### emoji_status_expiration_date? : `number`

#### first_name? : `string`

#### has_private_forwards? : `true`

#### has_restricted_voice_and_video_messages? : `true`

#### id : `number`

#### last_message_id? : `number`
 
 > default: 0

#### last_name? : `string`

#### message_thread_id? : `number`

#### messages : [`MessagesManager`](./MessagesManager.md)

#### personal_chat? : [`Chat`](../type-aliases/Chat.md)

#### photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)

#### type : `"private"`

#### username? : `string`

## Methods

#### createMessageCollector( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |
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
