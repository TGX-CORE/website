---

outline: [1,4]

next: false

prev: false

---

export Class
# InvoicesManager
#### extends
 `CachedManager`\<`string`, [`Invoice`](./Invoice.md)\>

## Constructor
 ```ts
 new InvoicesManager( client )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get cache : `Collection`\<`CachedManager.K`, `CachedManager.V`\>

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

#### provider_token? : `string`
 The token provided by your payment provider for payments.

## Methods

#### _add( data, cache, param2 )
Add data with cache check to the current manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `any` | The data to add to the cache manager. |
| `cache` = `true` | `boolean` | Pass *True* to cache the data. |
| `param2` = `{}` | `any` | Additional data to pass. |

Returns: `any`

#### create( id, invoice )
Creates an invoice and store it in the manger.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoices to store as. |
| `invoice` | [`Invoice`](./Invoice.md) | The payload of the invoice. |

Returns: `any`

#### $asynccreateLink( id, payload )
Creates an invoice link and store it in the manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoices to store as. |
| `payload` | [`CreateInvoiceLinkPayload`](../interfaces/CreateInvoiceLinkPayload.md) | The payload of the invoice link. |

Returns: `Promise`\<`string` \| `boolean`\>

#### generate( id )
Returns an invoice link or an invoice with complete details such as payment_provider, but excluding chat ids.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |

Returns: `String` \| `Boolean` \| `Partial`\<[`SendInvoicePayload`](../interfaces/SendInvoicePayload.md)\>

#### $asyncsend( id, chat_id )
This will only work with invoices and not link invoices!
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |
| `chat_id` | `number` | The target chat to send the invoice to. |

Returns: `Promise`\<`void` \| [`Message`](./Message.md)\>

#### setToken( token )
Sets the token for the invoices generated.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` | `string` | The token provided by your payment provider for payments. |

Returns: `void`
