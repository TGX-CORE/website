---

outline: [1,4]

next: false

prev: false

---

export Class
# ForumTopic
#### extends
 [`ChatBase`](./ChatBase.md)\<[`ForumTopic`](./ForumTopic.md), [`SerializedForumTopicPacket`](../interfaces/SerializedForumTopicPacket.md)\>
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

Returns: `Promise`\<`boolean`\>

#### createMessageCollector( options )
Creates a message collector to the current chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |

Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncdelete( )

Returns: `Promise`\<`boolean`\>

#### $asyncedit( name, icon_custom_emoji_id )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name?` | `string` | |
| `icon_custom_emoji_id?` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncreopen( )

Returns: `Promise`\<`boolean`\>

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

#### $asyncunpinAll( )

Returns: `Promise`\<`boolean`\>
