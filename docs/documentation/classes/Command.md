---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# Command
#### extends
 `Piece`\<[`CommandMeta`](../interfaces/CommandMeta.md)\>

A command piece.

## Constructor
 ```ts
 new Command( context_piece, context_metadata )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `context_piece` | `PieceContext` | |
| `context_metadata` | [`CommandMeta`](../interfaces/CommandMeta.md) | |

## Properties

#### chat_groups? : `Object`
 The chat ids along with their member ids to attach to the scope.

#### chat_ids? : `number[]`
 The chat ids to attach to the scope.

#### $readonly client : [`Client`](./Client.md)

#### command : `string`
 The command that is attach to this piece.

#### description : `string`
 The description of the command.

#### emitter : `any`

#### enabled : `boolean`

#### ignore : `boolean`
 Wether to ignore the piece if it has been registered for faster intializing.

#### language_code : `string`
 A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands

#### name : `string`

#### registry : `CommandsRegistry`

#### scope : [`CommandScopeType`](../enumerations/CommandScopeType.md)
 The scope of the command, see [ \<TelegramAPI#BotCommandScope\> ](https://core.telegram.org/bots/api#botcommandscope).

## Methods

#### getCommand( )

Returns: [`BotCommand`](../interfaces/BotCommand.md)

#### listen( )
Activates or resumes the listener, this is activated on load.

Returns: `void`

#### run( ...args )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...args` | `unknown[]` | |

Returns: `unknown`

#### stop( )
Stops the listener.

Returns: `void`