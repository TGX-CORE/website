---

outline: [1,4]

next: false

prev: false

---

export Interface
# WebhookManagerOptions

## Properties

#### certificate? : `string` \| [`File`](../classes/File.md)
 > Set the relative path to the file to set as your public key certificate.

#### drop_pending_updates? : `boolean`

#### endpoint? : `string`
 > The endpoint of the path the client will listen in e.g: /webhook -> https://example.com/webhook

#### ip_address? : `string`

#### max_connections? : `number`

#### port? : `number`
 > Set the port, it is randomized if empty, min 1024, max 65535.

#### secret_token? : `string`

#### update? : `boolean`

#### url? : `string`
 > Must be set with your current host, e.g: https://example.com -> https://example.com/webhook

## Reference
The information was provided from the [`Telegram API`](https://core.telegram.org/bots/api#setwebhook).
