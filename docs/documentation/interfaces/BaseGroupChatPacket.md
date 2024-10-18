---

outline: [1,4]

next: false

prev: false

---

export Interface
# BaseGroupChatPacket

## Properties

#### accent_color_id? : `number`

#### active_usernames? : `string[]`

#### available_reactions? : [`ReactionType[]`](../type-aliases/ReactionType.md)

#### background_custom_emoji_id? : `string`

#### can_send_paid_media? : `true`

#### can_set_sticker_set? : `true`

#### custom_emoji_sticker_set_name? : `string`

#### description? : `string`

#### has_aggressive_anti_spam_enabled? : `true`

#### has_hidden_members? : `true`

#### has_protected_content? : `true`

#### has_visible_history? : `true`

#### id : `number`

#### invite_link? : `string`

#### is_forum? : `true`

#### join_by_request? : `true`

#### join_to_send_messages? : `true`

#### linked_chat_id? : `number`

#### location? : [`ChatLocation`](./ChatLocation.md)

#### max_reaction_count? : `number`

#### message_auto_delete_time? : `number`

#### permissions? : [`ChatPermissions`](../classes/ChatPermissions.md)

#### photo? : [`ChatPhoto`](./ChatPhoto.md)

#### pinned_message? : [`Message`](../classes/Message.md)

#### profile_accent_color_id? : `number`

#### profile_background_custom_emoji_id? : `string`

#### slow_mode_delay? : `number`

#### sticker_set_name? : `string`

#### title? : `string`

#### type : `"channel"` \| `"group"` \| `"supergroup"`

#### unrestrict_boost_count? : `number`

#### username? : `string`
