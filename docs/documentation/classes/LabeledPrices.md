---

outline: [1,4]

next: false

prev: false

---

export Class
# LabeledPrices
#### extends
 `Builder`

## Constructor
 ```ts
 new LabeledPrices( ...prices )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `...prices` | [`LabeledPrice[]`](../interfaces/LabeledPrice.md) | An array of labeled prices representing a portion of the price. |

## Methods

#### add( label, amount )
Adds a portion of a price to the list.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `label` | `string` | The label of the portion. |
| `amount` | `number` | The amount of the portion, see LabeledPrice for more info. |

Returns: [`LabeledPrices`](./LabeledPrices.md)
