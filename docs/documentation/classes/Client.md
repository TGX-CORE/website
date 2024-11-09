---

outline: [1,4]

next: false

prev: false

---

export Class
# Client
#### extends
 [`BaseClient`](./BaseClient.md)

The main hub for interacting with the Telegram API.

## Constructor
```ts
 new Client( options )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`ClientOptions`](../interfaces/ClientOptions.md) | The options for your client. |

### Client Events
The 
[ClientEvent](../enumerations/ClientEvent.md)
 contains the events that the client emits and what their parameters.

## Properties

#### $get defaults : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

#### actions : [`ActionsManager`](./ActionsManager.md)

#### chats : [`ChatsManager`](./ChatsManager.md)

#### commands : [`CommandsManager`](./CommandsManager.md)

#### database? : `any`
 > An extension activated property.

#### endpoint : `EndpointManager`

#### extensions : [`ExtensionsManager`](./ExtensionsManager.md)

#### invoices : [`InvoicesManager`](./InvoicesManager.md)

#### logger : [`Logger`](./Logger.md)

#### options : [`ClientOptions`](../interfaces/ClientOptions.md)
 > The options provided to the client.

#### payments : [`PaymentsManager`](./PaymentsManager.md)

#### polls : [`PollsManager`](./PollsManager.md)

#### rest : [`Rest`](./Rest.md)

#### user : [`ClientUser`](./ClientUser.md)

#### users : [`UsersManager`](./UsersManager.md)

#### webhook : [`WebhookManager`](./WebhookManager.md)

## Methods

#### $asyncfetchFile( file_id, file )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `file_id` | `string` | The id of the file to fetch. |
| `file?` | `boolean` | Wether to return the class File or an object. |
> 
> 
> Returns: `Promise`<`false` \| [`File`](./File.md)>

#### $asyncintialize( token, provider_token )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` = `...` | `string` | Your token for authorization, or see EnvironmentVariables . |
| `provider_token` = `...` | `string` | Your token provided by your payment provider, or see EnvironmentVariables . |
> Intializes your client and the poll manager, also updating the me manager.
> 
> Returns: `Promise`<`void`>
