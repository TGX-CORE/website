---

outline: [1,4]

next: false

prev: false

---

export Class
# ExtensionsManager
#### extends
 `BaseManager`

## Constructor
```ts
 new ExtensionsManager( client )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get defaults : `Function`

#### $get get : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

#### trace : `any`
 > An object of record for each extension, where the key is the name of the class and the value as the extension it was loaded from.
 > default: {}

## Methods

#### $asyncinitialize( )

> 
> 
> Returns: `Promise`<`void`>

#### $asyncregister( extension, options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `extension` | `string` \| `ExtensionCosntructor`<`T`> | |
| `options` = `{}` | `any` | |
> 
> 
> Returns: `Promise`<`undefined` \| [`ExtensionsManager`](./ExtensionsManager.md)>
