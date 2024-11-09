---

outline: [1,4]

next: false

prev: false

---

export Class
# ReplyKeyboardMarkup
#### extends
 [`Builder`](./Builder.md)

This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.

## Constructor
```ts
 new ReplyKeyboardMarkup( is_persistent, resize_keyboard, one_time_keyboard, input_field_placeholder, selective )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `is_persistent?` | `boolean` | Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. |
| `resize_keyboard?` | `boolean` | Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. |
| `one_time_keyboard?` | `boolean` | Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. |
| `input_field_placeholder?` | `string` | The placeholder to be shown in the input field when the keyboard is active; 1-64 characters |
| `selective?` | `boolean` | Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. |

## Methods

#### addRow( ...reply_buttons )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...reply_buttons` | [`ReplyKeyboardButton[]`](../type-aliases/ReplyKeyboardButton.md) | The reply keyboard buttons to display in this row. |
> Adds a new row of buttons to the current markup.
> 
> Returns: [`ReplyKeyboardMarkup`](./ReplyKeyboardMarkup.md)
