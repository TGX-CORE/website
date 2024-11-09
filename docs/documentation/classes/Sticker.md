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

If there is no token set, it will get Token from your environment variables 
[EnvironmentVariables](../enumerations/EnvironmentVariables.md)
.

## Constructor
::: details `new Sticker( packet )`
 ```ts
 new Sticker( packet )
 ```

 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `packet` | [`FilePacket`](../interfaces/FilePacket.md) | The packet metadata of the file. |
 :::
::: details `new Sticker( file_id )`
 ```ts
 new Sticker( file_id )
 ```

 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `file_id` | `string` | The id of the file. |
 :::
::: details `new Sticker( path, options )`
 ```ts
 new Sticker( path, options )
 ```

 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | The absolute path to the file to attach. |
| `options?` | `FormData.AppendOptions` | Additional append options for uploading file, can be empty. |
 :::

## Properties

#### $get form : `[string, ReadStream, string | AppendOptions]`

#### $get id : `string`

#### $get partial : `boolean`

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
| `path?` | `string` | The absolute path to a file where you want to write the data. |
> Downloads the file, must have a token.
> 
> Returns: `Promise`<`boolean` \| `internal.Stream`>

#### $asyncfetch( )

> Fetches the file, ensure that you have set the token or otherwise it will return the same instance.
> 
> Returns: `Promise`<[`Sticker`](./Sticker.md)>

#### parse( )

> Returns the id of the file or the attach of the attached file.
> 
> Returns: `string`

#### setToken( token )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` | `string` | The token to set, this is exclusive to this class. |
> Sets the token for fetching and downloading.
> 
> Returns: [`Sticker`](./Sticker.md)
