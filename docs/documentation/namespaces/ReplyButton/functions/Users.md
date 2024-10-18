---

outline: [1,4]

next: false

prev: false

---

export Function
# Users

## Constructor
 ```ts
 ReplyButton.Users( text, request_users )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |
| `request_users` | [`RequestUsers`](../../../interfaces/RequestUsers.md) | Pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only. |

Return: [ReplyButtonPayload](../../../interfaces/ReplyButtonPayload.md)
