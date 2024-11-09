---

outline: [1,4]

next: false

prev: false

---

export Function
# Url

## Constructor
```ts
 KeyboardButton.Url( text, url )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |
| `url` | `string` | HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=user_id can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings. |

Return: [KeyboardButtonPayload](../../../interfaces/KeyboardButtonPayload.md)
