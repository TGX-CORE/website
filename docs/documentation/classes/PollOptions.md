---

outline: [1,4]

next: false

prev: false

---

export Class
# PollOptions
#### extends
 `Builder`

## Constructor
 ```ts
 new PollOptions( ...options )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `...options` | [`PollOption[]`](../interfaces/PollOption.md) | The options of a poll to be sent. |

## Methods

#### add( text, text_parse_mode, text_entities )
Adds an option to the current builder.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Option text, 1-100 characters |
| `text_parse_mode?` | `string` | Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed. |
| `text_entities?` | [`MessageEntities`](./MessageEntities.md) \| [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md) | List of special entities that appear in the poll option text. It can be specified instead of text_parse_mode. |

Returns: [`PollOptions`](./PollOptions.md)
