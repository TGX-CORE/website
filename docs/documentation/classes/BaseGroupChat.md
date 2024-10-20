---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# BaseGroupChat
#### extends
 [`BaseChat`](./BaseChat.md)
#### implements
 [`BaseGroupChatPacket`](../interfaces/BaseGroupChatPacket.md)

## Constructor
 ```ts
 new BaseGroupChat( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatPacket`](../interfaces/ChatPacket.md) | |

## Properties

#### $get partial : `boolean`

#### accent_color_id? : `number`

#### active_usernames? : `string[]`

#### available_reactions? : [`ReactionType[]`](../type-aliases/ReactionType.md)

#### background_custom_emoji_id? : `string`

#### can_send_paid_media? : `true`

#### can_set_sticker_set? : `true`

#### $readonly client : [`Client`](./Client.md)

#### custom_emoji_sticker_set_name? : `string`

#### description? : `string`

#### has_aggressive_anti_spam_enabled? : `true`

#### has_hidden_members? : `true`

#### has_protected_content? : `true`

#### has_visible_history? : `true`

#### id : `number`

#### invite_link? : `string`

#### invites : [`ChatInviteLinksManager`](./ChatInviteLinksManager.md)

#### is_forum? : `true`

#### join_by_request? : `true`

#### join_to_send_messages? : `true`

#### last_message_id? : `number`

#### linked_chat_id? : `number`

#### location? : [`ChatLocation`](../interfaces/ChatLocation.md)

#### max_reaction_count? : `number`

#### members : [`MembersManager`](./MembersManager.md)

#### message_auto_delete_time? : `number`

#### message_thread_id? : `number`

#### messages : [`MessagesManager`](./MessagesManager.md)

#### permissions? : [`ChatPermissions`](./ChatPermissions.md)

#### photo? : [`ChatPhoto`](../interfaces/ChatPhoto.md)

#### pinned_message? : [`Message`](./Message.md)

#### profile_accent_color_id? : `number`

#### profile_background_custom_emoji_id? : `string`

#### requests : [`ChatRequestsManager`](./ChatRequestsManager.md)

#### slow_mode_delay? : `number`

#### sticker_set_name? : `string`

#### title? : `string`

#### type : `"channel"` \| `"group"` \| `"supergroup"`

#### unrestrict_boost_count? : `number`

#### username? : `string`

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
