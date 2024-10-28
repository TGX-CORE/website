# Endpoint Methods

TGX-CORE Offers three methods while Telegram offers two.

- To set the enpoint method, set the option endpoint in [`ClientOptions#endpoint`](../../documentation/interfaces/ClientOptions#endpoint-endpoint)

## Long Polling
Long polling is the simplest way of having persistent connection with server, that doesn’t use any specific protocol like WebSocket or Server Sent Events.

This is the default method set for TGX-CORE.

## Webhook
Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, Telegram will send an HTTPS POST request to the specified URL.

```js
new Client({

    endpoint: Endpoint.Webhook,

    webhook: {
        url: 'https://host-website.com', // https://host-website.com/webhook
        endpoint: '/webhook', // This is the default value.

        url: 'https://host-website.com/path', // https://host-website.com/path/endpoint
        endpoint: '/endpoint',

        port: 8080
    },

})
```

## Update Packet
If these methods are insufficient with your needs, you may implement your own method and then passing that update to the [`Client#poll#handle`](../../documentation/classes/PollManager#handle-update).

```js
new Cleint ({

    endpoint: Endpoint.UpdatePacket

})
```
```js
client.poll.handle(update)
```

## Reference
The information was provided by Telegram's bot API documentation, [`TelegramAPI#getting-updates`](https://core.telegram.org/bots/api#getting-updates)