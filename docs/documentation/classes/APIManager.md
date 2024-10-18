---

outline: [1,4]

next: false

prev: false

---

export Class
# APIManager
#### extends
 `BaseManager`\<[`APIManagerOptions`](../interfaces/APIManagerOptions.md)\>

## Constructor
 ```ts
 new APIManager( client )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get token : `string`

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : [`APIManagerOptions`](../interfaces/APIManagerOptions.md)

#### $readonly options : [`APIManagerOptions`](../interfaces/APIManagerOptions.md)

## Methods

#### $asyncrequest( URL, method, ...argumants )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `URL` | `string` | |
| `method` | [`AxiosMethod`](../type-aliases/AxiosMethod.md) | |
| `...argumants` | `any[]` | |

Returns: `Promise`\<`any`\>

#### serialize( object, output )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | |
| `output` = `{}` | `any` | |

Returns: `any`

#### setToken( token )

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` | `string` | |

Returns: `void`
