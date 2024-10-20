---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# ChatBase
#### extends
 `BaseClass`\<`ChatBase.T`, `ChatBase.P`\>

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
Creates a message collector to the current chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |

Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncsend( method, packet, form_data )
Sends a message to the current channel.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `method` | [`MessagePayloadMethod`](../enumerations/MessagePayloadMethod.md) | The method of the message. |
| `packet` | [`MessagePayload`](../type-aliases/MessagePayload.md) | The packet of what the message will contain. |
| `form_data?` | [`FormDataBuilder`](./FormDataBuilder.md) | The form data for uploading media, see also File |

Returns: `Promise`\<[`Message`](./Message.md)\>

#### $asyncsendInvoice( id )
Sends the stored invoice with the id to the current chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |

Returns: `Promise`\<`void` \| [`Message`](./Message.md)\>

#### $asyncsendText( text )
Sends a text message to the current chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | The text content of the message. |

Returns: `Promise`\<[`Message`](./Message.md)\>
