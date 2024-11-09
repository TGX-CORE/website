---

outline: [1,4]

next: false

prev: false

---

export Interface
# StickerFilePacket
#### extends
 `Omit`<[`FilePacket`](./FilePacket.md), `"token"` \| `"rest"`>,[`PhotoSizeFilePacket`](./PhotoSizeFilePacket.md)

## Properties

#### custom_emoji_id? : `string`

#### emoji? : `string`

#### file_id? : `string`

#### file_path? : `string`

#### file_size? : `number`

#### file_unique_id? : `string`

#### height? : `number`

#### is_animated? : `boolean`

#### is_video? : `boolean`

#### mask_position? : [`MaskPosition`](./MaskPosition.md)

#### needs_repainting? : `true`

#### premium_animation? : [`File`](../classes/File.md) \| [`FilePacket`](./FilePacket.md)

#### set_name? : `string`

#### thumbnail? : [`PhotoSizeFilePacket`](./PhotoSizeFilePacket.md)

#### type? : `"regular"` \| `"maks"` \| `"custom_emoji"`

#### width? : `number`
