---

outline: [1,4]

next: false

prev: false

---

export Class
# InlineQuery
#### extends
 `BaseClass`<[`InlineQuery`](./InlineQuery.md), [`InlineQueryPacket`](../interfaces/InlineQueryPacket.md)>
#### implements
 [`InlineQueryPacket`](../interfaces/InlineQueryPacket.md)

Represents an incoming inline query.

## Constructor
```ts
 new InlineQuery( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | The client of the incoming inline query. |
| `packet` | [`InlineQueryPacket`](../interfaces/InlineQueryPacket.md) | The packet of the incoming inline query. |

## Properties

#### $get user : [`User`](./User.md)

#### chat_type? : `"private"` \| `"group"` \| `"supergroup"` \| `"channel"`

#### $readonly client : [`Client`](./Client.md)

#### from : [`User`](./User.md)

#### id : `string`

#### location? : [`LocationPacket`](../interfaces/LocationPacket.md)

#### offset : `string`

#### query : `string`

## Methods

#### $asyncanswer( results, button, next_offset, is_personal, cache_time )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `results` | [`InlineQueryResults`](./InlineQueryResults.md) | Array of results for the inline query |
| `button?` | [`InlineQueryResultButtonType`](../type-aliases/InlineQueryResultButtonType.md) | The button to be shown above inline query results |
| `next_offset?` | `string` | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. |
| `is_personal?` | `boolean` | If results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. |
| `cache_time?` | `number` | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. |
> Sends an array of results to the inline query.
> 
> Returns: `Promise`<`boolean`>
