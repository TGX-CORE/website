---

outline: [1,4]

next: false

prev: false

---

export Class
# Client
#### extends
 `BaseClient`

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

#### actions : [`ActionsManager`](./ActionsManager.md)

#### api : [`APIManager`](./APIManager.md)

#### chats : [`ChatsManager`](./ChatsManager.md)

#### commands : [`CommandsManager`](./CommandsManager.md)

#### invoices : [`InvoicesManager`](./InvoicesManager.md)

#### logger : [`Logger`](./Logger.md)

#### me : [`MeManager`](./MeManager.md)

#### options : [`ClientOptions`](../interfaces/ClientOptions.md)
 > The options provided to the client.

#### payments : [`PaymentsManager`](./PaymentsManager.md)

#### poll : [`PollManager`](./PollManager.md)

#### polls : [`PollsManager`](./PollsManager.md)

#### registries : `RegistryManager`

#### $readonly token? : `string`
 > The token provided by Telegram for your client.

#### users : [`UsersManager`](./UsersManager.md)

#### webhook? : [`WebhookManager`](./WebhookManager.md)

## Methods

#### $asyncintialize( token, provider_token )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` = `...` | `string` | Your token for authorization, or stored in process.env as 'TELEGRAM_TOKEN'. |
| `provider_token` = `...` | `string` | Your token provided by your payment provider, or stored in process.env as 'PAYMENT_PROVIDER_TOKEN'. |
> Intializes your client and the poll manager, also updating the me manager.
> 
> Returns: `Promise`<`boolean`>

#### $asyncupdate( )

> Updates the me manager of the client.
> 
> Returns: `Promise`<`void`>
