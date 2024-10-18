---

outline: [1,4]

next: false

prev: false

---

export Class
# Animation
#### extends
 [`File`](./File.md)
#### implements
 [`AnimationFilePacket`](../interfaces/AnimationFilePacket.md)

## Constructor
 ```ts
 new Animation( packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `packet?` | `string` \| [`FilePacket`](../interfaces/FilePacket.md) | The packet, the filel_id, or absolute path to the file to read. |

## Properties

#### $get form : `[string, ReadStream, string]`

#### $get id : `string`

#### $readonly client? : [`Client`](./Client.md)
 The client will only be availble if the class is passed by tgx-core itself.

#### duration? : `number`

#### file_id? : `string`

#### file_name? : `string`

#### file_path? : `string`

#### file_size? : `number`

#### file_unique_id? : `string`

#### height? : `number`

#### mime_type? : `string`

#### path? : `string`

#### thumbnail? : [`PhotoSize`](./PhotoSize.md)

#### width? : `number`

## Methods

#### $asyncdownload( path )
Fetches the file and downloads it.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | Leave empty if you want a stream, or an absolute path to the file where you want to write the Stream. |

Returns: `Promise`\<`boolean` \| `internal.Stream`\>

#### $asyncfetch( )
Fetch the file from Telegram, this is required for downloading the file.

Returns: `Promise`\<`boolean` \| [`Animation`](./Animation.md)\>
