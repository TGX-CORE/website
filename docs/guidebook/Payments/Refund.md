# Refund

Refunds are only available for Telegram Stars.

```ts
Client.on(ClientEvent.SuccessfulPayment, ( succesfulPayment ) => {
    successfulPayment.refund()
})
```