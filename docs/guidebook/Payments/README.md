# Payments

Telegram has now supported payments for your mini-apps.

To accept payments;

- You send an invoice to the chat or user.
> Refer to [`Sending Invoice`](./Sending%20Invoice)

- For flexible invoices that accept shipping options,
> Refer to [`ShippingQuery`](./Shipping)

- For finalization, you send a ok or notOk to precheckout event wether to accept or reject the invoice.
> Refer to [`PreCheckout`](./PreCheckout)

- For succesful payments, handle the event.
> Refer to [`SuccessfulPayment`](./Succesful%20Payment)

## Payment Provider

To start accepting payments, you'll need a payment provider.

::: info Getting a Token
- Use the /mybots command in the chat with BotFather and choose the @merchantbot that will be offering goods or services.
- Go to Bot Settings > Payments.
- Choose a provider, and you will be redirected to the relevant bot.
- Enter the required details so that the payments provider is connected successfully, go back to the chat with Botfather.
- The message will now show available providers. Each will have a name, a token, and the date the provider was connected.
- You will use the token when working with the Bot API.
:::

Set the token for the client;

```ts
Client.invoices.setToken(<provider_token>)

// OR

Client.intialize(<token>, <provider_token>)
```

## Reference
The information was provided by the Telegram's bot API documentation; [`TelegramAPI#connecting-payments`](https://core.telegram.org/bots/payments#connecting-payments).