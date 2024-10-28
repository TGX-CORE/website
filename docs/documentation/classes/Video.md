---

outline: [1,4]

next: false

prev: false

---

export Class
# Video
#### extends
 [`File`](./File.md)
#### implements
 [`VideoFilePacket`](../interfaces/VideoFilePacket.md)

## Constructor
 ```ts
 new Video( packet, options )
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

#### duration? : `number`

#### file_id? : `string`

#### file_name? : `string`

#### file_path? : `string`

#### file_size? : `number`

#### file_unique_id? : `string`

#### height? : `number`

#### mime_type? : `string`

#### options? : `FormData.AppendOptions`

#### path? : `string`

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
> Returns: `Promise`<`boolean` \| [`Video`](./Video.md)>

#### setClient( client )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | The client to attach. |
> 
> 
> Returns: [`Video`](./Video.md)
