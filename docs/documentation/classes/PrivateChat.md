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

#### last_name? : `string`

#### message_thread_id : `undefined` \| `number`

#### messages : [`MessagesManager`](./MessagesManager.md)

#### personal_chat? : [`Chat`](../type-aliases/Chat.md)

#### photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)

#### type : `"private"`

#### username? : `string`

## Methods

#### createMessageCollector( options )
Creates a message collector to the current chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |

Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncdeleteStickerSet( )

Returns: `Promise`\<`boolean`\>

#### $asyncfetch( )

Returns: `Promise`\<`boolean` \| [`BaseChat`](./BaseChat.md)\>

#### $asyncleave( )

Returns: `Promise`\<`boolean`\>

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

#### $asyncsetDescription( description )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetStrickerSet( sticker_set_name )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sticker_set_name` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetTitle( title )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | |

Returns: `Promise`\<`boolean`\>
