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

#### members : [`MembersManager`](./MembersManager.md)

#### message_thread_id? : `number`

#### messages : [`MessagesManager`](./MessagesManager.md)

#### photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)

#### requests : [`ChatRequestsManager`](./ChatRequestsManager.md)

#### topics : [`TopicsManager`](./TopicsManager.md)

#### type : `"channel"` \| `"group"` \| `"supergroup"`

## Methods

#### $asyncadministrators( )

Returns: `Promise`\<[`Member[]`](./Member.md)\>

#### createMessageCollector( options )
Creates a message collector to the current chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |

Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncdeletePhoto( )

Returns: `Promise`\<`boolean`\>

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

#### $asyncsetAdministratorCustomTitle( user_id, custom_title )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
| `custom_title` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetDescription( description )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetPhoto( photo, form )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `photo` | [`InputFile`](../type-aliases/InputFile.md) | |
| `form?` | `FormData` | |

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
