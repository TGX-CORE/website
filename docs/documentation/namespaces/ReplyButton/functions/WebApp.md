---

outline: [1,4]

next: false

prev: false

---

export Function
# WebApp

If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.

## Constructor
 ```ts
 ReplyButton.WebApp( text, url )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | Label text on the button. |
| `url` | `string` | An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps. |

Return: [ReplyButtonPayload](../../../interfaces/ReplyButtonPayload.md)
