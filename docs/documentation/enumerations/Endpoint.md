---

outline: [1,4]

next: false

prev: false

---

export Enum
# Endpoint

Available methods for parsing and receiving updates from Telegram.

## Properties

| Member | Value | Description |
| :--- | :--- | :--- |
| Poll | `0` | Default long polling method. |
| UpdatePacket | `2` | If you have your own method of receiving updates, you can manually send updates to the client instead. |
| Webhook | `1` | Instead of long polling, opens a webhook endpoint to receive updates. |
