# Auxiliary Registries

With auxiliary registries, you can organize your data and code neatly.

- Just create a folder names `auxiliaries` in your designated working directory.
- You may create or add folders and files.
- Let's create an `invoice` auxiliary to store our invoices.

```js
const { Auxiliary, Auxiliaries, LabeledPrices } = require('tgx-core')

class Invoices extends Auxiliary {

    constructor(context, options){
        super(context, {
            ...options,
            name: Auxiliaries.Invoices
        })
    }

    load(invoices){

        invoices.create('invoice_id_1', {
            payload: 'invoice_id_1',
            title: 'Test Product',
            description: 'This is a test product for sending invoices.',
            currency: 'USD',
            prices: new LabeledPrices()
                .add('Price', '1480') // $14.80
        })
        
    }
}

module.exports = Invoices
```