---

outline: [1,4]

next: false

prev: false

---

export Interface
# PollPayload
#### extends
 [`BaseMessagePayload`](./BaseMessagePayload.md)

## Properties

#### allow_paid_broadcast? : `boolean`

#### allows_multiple_answers? : `boolean`

#### business_connection_id? : `string`

#### caption_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### chat_id? : `string` \| `number`

#### close_date? : `number`

#### correct_option_id? : `number`

#### disable_notification? : `boolean`

#### explanation? : `string`

#### explanation_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### explanation_parse_mode? : `string`

#### is_anonymous? : `boolean`

#### is_closed? : `boolean`

#### message_effect_id? : `string`

#### message_thread_id? : `number`

#### open_period? : `number`

#### options : [`PollOptions`](../classes/PollOptions.md) \| [`PollOption[]`](./PollOption.md)

#### parse_mode? : `string`

#### protect_content? : `boolean`

#### question : `string`

#### question_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### question_parse_mode? : `string`

#### reply_markup? : [`InlineKeyboardMarkup`](../classes/InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](../classes/ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](../classes/ReplyKeyboardRemove.md) \| [`ForceReply`](../classes/ForceReply.md)

#### reply_parameters? : [`ReplyParameters`](./ReplyParameters.md)

#### type? : `"quiz"` \| `"regular"`
