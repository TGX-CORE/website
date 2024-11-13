---

outline: [1,4]

next: false

prev: false

---

export Class
# ShippingOptions
#### extends
 `Builder`

## Constructor
```ts
 new ShippingOptions( ...shippings )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...shippings` | [`ShippingOptionPayload[]`](../interfaces/ShippingOptionPayload.md) | Available shipping options for flexible invoices. |

## Methods

#### add( id, title, prices )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Shipping option identifier |
| `title` | `string` | Shipping option title. |
| `prices` | [`LabeledPrices`](./LabeledPrices.md) \| [`LabeledPrice[]`](../interfaces/LabeledPrice.md) | List of price portions. |
> Adds a new shipping option.
> 
> Returns: [`ShippingOptions`](./ShippingOptions.md)
