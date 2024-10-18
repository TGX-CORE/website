---

outline: [1,4]

next: false

prev: false

---

export Interface
# PollPacket

## Properties

#### allows_multiple_answers : `boolean`

#### business_connection_id? : `string`

#### chat_id? : `number`

#### close_date? : `number`

#### correct_option_id? : `number`

#### explanation? : `string`

#### explanation_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### id : `string`

#### is_anonymous : `boolean`

#### is_closed : `boolean`

#### message_id? : `number`

#### open_period? : `number`

#### options : [`PollOption[]`](./PollOption.md)

#### question : `string`

#### question_entities : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)

#### total_voter_count : `number`

#### type : `"regular"` \| `"quiz"`
