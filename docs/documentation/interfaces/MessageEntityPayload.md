---

outline: [1,4]

next: false

prev: false

---

export Interface
# MessageEntityPayload

Represents a special entity in a text message. For example, hashtags, usernames, URLs, etc.

## Properties

#### custom_emoji_id? : `string`
 > For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker

#### language? : `string`
 > For “pre” only, the programming language of the entity text

#### length : `number`
 > Length of the entity in UTF-16 code units

#### offset : `number`

#### type : `string`
 > The type of the entity.

#### url? : `string`
 > For “text_link” only, URL that will be opened after user taps on the text

#### user? : [`UserPacket`](./UserPacket.md)
 > For “text_mention” only, the mentioned user
