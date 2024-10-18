---

outline: [1,4]

next: false

prev: false

---

export Function
# WebAppInfo

## Constructor
 ```ts
 KeyboardButton.WebAppInfo( text, web_app )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |
| `web_app` | [`WebAppInfo`](../../../interfaces/WebAppInfo.md) | Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account. |

Return: [KeyboardButtonPayload](../../../interfaces/KeyboardButtonPayload.md)
