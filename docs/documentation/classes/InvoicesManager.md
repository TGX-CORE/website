---

outline: [1,4]

next: false

prev: false

---

export Class
# InvoicesManager
#### extends
 `CachedManager`<`string`, [`Invoice`](./Invoice.md)>

## Constructor
```ts
 new InvoicesManager( client )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### $get defaults : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

#### provider_token? : `string`
 > The token provided by your payment provider for payments.

## Methods

#### _add( data, cache, param2 )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `any` | The data to add to the cache manager. |
| `cache` = `true` | `boolean` | Pass *True* to cache the data. |
| `param2` = `{}` | `any` | Additional data to pass. |
> Add data with cache check to the current manager.
> 
> Returns: `any`

#### create( id, invoice )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoices to store as. |
| `invoice` | [`Invoice`](./Invoice.md) | The payload of the invoice. |
> Creates an invoice and store it in the manger.
> 
> Returns: `any`

#### $asynccreateLink( id, payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoices to store as. |
| `payload` | [`CreateInvoiceLinkPayload`](../interfaces/CreateInvoiceLinkPayload.md) | The payload of the invoice link. |
> Creates an invoice link and store it in the manager.
> 
> Returns: `Promise`<`string` \| `boolean`>

#### generate( id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |
> Returns an invoice link, invoice or false if the invoice is not found.
> 
> Returns: `false` \| `String` \| `Partial`<[`Invoice`](./Invoice.md)>

#### $asyncsend( id, chat_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |
| `chat_id` | `number` | The target chat to send the invoice to. |
> This will only work with invoices and not link invoices!
> 
> Returns: `Promise`<`null` \| [`Message`](./Message.md)>

#### setToken( token )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` | `string` | The token provided by your payment provider for payments. |
> Sets the token for the invoices generated.
> 
> Returns: `void`
