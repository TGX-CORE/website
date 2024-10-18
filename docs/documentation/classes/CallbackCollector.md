---

outline: [1,4]

next: false

prev: false

---

export Class
# CallbackCollector
#### extends
 [`Collector`](./Collector.md)\<[`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md), `string`, [`CallbackQuery`](./CallbackQuery.md)\>

## Constructor
 ```ts
 new CallbackCollector( message, options )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `message` | [`Message`](./Message.md) | |
| `options` | [`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md) | |

## Properties

#### $get endReason : `undefined` \| `string`

#### $get next : `Promise`\<[`Message`](./Message.md)\>

#### $readonly client : [`Client`](./Client.md)

#### collection : `Collection`\<`string`, `any`\>

#### ended : `boolean`

#### filter : [`CollectorFilter`](../type-aliases/CollectorFilter.md)

#### message : [`Message`](./Message.md)

#### options : [`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md)

#### received : `number`

## Methods

#### [asyncIterator]( )

Returns: `AsyncGenerator`\<`unknown`, `void`, `unknown`\>

#### checkEnd( )

Returns: `boolean`

#### collect( query )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `query` | [`CallbackQuery`](./CallbackQuery.md) | |

Returns: `null` \| `string`

#### dispose( query )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `query` | [`CallbackQuery`](./CallbackQuery.md) | |

Returns: `null` \| `string`

#### $asynchandleCollect( collect )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `collect` | [`CallbackQuery`](./CallbackQuery.md) | |

Returns: `Promise`\<`void`\>

#### $asynchandleDispose( dispose )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `dispose` | [`CallbackQuery`](./CallbackQuery.md) | |

Returns: `Promise`\<`void`\>

#### stop( reason )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `reason` = `'user'` | `string` | |

Returns: `void`
