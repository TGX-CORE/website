---

outline: [1,4]

next: false

prev: false

---

export Class
# PaymentsManager
#### extends
 `CachedManager`<`number`, [`SuccessfulPayment`](./SuccessfulPayment.md)>

## Constructor
```ts
 new PaymentsManager( client )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |

## Properties

#### $get cache : `Collection`<`CachedManager.K`, `CachedManager.V`>

#### $get defaults : `Function`

#### $get isJson : `Function`

#### $get nest : `Function`

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### _add( data, cache, param2 )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `any` | The data to add to the cache manager. |
| `cache` = `true` | `boolean` | Pass *True* to cache the data. |
| `param2` = `{}` | `any` | Additional data to pass. |
> Add data with cache check to the current manager.
> 
> Returns: `any`

#### $asyncrefund( user_id, telegram_payment_charge_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | |
| `telegram_payment_charge_id` | `string` | |
> 
> 
> Returns: `Promise`<`boolean`>
