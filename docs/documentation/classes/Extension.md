---

outline: [1,4]

next: false

prev: false

---

export abstract Class
# Extension

## Constructor
```ts
 new Extension( client, metadata )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `metadata` | [`ExtensionMetadata`](../interfaces/ExtensionMetadata.md)<`Extension.T`> | |

## Properties

#### $readonly client : [`Client`](./Client.md)

#### $readonly metadata : [`ExtensionMetadata`](../interfaces/ExtensionMetadata.md)<`Extension.T`>

## Methods

#### $asynconLoad( )

> 
> 
> Returns: `Promise`<`void`>
