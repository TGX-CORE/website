---

outline: [1,4]

next: false

prev: false

---

export Interface
# KeyboardButtonPayload

This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.

## Properties

#### callback_data? : `string`

#### callback_game? : `string`

#### login_url? : [`LoginUrl`](./LoginUrl.md)

#### pay? : `boolean`

#### switch_inline_query? : `string`

#### switch_inline_query_chosen_chat? : [`SwitchInlineQueryChosenChat`](./SwitchInlineQueryChosenChat.md)

#### switch_inline_query_current_chat? : `string`

#### text : `string`

#### url? : `string`

#### web_app? : [`WebAppInfo`](./WebAppInfo.md)
