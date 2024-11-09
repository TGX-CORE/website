---

outline: [1,4]

next: false

prev: false

---

export Interface
# VoicePayload
#### extends
 [`BaseMessagePayload`](./BaseMessagePayload.md)

## Properties

#### allow_paid_broadcast? : `boolean`

#### business_connection_id? : `string`

#### caption? : `string`

#### caption_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### chat_id? : `string` \| `number`

#### disable_notification? : `boolean`

#### duration? : `number`

#### message_effect_id? : `string`

#### message_thread_id? : `number`

#### parse_mode? : `string`

#### protect_content? : `boolean`

#### reply_markup? : [`InlineKeyboardMarkup`](../classes/InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](../classes/ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](../classes/ReplyKeyboardRemove.md) \| [`ForceReply`](../classes/ForceReply.md)

#### reply_parameters? : [`ReplyParameters`](./ReplyParameters.md)

#### voice : [`InputFile`](../type-aliases/InputFile.md)
