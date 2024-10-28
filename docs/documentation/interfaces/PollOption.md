---

outline: [1,4]

next: false

prev: false

---

export Interface
# PollOption

Represents an option of a poll to be sent.

## Properties

#### text : `string`
 > Option text, 1-100 characters

#### text_entities? : [`MessageEntities`](../classes/MessageEntities.md) \| [`MessageEntityPayload[]`](./MessageEntityPayload.md)
 > List of special entities that appear in the poll option text. It can be specified instead of text_parse_mode.

#### text_parse_mode? : `string`
 > Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed.
