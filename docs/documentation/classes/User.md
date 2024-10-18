---

outline: [1,4]

next: false

prev: false

---

export Class
# User
#### extends
 [`ChatBase`](./ChatBase.md)\<[`User`](./User.md), [`UserPacket`](../interfaces/UserPacket.md)\>
#### implements
 [`UserPacket`](../interfaces/UserPacket.md)

## Constructor
 ```ts
 new User( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`UserPacket`](../interfaces/UserPacket.md) | |

## Properties

#### added_to_attachment_menu? : `boolean`

#### can_connect_to_business? : `boolean`

#### can_read_all_group_messages? : `boolean`

#### $readonly client : [`Client`](./Client.md)

#### first_name? : `string`

#### has_main_web_app? : `boolean`

#### id : `number`

#### is_bot? : `boolean`

#### is_premium? : `boolean`

#### language_code? : `string`

#### last_name? : `string`

#### message_thread_id : `undefined` \| `number`

#### supports_inline_queries? : `boolean`

#### username? : `string`

## Methods

#### $asyncboosts( chat_id )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id` | `number` | |

Returns: `Promise`\<`boolean` \| [`ChatBoost[]`](./ChatBoost.md)\>

#### createMessageCollector( options )
Creates a message collector to the current chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |

Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncgetProfilePhotos( offset, limit )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `offset?` | `number` | |
| `limit?` | `number` | |

Returns: `Promise`\<[`UserProfilePhotos`](../interfaces/UserProfilePhotos.md)\>

#### $asyncsend( method, packet, form_data )
Sends a message to the current channel.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `method` | [`MessagePayloadMethod`](../enumerations/MessagePayloadMethod.md) | The method of the message. |
| `packet` | [`MessagePayload`](../type-aliases/MessagePayload.md) | The packet of what the message will contain. |
| `form_data?` | [`FormDataBuilder`](./FormDataBuilder.md) | The form data for uploading media, see also File |

Returns: `Promise`\<[`Message`](./Message.md)\>

#### $asyncsendText( text )
Sends a text message to the current channel.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | The text content of the message. |

Returns: `Promise`\<[`Message`](./Message.md)\>
