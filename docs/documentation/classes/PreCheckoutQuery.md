---

outline: [1,4]

next: false

prev: false

---

export Class
# PreCheckoutQuery
#### extends
 `BaseClass`\<[`PreCheckoutQuery`](./PreCheckoutQuery.md), [`PreCheckoutQueryPacket`](../interfaces/PreCheckoutQueryPacket.md)\>
#### implements
 [`PreCheckoutQueryPacket`](../interfaces/PreCheckoutQueryPacket.md)

## Constructor
 ```ts
 new PreCheckoutQuery( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`PreCheckoutQuery`](./PreCheckoutQuery.md) | |

## Properties

#### $get user : [`User`](./User.md)

#### $readonly client : [`Client`](./Client.md)

#### currency : `string`

#### from? : [`UserPacket`](../interfaces/UserPacket.md)

#### id : `string`

#### invoice_payload : `string`

#### order_info? : [`OrderInfo`](../interfaces/OrderInfo.md)

#### shipping_option_id? : `string`

#### total_amount : `number`

## Methods

#### $asyncnotOk( error_message )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `error_message` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncok( )

Returns: `Promise`\<`boolean`\>
