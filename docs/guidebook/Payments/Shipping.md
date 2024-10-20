# Shipping Query

For flexible invoices, where you send physical products requiring adress and offer multiple or dynamic shipping options.

If you offer flexible shipping options and have set `is_flexible` to `true` when sending your invoice. Your client will emit a `ClientEvent.ShippingQuery` event.

```ts
Client.on(ClientEvent.ShippingQuery, ( shipping ) => {

    shipping.ok(new ShippingOptions(
        ShippingOption('shipping_option_1', 'Shipping Option 1',
            new LabeledPrices()
                .add('Base Fee', '360') // $3.60
                .add('Tax', '110') // $1.10, hence the total would be 4.70
        )
    ))

    // OR

    shipping.notOk('We do not deliver to your state or country.')

})
```