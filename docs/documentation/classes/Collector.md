---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# Collector
#### extends
 `EventEmitter`

## Constructor
```ts
 new Collector( client, options )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `options?` | `Collector.O` | |

## Properties

#### $get endReason : `undefined` \| `string`

#### $get next : `Promise`<[`Message`](./Message.md)>

#### $readonly client : [`Client`](./Client.md)

#### collection : `Collection`<`Collector.I`, `any`>

#### ended : `boolean`

#### filter : `CollectorFilter`

#### options : `undefined` \| `Collector.O`

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
| `collect` | `Collector.C` | |
> 
> 
> Returns: `null` \| `Collector.I`

#### dispose( dispose )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `dispose` | `Collector.C` | |
> 
> 
> Returns: `null` \| `Collector.I`

#### $asynchandleCollect( collect )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `collect` | `Collector.C` | |
> 
> 
> Returns: `Promise`<`void`>

#### $asynchandleDispose( dispose )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `dispose` | `Collector.C` | |
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
