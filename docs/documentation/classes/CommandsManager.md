---

outline: [1,4]

next: false

prev: false

---

export Class
# CommandsManager
#### extends
 `BaseManager`

## Constructor
```ts
 new CommandsManager( client, pointer, defaults )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `pointer?` | `string` | |
| `defaults?` | `any` | |

## Properties

#### $get defaults : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### $asyncdelete( scope, language_code )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `scope?` | [`CommandScope`](../interfaces/CommandScope.md) | The scope of the command. |
| `language_code?` | `string` | The language code of the command. |
> Delete the commands that are relevant w/o scope and language code.
> 
> Returns: `Promise`<`boolean`>

#### $asyncget( scope, language_code )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `scope?` | [`CommandScope`](../interfaces/CommandScope.md) | The scope of the command. |
| `language_code?` | `string` | The language code of the command. |
> Get the commands that are relevant w/o scope and language code.
> 
> Returns: `Promise`<`boolean` \| [`BotCommand[]`](../interfaces/BotCommand.md)>

#### $asyncregister( commands, language_code, scope, chat_id, user_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `commands` | `string[]` | An array of the commands command as an id, they must be registered to the registry. |
| `language_code` | `string` | The language code scope of the current commands. |
| `scope` | [`CommandScopeType`](../enumerations/CommandScopeType.md) | The scope of the current commands. |
| `chat_id?` | `string` \| `number` | The attached chat_id of the scope. |
| `user_id?` | `string` | The attached user_id of the scope. |
> Register the commands.
> 
> Returns: `Promise`<`boolean`>

#### $asyncset( commands, language_code, scope )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `commands` | `string` \| [`CommandsBuilder`](./CommandsBuilder.md) | The list of commands that are relevant, must be a JSON-serialized object. |
| `language_code?` | `string` | The language code that are relevant to. |
| `scope?` | `string` \| [`CommandsScopeBuilder`](./CommandsScopeBuilder.md) | The scope of the commands that are releaven to, must be a JSON-serialized object. |
> Set the commands.
> 
> Returns: `Promise`<`boolean`>

#### $asyncupdate( )

> Updates all of the commands but filters ignored from the commands registry.
> 
> Returns: `Promise`<`boolean`>
