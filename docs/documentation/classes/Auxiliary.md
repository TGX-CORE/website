---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# Auxiliary
#### extends
 `Piece`<[`AuxiliaryMeta`](../interfaces/AuxiliaryMeta.md)>

## Constructor
```ts
 new Auxiliary( context_piece, context_metadata )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `context_piece` | `PieceContext` | |
| `context_metadata` | [`AuxiliaryMeta`](../interfaces/AuxiliaryMeta.md) | |

## Properties

#### $get enabled : `boolean`

#### $readonly client : [`Client`](./Client.md)

#### name? : `string`

#### registry : `AuxiliariesRegistry`

## Methods

#### load( ...args )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...args` | `unknown[]` | |
> 
> 
> Returns: `void`

#### onLoad( )

> 
> 
> Returns: `undefined`
