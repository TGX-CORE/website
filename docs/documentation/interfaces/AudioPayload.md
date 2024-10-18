---

outline: [1,4]

next: false

prev: false

---

export Interface
# AudioPayload
#### extends
 [`BaseMessagePayload`](./BaseMessagePayload.md)

## Properties

#### audio : [`InputFile`](../type-aliases/InputFile.md)

#### business_connection_id? : `string`

#### caption? : `string`

#### caption_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### chat_id? : `string` \| `number`

#### disable_notification? : `boolean`

#### duration? : `number`

#### message_effect_id? : `string`

#### message_thread_id? : `number`

#### parse_mode? : `string`

#### performer? : `string`

#### protect_content? : `boolean`

#### reply_markup? : [`InlineKeyboardMarkup`](../classes/InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](../classes/ReplyKeyboardMarkup.md) \| [`ForceReply`](../classes/ForceReply.md) \| [`ReplyKeyboardRemove`](../classes/ReplyKeyboardRemove.md)

#### reply_parameters? : [`ReplyParameters`](./ReplyParameters.md)

#### thumbnail? : [`InputFile`](../type-aliases/InputFile.md)

#### title? : `string`

#### track_name? : `string`
