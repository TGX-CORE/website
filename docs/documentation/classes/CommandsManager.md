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

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### $asyncdelete( scope, language_code )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `scope?` | [`CommandScopeType`](../enumerations/CommandScopeType.md) | |
| `language_code?` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncget( scope, language_code )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `scope?` | [`CommandScopeType`](../enumerations/CommandScopeType.md) | |
| `language_code?` | `string` | |

Returns: `Promise`\<`boolean` \| [`BotCommand[]`](../interfaces/BotCommand.md)\>

#### $asyncset( payload )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`CommandsPayload`](../interfaces/CommandsPayload.md) | |

Returns: `Promise`\<`boolean`\>
