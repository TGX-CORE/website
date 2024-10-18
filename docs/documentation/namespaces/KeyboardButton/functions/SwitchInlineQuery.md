---

outline: [1,4]

next: false

prev: false

---

export Function
# SwitchInlineQuery

## Constructor
 ```ts
 KeyboardButton.SwitchInlineQuery( text, switch_inline_query )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |
| `switch_inline_query` | `string` | If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. |

Return: [KeyboardButtonPayload](../../../interfaces/KeyboardButtonPayload.md)
