---

outline: [1,4]

next: false

prev: false

---

export Class
# Sticker
#### extends
 [`File`](./File.md)
#### implements
 [`StickerFilePacket`](../interfaces/StickerFilePacket.md)

## Constructor
 ```ts
 new Sticker( packet, options )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `packet?` | `string` \| [`FilePacket`](../interfaces/FilePacket.md) | The packet, the filel_id, or absolute path to the file to read. |
| `options?` | `FormData.AppendOptions` | Append options for uploading file, can be empty. |

## Properties

#### $get form : `[string, ReadStream, string | AppendOptions]`

#### $get id : `string`

#### $readonly client? : [`Client`](./Client.md)
 > The client will only be availble if the class is passed by tgx-core itself.

#### custom_emoji_id? : `string`

#### emoji? : `string`

#### file_id? : `string`

#### file_path? : `string`

#### file_size? : `number`

#### file_unique_id? : `string`

#### height? : `number`

#### is_animated? : `boolean`

#### is_video? : `boolean`

#### mask_position? : [`MaskPosition`](../interfaces/MaskPosition.md)

#### needs_repainting? : `true`

#### options? : `FormData.AppendOptions`

#### path? : `string`

#### premium_animation? : [`File`](./File.md) \| [`FilePacket`](../interfaces/FilePacket.md)

#### set_name? : `string`

#### thumbnail? : [`PhotoSizeFilePacket`](../interfaces/PhotoSizeFilePacket.md)

#### type? : `"regular"` \| `"maks"` \| `"custom_emoji"`

#### width? : `number`

## Methods

#### $asyncdownload( path )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | Leave empty if you want a stream, or an absolute path to the file where you want to write the Stream. |
> Fetches the file and downloads it.
> 
> Returns: `Promise`<`boolean` \| `internal.Stream`>

#### $asyncfetch( )

> Fetch the file from Telegram, this is required for downloading the file.
> 
> Returns: `Promise`<`boolean` \| [`Sticker`](./Sticker.md)>

#### setClient( client )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | The client to attach. |
> 
> 
> Returns: [`Sticker`](./Sticker.md)
