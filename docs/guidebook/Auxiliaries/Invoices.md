# Invoices

- Set up the auxiliries folder, you may visit this [guide](../Registries/Auxiliaries).

- Let's create an `Invoices` auxiliary to store our invoices.

```js
const { Auxiliary, Auxiliaries, Invoice } = require('tgx-core')

class Invoices extends Auxiliary {

    constructor(context, options){
        super(context, {
            ...options,
            name: Auxiliaries.Invoices
        })
    }

    load(invoices){

        invoices.create('invoice_1', 
            new Invoice(
                'Limited Edition Chibi', // title
                'Get this limited adition chibi!', // description
                'usd', // currency
            )
            .addPrice('Chibi', '1480') // $14.80
            .addPrice('Tax', '180') // $1.80, hence the total would be $16.6
        )
        
    }
}

module.exports = Invoices
```