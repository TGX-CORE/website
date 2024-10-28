---

outline: [1,4]

next: false

prev: false

---

export Class
# InlineKeyboardMarkup
#### extends
 `Builder`

This object represents an inline keyboard that appears right next to the message it belongs to.

## Constructor
 ```ts
 new InlineKeyboardMarkup( ...inline_buttons )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `...inline_buttons` | [`InlineKeyboardButton[][]`](../type-aliases/InlineKeyboardButton.md) | An array of arrays containing of buttons. |

## Methods

#### addrow( ...inline_buttons )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...inline_buttons` | [`InlineKeyboardButton[]`](../type-aliases/InlineKeyboardButton.md) | The keyboard buttons to display in this row. |
> Adds a new row to the current markup.
> 
> Returns: [`InlineKeyboardMarkup`](./InlineKeyboardMarkup.md)
