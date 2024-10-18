---

outline: [1,4]

next: false

prev: false

---

export Interface
# WebhookInfo

The information about a webhook.

## Properties

#### allowed_updates? : [`AllowedUpdates[]`](../enumerations/AllowedUpdates.md)

#### has_custom_certificate : `boolean`

#### ip_address? : `string`

#### last_error_date? : `number`

#### last_error_message? : `string`

#### last_synchronization_error_date? : `number`

#### max_connections? : `number`

#### pending_update_count : `number`

#### url : `string`

## Reference
The information was provided from the [`Telegram API`](https://core.telegram.org/bots/api#webhookinfo).
