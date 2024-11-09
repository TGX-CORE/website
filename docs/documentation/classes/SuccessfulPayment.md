---

outline: [1,4]

next: false

prev: false

---

export Class
# SuccessfulPayment
#### extends
 `BaseClass`<[`SuccessfulPayment`](./SuccessfulPayment.md), [`SerializedSuccessfulPayment`](../interfaces/SerializedSuccessfulPayment.md)>
#### implements
 [`SerializedSuccessfulPayment`](../interfaces/SerializedSuccessfulPayment.md)

## Constructor
```ts
 new SuccessfulPayment( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`SerializedSuccessfulPayment`](../interfaces/SerializedSuccessfulPayment.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get message : [`Message`](./Message.md)

#### $get user : [`User`](./User.md)

#### chat_id? : `number`

#### $readonly client : [`Client`](./Client.md)

#### currency : `string`

#### from? : [`UserPacket`](../interfaces/UserPacket.md)

#### invoice_payload : `string`

#### message_id : `number`

#### order_info? : [`OrderInfo`](../interfaces/OrderInfo.md)

#### provider_payment_charge_id : `string`

#### shipping_option_id? : `number`

#### telegram_payment_charge_id : `string`

#### total_amount : `number`

#### user_id? : `number`

## Methods

#### $asyncrefund( )

> 
> 
> Returns: `Promise`<`boolean`>
