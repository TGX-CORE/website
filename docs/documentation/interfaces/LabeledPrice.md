---

outline: [1,4]

next: false

prev: false

---

export Interface
# LabeledPrice

Represents a portion of a price.

## Properties

#### amount : `number`
 Price of the product in the smallest units of the [currency](https://core.telegram.org/bots/payments#supported-currencies) (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145.

See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).

#### label : `string`
 The label of the portion of the price.

An example of the label would be; Base Shipping Fee, Taxes, Transaction Fee, etc.
