# Accepting Payments

## Sending Invoice

TGX-Core offers a variety of methods to send an invoice.

```ts
await message.send(MessagePayloadMethod.Invoice, ...)
```
```ts
await message.client.invoices.send(...)
```
```ts
await inlineQuery.answer(InlinequeryResultArticle({
                id: 'invoice',
                title: 'Purchase a product.',
                input_message_content: Input.Invoice(...)
}))
```