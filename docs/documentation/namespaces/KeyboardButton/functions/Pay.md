---

outline: [1,4]

next: false

prev: false

---

export Function
# Pay

To send a Pay button. Substrings “⭐” and “XTR” in the button's text will be replaced with a Telegram Star icon.

NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.

## Constructor
 ```ts
 KeyboardButton.Pay( text )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |

Return: [KeyboardButtonPayload](../../../interfaces/KeyboardButtonPayload.md)
