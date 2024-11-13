---

outline: [1,4]

next: false

prev: false

---

export Class
# CallbackCollector
#### extends
 [`Collector`](./Collector.md)<[`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md), `string`, [`CallbackQuery`](./CallbackQuery.md)>

## Constructor
```ts
 new CallbackCollector( chat, options )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`Chat`](../type-aliases/Chat.md) | |
| `options?` | [`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md) | |

## Properties

#### $get endReason : `undefined` \| `string`

#### $get next : `Promise`<[`Message`](./Message.md)>

#### chat : [`Chat`](../type-aliases/Chat.md)

#### $readonly client : [`Client`](./Client.md)

#### collection : `Collection`<`string`, `any`>

#### ended : `boolean`

#### filter : `CollectorFilter`

#### options : `undefined` \| [`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md)

#### received : `number`

## Methods

#### [asyncIterator]( )

> 
> 
> Returns: `AsyncGenerator`<`unknown`, `void`, `unknown`>

#### checkEnd( )

> 
> 
> Returns: `boolean`

#### collect( collect )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `collect` | [`CallbackQuery`](./CallbackQuery.md) | |
> 
> 
> Returns: `null` \| `string`

#### dispose( collect )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `collect` | [`CallbackQuery`](./CallbackQuery.md) | |
> 
> 
> Returns: `null` \| `string`

#### $asynchandleCollect( collect )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `collect` | [`CallbackQuery`](./CallbackQuery.md) | |
> 
> 
> Returns: `Promise`<`void`>

#### $asynchandleDispose( dispose )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `dispose` | [`CallbackQuery`](./CallbackQuery.md) | |
> 
> 
> Returns: `Promise`<`void`>

#### stop( reason )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `reason` = `'user'` | `string` | |
> 
> 
> Returns: `void`
