---

outline: [1,4]

next: false

prev: false

---

export Class
# Rest

## Constructor
```ts
 new Rest( options )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` = `{}` | [`RestOptions`](../interfaces/RestOptions.md) | |

## Properties

#### $get ready : `boolean`

#### base : `string`
 
 > default: 'https://api.telegram.org'

#### files : `string`
 
 > default: 'https://api.telegram.org/file'

#### onReject? : `Function`

#### timeout : `number`
 
 > default: 10_000

## Methods

#### $asyncfetchFile( file_id, file )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `file_id` | `string` | The id of the file to fetch. |
| `file` = `true` | `boolean` | Wether to return the class File or an object. |
> 
> 
> Returns: `Promise`<`false` \| [`File`](./File.md)>

#### generate( route, file )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `route` | `string` | |
| `file?` | `boolean` | |
> 
> 
> Returns: `string`

#### $asyncget( route, params, options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `route` | [`Routes`](../enumerations/Routes.md) | |
| `params?` | `any` | |
| `options?` | [`RestRequestOptions`](../interfaces/RestRequestOptions.md) | |
> 
> 
> Returns: `Promise`<`any`>

#### $asyncpost( route, params, options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `route` | [`Routes`](../enumerations/Routes.md) | |
| `params?` | `any` | |
| `options?` | [`RestRequestOptions`](../interfaces/RestRequestOptions.md) | |
> 
> 
> Returns: `Promise`<`any`>

#### $asyncrequest( route, params, options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `route` | `string` | |
| `params` = `{}` | `any` | |
| `options` = `{}` | [`RestRequestOptions`](../interfaces/RestRequestOptions.md) | |
> 
> 
> Returns: `Promise`<`any`>

#### serialize( object, form )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | |
| `form?` | [`FormDataBuilder`](./FormDataBuilder.md) | |
> 
> 
> Returns: `[any, undefined | FormDataBuilder]`

#### setToken( token )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` | `string` | |
> 
> 
> Returns: [`Rest`](./Rest.md)
