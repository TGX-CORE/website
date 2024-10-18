---

outline: [1,4]

next: false

prev: false

---

export Interface
# MediaGroupPayload
#### extends
 [`BaseMessagePayload`](./BaseMessagePayload.md)

## Properties

#### business_connection_id? : `string`

#### caption_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### chat_id? : `string` \| `number`

#### disable_notification? : `boolean`

#### media : `InputMediaBuilder[]`

#### message_effect_id? : `string`

#### message_thread_id? : `number`

#### parse_mode? : `string`

#### protect_content? : `boolean`

#### reply_markup? : [`InlineKeyboardMarkup`](../classes/InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](../classes/ReplyKeyboardMarkup.md) \| [`ForceReply`](../classes/ForceReply.md) \| [`ReplyKeyboardRemove`](../classes/ReplyKeyboardRemove.md)

#### reply_parameters? : [`ReplyParameters`](./ReplyParameters.md)
