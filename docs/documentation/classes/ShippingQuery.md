---

outline: [1,4]

next: false

prev: false

---

export Class
# ShippingQuery
#### extends
 `BaseClass`\<[`ShippingQuery`](./ShippingQuery.md), [`ShippingQueryPacket`](../interfaces/ShippingQueryPacket.md)\>
#### implements
 [`ShippingQueryPacket`](../interfaces/ShippingQueryPacket.md)

## Constructor
 ```ts
 new ShippingQuery( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ShippingQuery`](./ShippingQuery.md) | |

## Properties

#### $get user : [`User`](./User.md)

#### $readonly client : [`Client`](./Client.md)

#### from? : [`UserPacket`](../interfaces/UserPacket.md)

#### id : `string`

#### invoice_payload : `string`

#### shipping_address : [`ShippingAddress`](../interfaces/ShippingAddress.md)

## Methods

#### $asyncnotOk( error_message )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `error_message` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncok( shipping_options )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `shipping_options` | [`ShippingOptions`](./ShippingOptions.md) | |

Returns: `Promise`\<`boolean`\>
