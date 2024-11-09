---
outline: 'deep'
---
# Invoices Auxiliary

## PreRequisites
Before continuing, you should've set up your [`root folder`](../../Additional%20Features/Extensions/Build-In%20Extensions/Registries#root-folder) and have read the [`introduction`](../../Additional%20Features/Extensions/Build-In%20Extensions/Registries#auxiliaries) to auxiliaries.

## Example 
::: danger
Make sure to [`set the provider token`](../../Additional%20Features/Payments/#set-the-token-for-the-client) for your client, this is required for sending an invoice.
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

#### Relevant Links
- ###### Class: [`Invoice`](../../../documentation/classes/Invoice)

## Direct access

After setting up your auxiliary, you can access your invoices via;
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

You can use `client.invoices.generate('<invoice-id>')` to generate a invoice payload as it returns the [`Invoice`](../../../documentation/classes/Invoice) class.

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
