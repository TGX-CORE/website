# Invoices

- Set up the auxiliries folder, you may visit this [guide](./).

- Let's create an `Invoices` auxiliary to store our invoices.

::: danger
Make sure to [`set the provider token`](http://localhost:5173/guidebook/Payments/#set-the-token-for-the-client) for your client, this is required for sending an invoice.
:::

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

        invoices.create('invoice_1', // invoice-id
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

## Direct access

After setting up your auxiliary, you can access your invoices via; with only providing the invoice-id.

```ts
await client.invoices.send('<invoice-id>', '<chat-id>')
```

```ts
await chat.sendInvoice('<invoice-id>')
```

```ts
await message.replyInvoice('<invoice-id>')
```

## Generative access

You can use `client.invoices.generate(<invoice-id>)` to generate a invoice payload as it returns the [`Invoice`](../../../documentation/classes/Invoice) class.

```ts
await chat.send(MessagePayloadMethod.Invoice, {
    invoice: client.invoices.generate('<invoice-id>')
})
```

Parameters that requires a `SendInvoicePayload` type, can be provided with the [`Invoice`](../../documentation/classes/Invoice) class from the auxiliary.
For example:

```ts
inlineQuery.answer(new InlineQueryResults(
   new QueryResult.Article({
        id: 'invoice_1',
        title: 'Purchase Limited Edition Chibi!',
        input_message_content: new InputMessage.Invoice(this.client.invoices.generate('invoice_1'))
    })
))
```