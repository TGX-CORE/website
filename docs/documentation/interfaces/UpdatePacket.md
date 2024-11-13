---

outline: [1,4]

next: false

prev: false

---

export Interface
# UpdatePacket

## Properties

#### business_connection? : `BusinessConnectionPacket`

#### business_message? : [`MessagePacket`](./MessagePacket.md)

#### callback_query? : [`CallbackQueryPacket`](./CallbackQueryPacket.md)

#### channel_post? : [`MessagePacket`](./MessagePacket.md)

#### chat_boost? : `ChatBoostUpdated`

#### chat_join_request? : [`ChatJoinRequestPacket`](./ChatJoinRequestPacket.md)

#### chat_member? : [`ChatMemberUpdatedPacket`](./ChatMemberUpdatedPacket.md)

#### chosen_inline_result? : [`ChosenInlineResultPacket`](./ChosenInlineResultPacket.md)

#### deleted_business_messages? : `BusinessMessagesDeletedPacket`

#### edited_business_message? : [`MessagePacket`](./MessagePacket.md)

#### edited_channel_post? : [`MessagePacket`](./MessagePacket.md)

#### edited_message? : [`MessagePacket`](./MessagePacket.md)

#### inline_query? : [`InlineQueryPacket`](./InlineQueryPacket.md)

#### message? : [`MessagePacket`](./MessagePacket.md)

#### message_reaction? : [`MessageReactionPacket`](./MessageReactionPacket.md)

#### message_reaction_count? : [`MessageReactionCountPacket`](./MessageReactionCountPacket.md)

#### my_chat_member? : [`ChatMemberUpdatedPacket`](./ChatMemberUpdatedPacket.md)

#### poll? : [`PollPacket`](./PollPacket.md)

#### poll_answer? : [`PollAnswerPacket`](./PollAnswerPacket.md)

#### pre_checkout_query? : [`PreCheckoutQueryPacket`](./PreCheckoutQueryPacket.md)

#### purchased_paid_media? : [`PaidMediaPurchasedPacket`](./PaidMediaPurchasedPacket.md)

#### removed_chat_boost? : `ChatBoostRemoved`

#### shipping_query? : [`ShippingQueryPacket`](./ShippingQueryPacket.md)

#### update_id : `number`
