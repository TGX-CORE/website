# Successful Payment

It is your responsibility on how to handle successfult payments, so is storing the invoices for future disputes. When sending an invoice thus the user has paid, it will be transformed into a receipt.

```ts
Client.on(ClientEvent.SuccessfulPayment, ( succesfulPayment ) => {
    // -- Your code here --
})
```