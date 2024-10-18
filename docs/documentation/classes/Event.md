---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# Event
#### extends
 `Piece`\<[`EventMeta`](../interfaces/EventMeta.md)\>

An event piece.

## Constructor
 ```ts
 new Event( context_piece, context_metadata )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `context_piece` | `PieceContext` | |
| `context_metadata` | [`EventMeta`](../interfaces/EventMeta.md) | |

## Properties

#### $readonly client : [`Client`](./Client.md)

#### emitter : `any`

#### enabled : `boolean`

#### event : `string`

#### name : [`ClientEvent`](../enumerations/ClientEvent.md)

#### once : `boolean`

#### registry : `EventsRegistry`

## Methods

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