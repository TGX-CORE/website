---

outline: [1,4]

next: false

prev: false

---

export Class
# ClientUser
#### extends
 [`User`](./User.md)

## Constructor
```ts
 new ClientUser( client, packet )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`UserPacket`](../interfaces/UserPacket.md) | |

## Properties

#### adminsitrator_rights : `Object`
 
 > default: ...

#### $readonly client : [`Client`](./Client.md)

#### description? : `string`

#### id : `number`

#### is_bot? : `boolean`

#### language_code? : `string`

#### menu_button : `Object`
 
 > default: {}

#### message_thread_id? : `number`

#### name? : `string`

#### short_description? : `string`

## Methods

#### $asyncboosts( chat_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id` | `number` | |
> 
> 
> Returns: `Promise`<`boolean` \| [`ChatBoost[]`](./ChatBoost.md)>

#### createCallbackCollector( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options?` | [`CallbackCollectorOptions`](../interfaces/CallbackCollectorOptions.md) | The options for the collector. |
> Creates a callback query collector to the current chat.
> 
> Returns: [`CallbackCollector`](./CallbackCollector.md)

#### createMessageCollector( options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options?` | [`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) | The options for the collector. |
> Creates a message collector to the current chat.
> 
> Returns: [`MessageCollector`](./MessageCollector.md)

#### $asyncget( )

> 
> 
> Returns: `Promise`<[`ClientUser`](./ClientUser.md)>

#### $asyncgetBusinessConnection( business_connection_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `business_connection_id` | `string` | |
> 
> 
> Returns: `Promise`<`BusinessConnectionPacket`>

#### $asyncgetChatMenuButton( chat_id, force )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id?` | `number` | |
| `force?` | `boolean` | |
> 
> 
> Returns: `Promise`<[`ChatMenuButton`](../type-aliases/ChatMenuButton.md)>

#### $asyncgetProfilePhotos( offset, limit )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `offset?` | `number` | |
| `limit?` | `number` | |
> 
> 
> Returns: `Promise`<[`UserProfilePhotos`](../interfaces/UserProfilePhotos.md)>

#### $asyncsend( method, packet, form )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `method` | [`MessagePayloadMethod`](../enumerations/MessagePayloadMethod.md) | The method of the message. |
| `packet` | [`MessagePayload`](../type-aliases/MessagePayload.md) | The packet of what the message will contain. |
| `form?` | [`FormDataBuilder`](./FormDataBuilder.md) | The form data for uploading media, see also File . |
> Sends a message to the current channel.
> 
> Returns: `Promise`<`false` \| [`Message`](./Message.md)>

#### $asyncsendInvoice( id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The id of the invoice. |
> Sends the stored invoice with the id to the current chat.
> 
> Returns: `Promise`<`null` \| [`Message`](./Message.md)>

#### $asyncsendText( text )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `text` | `string` | The text content of the message. |
> Sends a text message to the current chat.
> 
> Returns: `Promise`<`false` \| [`Message`](./Message.md)>

#### $asyncsetDefaultAdministratorRights( rights, for_channels )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `rights` | `ChatAdministratorRights` | |
| `for_channels?` | `boolean` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetDescription( description, language_code )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | |
| `language_code?` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetMenuButton( menu_button, chat_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `menu_button?` | `string` \| [`MenuButtonBuilder`](./MenuButtonBuilder.md) | |
| `chat_id?` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetName( name, language_code )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | |
| `language_code?` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncsetShortDescription( short_description, language_code )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `short_description` | `string` | |
| `language_code?` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>
