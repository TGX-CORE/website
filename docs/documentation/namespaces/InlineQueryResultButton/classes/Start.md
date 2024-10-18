---

outline: [1,4]

next: false

prev: false

---

export Class
# Start
#### extends
 `Builder`

[Deep-linking](https://core.telegram.org/bots/features#deep-linking) parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.

## Constructor
 ```ts
 new InlineQueryResultButton.Start( text, start_parameter )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |
| `start_parameter` | `string` | Parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. |
