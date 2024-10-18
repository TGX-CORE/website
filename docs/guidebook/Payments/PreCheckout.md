# PreCheckoutQuery

For finalization, you can put your code for final check. This step is crucial in the process of the payment; before the `ClientEvent.SuccesfulPayment`, a `ClientEvent.PreCheckoutQuery` is received.

```ts
Client.on(ClientEvent.PreCheckoutQuery, ( precheckout ) => {
 
    precheckout.ok()
    // OR
    precheckout.notOk('The bot is currently not accepting orders.')

})
```