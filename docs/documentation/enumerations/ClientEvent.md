---

outline: [1,4]

next: false

prev: false

---

export Enum
# ClientEvent

All the possible events the client may emit.

## Properties

#### Animation : `"animation"`
 > (message: 
[Message](../classes/Message.md)
)

#### Audio : `"audio"`
 > (message: 
[Message](../classes/Message.md)
)

#### BoostAdded : `"boost_added"`

#### BusinessConnection : `"business_connection"`
 > (message: 
[Message](../classes/Message.md)
)

#### BusinessMessage : `"business_message"`
 > (message: 
[Message](../classes/Message.md)
)

#### CallbackQuery : `"callback_query"`

#### ChannelChatCreated : `"channel_chat_created"`
 > (message: 
[Message](../classes/Message.md)
)

#### ChannelPost : `"channel_post"`
 > (message: 
[Message](../classes/Message.md)
)

#### ChatBackgroundSet : `"chat_background_set"`

#### ChatBoost : `"chat_boost"`
 > (chat_boost: 
[ChatBoost](../classes/ChatBoost.md)
)

#### ChatJoinRequest : `"chat_join_request"`
 > (request: 
[ChatJoinRequest](../classes/ChatJoinRequest.md)
)

#### ChatMemberUpdated : `"chat_member"`
 > (update: 
[ChatMemberUpdated](../classes/ChatMemberUpdated.md)
)

#### ChatShared : `"chat_shared"`
 > (message: 
[Message](../classes/Message.md)
)

#### ChosenInlineResult : `"chosen_inline_result"`
 > (chosen_result: 
[ChosenInlineResult](../classes/ChosenInlineResult.md)
)

#### Command : `"command"`
 > (message: 
[Message](../classes/Message.md)
)

#### ConnectedWebsite : `"connected_website"`

#### Contact : `"contact"`
 > (message: 
[Message](../classes/Message.md)
)

#### DeleteChatPhoto : `"delete_chat_photo"`

#### DeletedBusinessMessage : `"deleted_business_messages"`
 > (message: 
[Message](../classes/Message.md)
)

#### Dice : `"dice"`
 > (message: 
[Message](../classes/Message.md)
)

#### Document : `"document"`
 > (message: 
[Message](../classes/Message.md)
)

#### EditedBusinessMessage : `"edited_business_message"`
 > (message: 
[Message](../classes/Message.md)
)

#### EditedChannelPost : `"edited_channel_post"`
 > (message: 
[Message](../classes/Message.md)
)

#### EditedMessage : `"edited_message"`
 > (message: 
[Message](../classes/Message.md)
)

#### ForumTopicClosed : `"forum_topic_closed"`
 > (topic: 
[ForumTopic](../classes/ForumTopic.md)
)

#### ForumTopicCreated : `"forum_topic_created"`
 > (topic: 
[ForumTopic](../classes/ForumTopic.md)
)

#### ForumTopicEdited : `"forum_topic_edited"`
 > (topic: 
[ForumTopic](../classes/ForumTopic.md)
)

#### ForumTopicReopened : `"forum_topic_reopened"`
 > (topic: 
[ForumTopic](../classes/ForumTopic.md)
)

#### Game : `"game"`
 > (message: 
[Message](../classes/Message.md)
)

#### GeneralForumTopicHidden : `"general_forum_topic_hidden"`

#### GeneralForumTopicUnhidden : `"general_forum_topic_unhidden"`

#### Giveaway : `"giveaway"`

#### GiveawayCompleted : `"giveaway_completed"`

#### GiveawayCreated : `"giveaway_created"`

#### GiveawayWinners : `"giveaway_winners"`

#### GroupChatCreated : `"group_chat_created"`
 > (message: 
[Message](../classes/Message.md)
)

#### InlineQuery : `"inline_query"`
 > (inline_query: 
[InlineQuery](../classes/InlineQuery.md)
)

#### Invoice : `"invoice"`

#### LeftChatMember : `"left_chat_member"`

#### Location : `"location"`
 > (message: 
[Message](../classes/Message.md)
)

#### Message : `"message"`
 > (message: 
[Message](../classes/Message.md)
)

#### MessageAutoDeleteTimerChanged : `"message_auto_delete_timer_changed"`

#### MessageReaction : `"message_reaction"`
 > (message: 
[Message](../classes/Message.md)
, old_reactions: 
[MessageReaction](../classes/MessageReaction.md)
[], new_reactions: 
[MessageReaction](../classes/MessageReaction.md)
[])

#### MessageReactionCount : `"message_reaction_count"`
 > (message: 
[Message](../classes/Message.md)
, decreased: Object, increased: Object)

#### MigrateFromChatId : `"migrate_from_chat_id"`

#### MigrateToChatId : `"migrate_to_chat_id"`

#### MyChatMemberUpdated : `"my_chat_member"`

#### NewChatMembers : `"new_chat_members"`
 > (member: 
[Member](../classes/Member.md)
)

#### NewChatPhoto : `"new_chat_photo"`

#### NewChatTitle : `"new_chat_title"`

#### PaidMedia : `"paid_media"`
 > (message: 
[Message](../classes/Message.md)
)

#### PassportData : `"passport_data"`

#### Photo : `"photo"`
 > (message: 
[Message](../classes/Message.md)
)

#### PinnedMessage : `"pinned_message"`
 > (message: 
[Message](../classes/Message.md)
)

#### Poll : `"poll"`
 > (message: 
[Message](../classes/Message.md)
)

#### PollAnswer : `"poll_answer"`
 > (message: 
[Message](../classes/Message.md)
)

#### PreCheckoutQuery : `"pre_checkout_query"`
 > (query: 
[PreCheckoutQuery](../classes/PreCheckoutQuery.md)
)

#### ProximityAlertTriggered : `"proximity_alert_triggered"`

#### PurchasedPaidMedia : `"purchased_paid_media"`

#### QuoteText : `"quote"`
 > (message: 
[Message](../classes/Message.md)
)

#### Raw : `"raw"`
 > (object: Object)

#### Ready : `"ready"`
 > (client: 
[Client](../classes/Client.md)
)

#### RefundedPayment : `"refunded_payment"`

#### RemovedChatBoost : `"removed_chat_boost"`

#### ShippingQuery : `"shipping_query"`
 > (shipping: 
[ShippingQuery](../classes/ShippingQuery.md)
)

#### Story : `"story"`
 > (message: 
[Message](../classes/Message.md)
)

#### SuccessfulPayment : `"successful_payment"`
 > (message: 
[SuccessfulPayment](../classes/SuccessfulPayment.md)
)

#### SupergroupChatCreated : `"supergroup_chat_created"`
 > (message: 
[Message](../classes/Message.md)
)

#### Text : `"text"`
 > (message: 
[Message](../classes/Message.md)
)

#### Unhandled : `"unhandled"`
 > (packet: 
[UpdatePacket](../interfaces/UpdatePacket.md)
)

#### UsersShared : `"users_shared"`
 > (message: 
[Message](../classes/Message.md)
)

#### Venue : `"venue"`
 > (message: 
[Message](../classes/Message.md)
)

#### Video : `"video"`
 > (message: 
[Message](../classes/Message.md)
)

#### VideoChatEnded : `"video_chat_ended"`

#### VideoChatParticipantsInvited : `"video_chat_participants_invited"`

#### VideoChatScheduled : `"video_chat_scheduled"`

#### VideoChatStarted : `"video_chat_started"`

#### VideoNote : `"video_note"`
 > (message: 
[Message](../classes/Message.md)
)

#### Voice : `"voice"`
 > (message: 
[Message](../classes/Message.md)
)

#### WebAppData : `"web_app_data"`

#### WriteAccessAllowed : `"write_access_allowed"`
