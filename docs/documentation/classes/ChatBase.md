---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# ChatBase
#### extends
 `BaseClass`<`ChatBase.T`, `ChatBase.P`>

## Constructor
```ts
 new ChatBase( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet?` | `ChatBase.P` | |

## Properties

#### $readonly client : [`Client`](./Client.md)

#### id : `number`

#### message_thread_id? : `number`

## Methods

#### createMessageCollector( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |
> Creates a message collector to the current chat.
> 
> Returns: [`MessageCollector`](./MessageCollector.md)

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
