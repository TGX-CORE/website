---

outline: [1,4]

next: false

prev: false

---

export Function
# Poll

The user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.

## Constructor
```ts
 ReplyButton.Poll( text, type )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |
| `type?` | `"quiz"` \| `"regular"` | If 'quiz' is passed, the user will be allowed to create only polls in the quiz mode. If 'regular' is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. |

Return: [ReplyButtonPayload](../../../interfaces/ReplyButtonPayload.md)
