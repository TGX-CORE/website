---

outline: [1,4]

next: false

prev: false

---

export Class
# Poll
#### extends
 `BaseClass`<[`Poll`](./Poll.md), [`PollPacket`](../interfaces/PollPacket.md)>
#### implements
 `Partial`<[`PollPacket`](../interfaces/PollPacket.md)>

## Constructor
 ```ts
 new Poll( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`PollPacket`](../interfaces/PollPacket.md) | |

## Properties

#### $get chat : `undefined` \| [`BaseChat`](./BaseChat.md)

#### allows_multiple_answers : `boolean`

#### answers? : [`PollAnswers`](./PollAnswers.md)

#### business_connection_id? : `string`

#### chat_id? : `number`

#### $readonly client : [`Client`](./Client.md)

#### close_date? : `number`

#### correct_option_id? : `number`

#### explanation? : `string`

#### explanation_entities? : [`MessageEntities`](./MessageEntities.md) \| [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### id : `string`

#### is_anonymous : `boolean`

#### is_closed : `boolean`

#### message_id? : `number`

#### open_period? : `number`

#### options : [`PollOption[]`](../interfaces/PollOption.md)

#### question : `string`

#### question_entities : [`MessageEntities`](./MessageEntities.md) \| [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### total_voter_count : `number`

#### type : `"regular"` \| `"quiz"`

## Methods

#### $asyncstop( reply_markup )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `reply_markup?` | [`InlineKeyboardMarkup`](./InlineKeyboardMarkup.md) | |
> 
> 
> Returns: `Promise`<`boolean`>
