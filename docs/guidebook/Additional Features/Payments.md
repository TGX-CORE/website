---
outline: 'deep'
---
# Payments

Telegram has now supported payments for your mini-apps. To start receiving payments, we need to have a payment provider.

### Payment Provider

####  Enabling Payments
::: info Enabling Payments
- Use the /mybots command in the chat with BotFather and choose the @merchantbot that will be offering goods or services.
- Go to Bot Settings > Payments.
- Choose a provider, and you will be redirected to the relevant bot.
- Enter the required details so that the payments provider is connected successfully, go back to the chat with Botfather.
- The message will now show available providers. Each will have a name, a token, and the date the provider was connected.
- You will use the token when working with the Bot API.
:::

#### Set the token for the client;

You may store your provider token in your environmental variables. See [`Client.initialize`](../../documentation/classes/Client#asyncintialize-token-provider-token).
```js
Client.invoices.setToken('<provider_token>')
```
```js
Client.intialize('<token>', '<provider_token>')
```

## Accepting Payments
To accept payments, you can follow this step-by-step guide;

### Sending an invoice
`tgx-core` offers multiple methods to send an invoice to your target chats and users. 

- You can store invoice via [`auxiliary`](../Registries/Auxiliaries/Invoices).
- You can send the [`Invoice`](../../documentation/classes/Invoice) class.
```js
chat.send(MessagePayloadMethod.Invoice, {
    invoice: new Invoice(...)
})
```

### Shipping

For flexible invoices, where you send physical products requiring adress and offer multiple or dynamic shipping options.

If you offer flexible shipping options and have set `is_flexible` to `true` when sending your invoice. Your client will emit a `ClientEvent.ShippingQuery` event.

::: code-group
```ts [ok]
Client.on(ClientEvent.ShippingQuery, ( shipping ) => {
    return shipping.ok(new ShippingOptions(
        ShippingOption('shipping_option_1', 'Shipping Option 1',
            new LabeledPrices()
                .add('Base Fee', '360') // $3.60
                .add('Tax', '110') // $1.10, hence the total would be 4.70
        )
    ))
})
```
```js [notOk]
Client.on(ClientEvent.ShippingQuery, ( shipping ) => {
    return shipping.notOk('We do not deliver to your state or country.')
})
```
:::

### PreCheckout
For finalization, you can put your code for final checking. This step is crucial in the process of the payment; before the `ClientEvent.SuccesfulPayment`, a `ClientEvent.PreCheckoutQuery` is received. Similarly to accepting shipping, you send an ok or not Ok.

::: code-group
```js [ok]
Client.on(ClientEvent.PreCheckoutQuery, ( precheckout ) => {
    return precheckout.ok()
})
```
```js [notOk]
Client.on(ClientEvent.PreCheckoutQuery, ( precheckout ) => {
    return precheckout.notOk('The bot is currently not accepting orders.')
})
```
:::

### Successful Payment

It is your responsibility on how to handle successfult payments, so is storing the invoices for future disputes. When sending an invoice thus the user has paid, it will be transformed into a receipt.

```ts
Client.on(ClientEvent.SuccessfulPayment, ( succesfulPayment ) => {
    // -- Your code here --
})
```

### Reference
The information was provided by the Telegram's bot API documentation;
<br> [`Payments Step-by-step`](https://core.telegram.org/bots/payments#step-by-step-process).

## Reference
The information was provided by the Telegram's bot API documentation; [`TelegramAPI#connecting-payments`](https://core.telegram.org/bots/payments#connecting-payments).