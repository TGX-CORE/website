---

outline: [1,4]

next: false

prev: false

---

export Interface
# DocumentFilePacket
#### extends
 [`FilePacket`](./FilePacket.md),`Omit`\<[`MediaFilePacket`](./MediaFilePacket.md), `"duration"`\>

## Properties

#### client? : [`Client`](../classes/Client.md)

#### file_id? : `string`

#### file_name? : `string`

#### file_path? : `string`

#### file_size? : `number`

#### file_unique_id? : `string`

#### mime_type? : `string`

#### thumbnail? : [`PhotoSize`](../classes/PhotoSize.md)
