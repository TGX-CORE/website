---

outline: [1,4]

next: false

prev: false

---

export Class
# Message
#### extends
 `BaseClass`\<[`Message`](./Message.md), [`MessagePacket`](../interfaces/MessagePacket.md)\>
#### implements
 `Omit`\<[`MessagePacket`](../interfaces/MessagePacket.md), `"entities"` \| `"caption_entities"`\>

## Constructor
 ```ts
 new Message( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`MessagePacket`](../interfaces/MessagePacket.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get command : `boolean`

#### $get entities : [`MessageEntitiesStore`](./MessageEntitiesStore.md)

#### $get id : `number`

#### $get manager : [`MessagesManager`](./MessagesManager.md)

#### $get member : `undefined` \| [`Message`](./Message.md)

#### $get sender_chat : `undefined` \| [`Chat`](../type-aliases/Chat.md)

#### $get topic : `undefined` \| [`ForumTopic`](./ForumTopic.md)

#### $get user : `undefined` \| [`User`](./User.md)

#### animation? : [`Animation`](./Animation.md)

#### audio? : [`Audio`](./Audio.md)

#### author_signature? : `string`

#### boost_added? : [`ChatBoostAdded`](../interfaces/ChatBoostAdded.md)

#### business_connection_id? : `string`

#### caption? : `string`

#### caption_entities? : [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### channel_chat_created? : `true`

#### chat_background_set? : [`ChatBackground`](../interfaces/ChatBackground.md)

#### chat_shared? : [`ChatShared`](../interfaces/ChatShared.md)

#### $readonly client : [`Client`](./Client.md)

#### connected_website? : `string`

#### contact? : [`ContactPayload`](../interfaces/ContactPayload.md)

#### date : `number`

#### delete_chat_photo? : `true`

#### dice? : [`DicePayload`](../interfaces/DicePayload.md)

#### document? : [`Document`](./Document.md)

#### edit_date? : `number`

#### edited? : `boolean`

#### effect_id? : `string`

#### external_reply? : [`ExternalReplyInfo`](../interfaces/ExternalReplyInfo.md)

#### forum_topic_closed? : [`ForumTopicClosed`](../interfaces/ForumTopicClosed.md)

#### forum_topic_created? : [`ForumTopicCreated`](../interfaces/ForumTopicCreated.md)

#### forum_topic_edited? : [`ForumTopicEdited`](../interfaces/ForumTopicEdited.md)

#### forum_topic_reopened? : [`ForumTopicReopened`](../interfaces/ForumTopicReopened.md)

#### forward_origin? : [`MessageOrigin`](../type-aliases/MessageOrigin.md)

#### from? : [`UserPacket`](../interfaces/UserPacket.md)

#### game? : [`GamePacket`](../interfaces/GamePacket.md)

#### general_forum_topic_hidden? : [`GeneralForumTopicHidden`](../interfaces/GeneralForumTopicHidden.md)

#### general_forum_topic_unhidden? : [`GeneralForumTopicUnhidden`](../interfaces/GeneralForumTopicUnhidden.md)

#### giveaway? : [`Giveaway`](../interfaces/Giveaway.md)

#### giveaway_completed? : [`GiveawayCompleted`](../interfaces/GiveawayCompleted.md)

#### giveaway_created? : [`GiveawayCreated`](../interfaces/GiveawayCreated.md)

#### giveaway_winners? : [`GiveawayWinners`](../interfaces/GiveawayWinners.md)

#### group_chat_created? : `true`

#### has_media_spoiler? : `true`

#### has_protected_content? : `true`

#### invoice? : [`InvoicePacket`](../interfaces/InvoicePacket.md)

#### is_automatic_forward? : `true`

#### is_from_offline? : `true`

#### is_topic_message? : `true`

#### left_chat_member? : [`UserPacket`](../interfaces/UserPacket.md)

#### link_preview_options? : [`LinkPreviewOptions`](../interfaces/LinkPreviewOptions.md)

#### location? : `Location`

#### media_group_id? : `string`

#### message_auto_delete_timer_changed? : [`MessageAutoDeleteTimerChanged`](../interfaces/MessageAutoDeleteTimerChanged.md)

#### message_id : `number`

#### message_thread_id? : `number`

#### migrate_from_chat_id? : `number`

#### migrate_to_chat_id? : `number`

#### new_chat_members? : [`UserPacket[]`](../interfaces/UserPacket.md)

#### new_chat_photo? : [`PhotoSize[]`](./PhotoSize.md)

#### new_chat_title? : `string`

#### paid_media? : [`PaidMediaInfo`](../interfaces/PaidMediaInfo.md)

#### passport_data? : [`PassportData`](../interfaces/PassportData.md)

#### photo? : [`PhotoSize[]`](./PhotoSize.md)

#### pinned_message? : [`InaccessibleMessage`](../interfaces/InaccessibleMessage.md)

#### poll? : [`PollPacket`](../interfaces/PollPacket.md)

#### proximity_alert_triggered? : [`ProximityAlertTriggered`](../interfaces/ProximityAlertTriggered.md)

#### quote? : [`TextQuote`](../interfaces/TextQuote.md)

#### reactions : `MessageReactions`

#### refunded_payment? : [`RefundedPaymentPacket`](../interfaces/RefundedPaymentPacket.md)

#### reply_markup? : [`InlineKeyboardMarkup`](./InlineKeyboardMarkup.md)

#### reply_to_message? : [`Message`](./Message.md)

#### reply_to_story? : [`StoryPacket`](../interfaces/StoryPacket.md)

#### sender_boost_count? : `number`

#### sender_business_bot? : [`UserPacket`](../interfaces/UserPacket.md)

#### show_caption_above_media? : `true`

#### sticker? : [`Sticker`](./Sticker.md)

#### story? : [`StoryPacket`](../interfaces/StoryPacket.md)

#### successful_payment? : [`SuccessfulPayment`](./SuccessfulPayment.md)

#### supergroup_chat_created? : `true`

#### text? : `string`

#### users_shared? : [`UsersShared`](../interfaces/UsersShared.md)

#### venue? : [`VenuePayload`](../interfaces/VenuePayload.md)

#### via_bot? : [`UserPacket`](../interfaces/UserPacket.md)

#### video? : [`Video`](./Video.md)

#### video_chat_ended? : [`VideoChatEnded`](../interfaces/VideoChatEnded.md)

#### video_chat_participants_invited? : [`VideoChatParticipantsInvited`](../interfaces/VideoChatParticipantsInvited.md)

#### video_chat_scheduled? : [`VideoChatScheduled`](../interfaces/VideoChatScheduled.md)

#### video_chat_started? : [`VideoChatStarted`](../interfaces/VideoChatStarted.md)

#### video_note? : [`VideoNote`](./VideoNote.md)

#### voice? : [`Voice`](./Voice.md)

#### web_app_data? : [`WebAppData`](../interfaces/WebAppData.md)

#### write_access_allowed? : [`WriteAccessAllowed`](../interfaces/WriteAccessAllowed.md)

## Methods

#### $asynccopy( chat_id, payload )
Copies the message to a chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id` | `string` \| `number` | The chat to copy the message to. |
| `payload` | [`CopyMessagePayload`](../interfaces/CopyMessagePayload.md) | Additional data for copying. |

Returns: `Promise`\<`boolean`\>

#### createCallbackCollector( options )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md) | |

Returns: [`CallbackCollector`](./CallbackCollector.md)

#### $asyncdelete( )
Deletes the message.

Returns: `Promise`\<`boolean`\>

#### $asyncedit( payload )
Edits the message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageEditPayload`](../interfaces/MessageEditPayload.md) | The content of what the message will contain. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asynceditCaption( payload )
Edits the caption of the message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessagecaptionEditPayload`](../interfaces/MessagecaptionEditPayload.md) | The content of what the caption will contain. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asynceditMedia( payload )
Edits the media of the message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageMediaEditPayload`](../interfaces/MessageMediaEditPayload.md) | The content of what the media will contain. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asynceditReplyMarkup( payload )
Edits only the reply markup of the message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageReplyMarkupEditPayload`](../interfaces/MessageReplyMarkupEditPayload.md) | The content of what the reply markup will contain. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asyncforward( chat_id, payload )
Forwards the message to a chat.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id` | `string` \| `number` | The chat to forward the message to. |
| `payload` | [`ForwardPayload`](../interfaces/ForwardPayload.md) | Additional data for forwarding. |

Returns: `Promise`\<`boolean`\>

#### $asyncpin( disable_notification, business_connection_id )
Pins the message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `disable_notification?` | `boolean` | |
| `business_connection_id?` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncreply( pointer, payload, form_data )
Replies a message to the current message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pointer` | [`MessagePayloadMethod`](../enumerations/MessagePayloadMethod.md) | The type or method of the message. |
| `payload` | `Partial`\<[`MessagePayload`](../type-aliases/MessagePayload.md)\> | What the message will contain. |
| `form_data?` | [`FormDataBuilder`](./FormDataBuilder.md) | FormData for uploading a media with the message. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asyncreplyInvoice( id )
Replies an invoice message to the currenct message. Uses auxiliaries.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asyncreplyText( text )
Replies a text message to the current message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | What the text will contain. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asyncsetReaction( reaction, is_big )
Sets the reaction of the message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `reaction` | [`Reactions`](./Reactions.md) | The reactions. |
| `is_big?` | `boolean` | Pass *True* to set the reaction with a big animation |

Returns: `Promise`\<`boolean`\>

#### $asyncunpin( business_connection_id )
Unpins the message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `business_connection_id` | `string` | |

Returns: `Promise`\<`boolean`\>
