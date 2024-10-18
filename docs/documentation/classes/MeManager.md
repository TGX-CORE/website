---

outline: [1,4]

next: false

prev: false

---

export Class
# MeManager
#### extends
 `BaseClass`\<[`MeManager`](./MeManager.md), [`User`](./User.md)\>

## Constructor
 ```ts
 new MeManager( client )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### added_to_attachment_menu? : `boolean`

#### adminsitrator_rights : `Object`

#### can_connect_to_business? : `boolean`

#### can_join_groups? : `boolean`

#### can_read_all_group_messages? : `boolean`

#### $readonly client : [`Client`](./Client.md)

#### description? : `string`

#### first_name? : `string`

#### has_main_web_app? : `boolean`

#### id? : `number`

#### is_bot? : `boolean`

#### is_premium? : `boolean`

#### language_code? : `string`

#### last_name? : `string`

#### name? : `string`

#### short_description? : `string`

#### supports_inline_queries? : `boolean`

#### username? : `string`

## Methods

#### $asyncgetBusinessConnection( business_connection_id )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `business_connection_id` | `string` | |

Returns: `Promise`\<[`BusinessConnectionPacket`](../interfaces/BusinessConnectionPacket.md)\>

#### $asyncgetMenuButton( chat_id )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id?` | `number` | |

Returns: `Promise`\<[`ChatMenuButton`](../type-aliases/ChatMenuButton.md)\>

#### $asyncsetDescription( description, language_code )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | |
| `language_code?` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetMenuButton( chat_id, menu_button )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id?` | `number` | |
| `menu_button?` | [`ChatMenuButton`](../type-aliases/ChatMenuButton.md) | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetMyDefaultAdministratorRights( rights, for_channels )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `rights` | `ChatAdministratorRights` | |
| `for_channels` | `boolean` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetName( name, language_code )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | |
| `language_code?` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetShortDescription( short_description, language_code )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `short_description` | `string` | |
| `language_code?` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncupdate( )

Returns: `Promise`\<`boolean`\>
