---

outline: [1,4]

next: false

prev: false

---

export Interface
# MessagePacket

## Properties

#### animation? : [`AnimationFilePacket`](./AnimationFilePacket.md)

#### audio? : [`AudioFilePacket`](./AudioFilePacket.md)

#### author_signature? : `string`

#### boost_added? : [`ChatBoostAdded`](./ChatBoostAdded.md)

#### business_connection_id? : `string`

#### caption? : `string`

#### caption_entities? : [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### channel_chat_created? : `true`

#### chat? : [`ChatPacket`](./ChatPacket.md)

#### chat_background_set? : [`ChatBackground`](./ChatBackground.md)

#### chat_shared? : [`ChatShared`](./ChatShared.md)

#### connected_website? : `string`

#### contact? : [`ContactPayload`](./ContactPayload.md)

#### date : `number`

#### delete_chat_photo? : `true`

#### dice? : [`DicePayload`](./DicePayload.md)

#### document? : [`DocumentFilePacket`](./DocumentFilePacket.md)

#### edit_date? : `number`

#### edited? : `boolean`

#### effect_id? : `string`

#### entities? : [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### external_reply? : [`ExternalReplyInfo`](./ExternalReplyInfo.md)

#### forum_topic_closed? : [`ForumTopicClosed`](./ForumTopicClosed.md)

#### forum_topic_created? : [`ForumTopicCreated`](./ForumTopicCreated.md)

#### forum_topic_edited? : [`ForumTopicEdited`](./ForumTopicEdited.md)

#### forum_topic_reopened? : [`ForumTopicReopened`](./ForumTopicReopened.md)

#### forward_origin? : [`MessageOrigin`](../type-aliases/MessageOrigin.md)

#### from? : [`UserPacket`](./UserPacket.md)

#### game? : [`GamePacket`](./GamePacket.md)

#### general_forum_topic_hidden? : [`GeneralForumTopicHidden`](./GeneralForumTopicHidden.md)

#### general_forum_topic_unhidden? : [`GeneralForumTopicUnhidden`](./GeneralForumTopicUnhidden.md)

#### giveaway? : [`Giveaway`](./Giveaway.md)

#### giveaway_completed? : [`GiveawayCompleted`](./GiveawayCompleted.md)

#### giveaway_created? : [`GiveawayCreated`](./GiveawayCreated.md)

#### giveaway_winners? : [`GiveawayWinners`](./GiveawayWinners.md)

#### group_chat_created? : `true`

#### has_media_spoiler? : `true`

#### has_protected_content? : `true`

#### invoice? : [`SendInvoicePayload`](./SendInvoicePayload.md)

#### is_automatic_forward? : `true`

#### is_from_offline? : `true`

#### is_topic_message? : `true`

#### left_chat_member? : [`UserPacket`](./UserPacket.md)

#### link_preview_options? : [`LinkPreviewOptions`](./LinkPreviewOptions.md)

#### location? : `Location`

#### media_group_id? : `string`

#### message_auto_delete_timer_changed? : [`MessageAutoDeleteTimerChanged`](./MessageAutoDeleteTimerChanged.md)

#### message_id : `number`

#### message_thread_id? : `number`

#### migrate_from_chat_id? : `number`

#### migrate_to_chat_id? : `number`

#### new_chat_members? : [`UserPacket[]`](./UserPacket.md)

#### new_chat_photo? : [`PhotoSizeFilePacket[]`](./PhotoSizeFilePacket.md)

#### new_chat_title? : `string`

#### paid_media? : [`PaidMediaInfo`](./PaidMediaInfo.md)

#### passport_data? : [`PassportData`](./PassportData.md)

#### photo? : [`PhotoSizeFilePacket[]`](./PhotoSizeFilePacket.md)

#### pinned_message? : [`InaccessibleMessage`](./InaccessibleMessage.md)

#### poll? : [`PollPacket`](./PollPacket.md)

#### proximity_alert_triggered? : [`ProximityAlertTriggered`](./ProximityAlertTriggered.md)

#### quote? : [`TextQuote`](./TextQuote.md)

#### refunded_payment? : [`RefundedPaymentPacket`](./RefundedPaymentPacket.md)

#### reply_markup? : [`InlineKeyboardMarkup`](../classes/InlineKeyboardMarkup.md)

#### reply_to_message? : [`Message`](../classes/Message.md)

#### reply_to_story? : [`StoryPacket`](./StoryPacket.md)

#### sender_boost_count? : `number`

#### sender_business_bot? : [`UserPacket`](./UserPacket.md)

#### sender_chat? : [`ChatPacket`](./ChatPacket.md)

#### show_caption_above_media? : `true`

#### sticker? : [`StickerFilePacket`](./StickerFilePacket.md)

#### story? : [`StoryPacket`](./StoryPacket.md)

#### successful_payment? : [`SuccessfulPayment`](../classes/SuccessfulPayment.md)

#### supergroup_chat_created? : `true`

#### text? : `string`

#### users_shared? : [`UsersShared`](./UsersShared.md)

#### venue? : [`VenuePayload`](./VenuePayload.md)

#### via_bot? : [`UserPacket`](./UserPacket.md)

#### video? : [`VideoFilePacket`](./VideoFilePacket.md)

#### video_chat_ended? : [`VideoChatEnded`](./VideoChatEnded.md)

#### video_chat_participants_invited? : [`VideoChatParticipantsInvited`](./VideoChatParticipantsInvited.md)

#### video_chat_scheduled? : [`VideoChatScheduled`](./VideoChatScheduled.md)

#### video_chat_started? : [`VideoChatStarted`](./VideoChatStarted.md)

#### video_note? : [`VideoNoteFilePacket`](./VideoNoteFilePacket.md)

#### voice? : [`VoiceFilePacket`](./VoiceFilePacket.md)

#### web_app_data? : [`WebAppData`](./WebAppData.md)

#### write_access_allowed? : [`WriteAccessAllowed`](./WriteAccessAllowed.md)
