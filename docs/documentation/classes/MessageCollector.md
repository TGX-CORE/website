---

outline: [1,4]

next: false

prev: false

---

export Class
# MessageCollector
#### extends
 [`Collector`](./Collector.md)<[`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md), `number`, [`Message`](./Message.md)>

## Constructor
```ts
 new MessageCollector( chat, options )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`Chat`](../type-aliases/Chat.md) | |
| `options?` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | |

## Properties

#### $get endReason : `undefined` \| `string`

#### $get next : `Promise`<[`Message`](./Message.md)>

#### chat : [`Chat`](../type-aliases/Chat.md)

#### $readonly client : [`Client`](./Client.md)

#### collection : `Collection`<`number`, `any`>

#### ended : `boolean`

#### filter : `CollectorFilter`

#### options : `undefined` \| [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md)

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

#### collect( message )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message` | [`Message`](./Message.md) | |
> 
> 
> Returns: `null` \| `number`

#### dispose( message )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message` | [`Message`](./Message.md) | |
> 
> 
> Returns: `null` \| `number`

#### $asynchandleCollect( collect )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `collect` | [`Message`](./Message.md) | |
> 
> 
> Returns: `Promise`<`void`>

#### $asynchandleDispose( dispose )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `dispose` | [`Message`](./Message.md) | |
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
