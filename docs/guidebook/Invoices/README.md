# Invoices

To start accepting payments, you can send invoice to your target chat or buyer.

## Reference

For more information about invoices, visit this [documentation](https://core.telegram.org/bots/payments#step-by-step-process) from Telegram.

## Sending Invoice

TGX-Core offers a variety of methods to send an invoice.

To set up invoices via auxiliaries, visit this [guide](../Auxiliaries/Invoices). You can then access and send these invoice via:
>   ```ts
>   await client.invoices.send(<invoice-id>, <chat-id>)
>   ```

>    ```ts
>    await chat.sendInvoice(<invoice-id>)
>    ```

>   ```ts
>   await message.replyInvoice(<invoice-id>)
>   ```

You can use `client.invoices.generate(<invoice-id>)` to generate a invoice payload.

>   ```ts
>   await chat.send(MessagePayloadMethod.Invoice, {
>       invoice: client.invoices.generate(<invoice-id>)
>   })