---

outline: [1,4]

next: false

prev: false

---

export Class
# MessageEntitiesStore

## Constructor
 ```ts
 new MessageEntitiesStore( text, entities )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | |
| `entities` = `[]` | [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md) | |

## Properties

#### entities : [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### text : `string`

## Methods

#### blockquotes( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### bolds( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### bot_commands( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### cashtags( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### codes( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### custom_emojis( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### emails( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### expandable_blockquotes( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### get( type )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `type` | [`EntityType`](../enumerations/EntityType.md) | Obtains the message entities with type. |
> Obtains all of the entites with the correct type.
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### hashtags( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### italics( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### mentions( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### parse( type, index )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `type` | [`EntityType`](../enumerations/EntityType.md) | The type of the message entity. |
| `index` | `number` | The index of the entity, starting from 0. |
> Obtains an entity by type and index by their appearance in a message.
> 
> Returns: `string` \| `boolean`

#### parseText( offset, length )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `offset` | `number` | The starting position of the string. |
| `length` | `number` | The length of the portion. |
> Gets a portion of the string or the message this manager belongs to.
> 
> Returns: `string`

#### phone_numbers( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### pres( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### spoilers( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### strikethroughs( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### text_links( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### text_mentions( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### underlines( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)

#### urls( )

> 
> 
> Returns: [`MessageEntityPayload[]`](../interfaces/MessageEntityPayload.md)
