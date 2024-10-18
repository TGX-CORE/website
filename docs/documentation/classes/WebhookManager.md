---

outline: [1,4]

next: false

prev: false

---

export Class
# WebhookManager
#### extends
 `BaseManager`\<[`WebhookManagerOptions`](../interfaces/WebhookManagerOptions.md)\>

## Constructor
 ```ts
 new WebhookManager( client )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get endpoint : `string`

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : [`WebhookManagerOptions`](../interfaces/WebhookManagerOptions.md)

#### express : `any`

#### $static max : `number`

#### $static min : `number`

#### $readonly options : [`WebhookManagerOptions`](../interfaces/WebhookManagerOptions.md)

## Methods

#### $asyncdelete( drop_pending_updates )
Deletes the webhook from Telegram.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `drop_pending_updates?` | `boolean` | Pass True to drop all pending updates |

Returns: `Promise`\<`boolean`\>

#### $asyncget( )
Gets the webhook information from Telegram.

Returns: `Promise`\<`boolean` \| [`WebhookInfo`](../interfaces/WebhookInfo.md)\>

#### $asyncintialize( )

Returns: `Promise`\<`void`\>

#### $asyncset( options )
Updates the webhook on the Telegram api.

The following values are taken from options: drop_pending_updates, secret_token, max_connections, ip_address, certificate.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` = `...` | [`WebhookManagerOptions`](../interfaces/WebhookManagerOptions.md) | |

Returns: `Promise`\<`boolean`\>
