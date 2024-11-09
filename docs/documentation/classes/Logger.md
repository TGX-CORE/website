---

outline: [1,4]

next: false

prev: false

---

export Class
# Logger

## Constructor
```ts
 new Logger( level )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `level` = `LogLevel.Debug` | `undefined` \| [`LogLevel`](../enumerations/LogLevel.md) | |

## Properties

#### level : [`LogLevel`](../enumerations/LogLevel.md)

#### $static$readonly levels : `Map`<[`LogLevel`](../enumerations/LogLevel.md), [`LogMethods`](../type-aliases/LogMethods.md)>
 
 > default: ...

## Methods

#### debug( ...argumants )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...argumants` | `any[]` | |
> 
> 
> Returns: `void`

#### error( ...argumants )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...argumants` | `any[]` | |
> 
> 
> Returns: `void`

#### has( level )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `level` | [`LogLevel`](../enumerations/LogLevel.md) | |
> 
> 
> Returns: `boolean`

#### info( ...argumants )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...argumants` | `any[]` | |
> 
> 
> Returns: `void`

#### warn( ...argumants )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...argumants` | `any[]` | |
> 
> 
> Returns: `void`
