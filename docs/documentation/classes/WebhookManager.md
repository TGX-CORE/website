---

outline: [1,4]

next: false

prev: false

---

export Class
# WebhookManager
#### extends
 `BaseManager`

## Constructor
```ts
 new WebhookManager( client, pointer, defaults )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `pointer?` | `string` | |
| `defaults?` | `any` | |

## Properties

#### $get defaults : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### $asyncdelete( drop_pending_updates )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `drop_pending_updates?` | `boolean` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncget( )

> 
> 
> Returns: `Promise`<`boolean` \| [`WebhookInfo`](../interfaces/WebhookInfo.md)>

#### $asyncset( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`WebhookEndpointOptions`](../interfaces/WebhookEndpointOptions.md) \| `WebhookCluster` | |
> 
> 
> Returns: `Promise`<`boolean`>
