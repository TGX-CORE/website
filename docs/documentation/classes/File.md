---

outline: [1,4]

next: false

prev: false

---

export Class
# File

#### implements
 `Omit`<[`FilePacket`](../interfaces/FilePacket.md), `"token"` \| `"rest"`>

If there is no token set, it will get Token from your environment variables 
[EnvironmentVariables](../enumerations/EnvironmentVariables.md)
.

## Constructor
::: details `new File( packet )`
 ```ts
 new File( packet )
 ```

 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `packet` | [`FilePacket`](../interfaces/FilePacket.md) | The packet metadata of the file. |
 :::
::: details `new File( file_id )`
 ```ts
 new File( file_id )
 ```

 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `file_id` | `string` | The id of the file. |
 :::
::: details `new File( path, options )`
 ```ts
 new File( path, options )
 ```

 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | The absolute path to the file to attach. |
| `options?` | `FormData.AppendOptions` | Additional append options for uploading file, can be empty. |
 :::

## Properties

#### $get form : `[string, ReadStream, string | AppendOptions]`

#### $get id : `string`

#### $get partial : `boolean`

#### file_id? : `string`

#### file_path? : `string`

#### file_size? : `number`

#### file_unique_id? : `string`

#### options? : `FormData.AppendOptions`

#### path? : `string`

#### rest? : [`Rest`](./Rest.md)

#### token? : `string`

## Methods

#### $asyncdownload( path )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `path?` | `string` | The absolute path to a file where you want to write the data. |
> Downloads the file, must have a token.
> 
> Returns: `Promise`<`boolean` \| `internal.Stream`>

#### $asyncfetch( )

> Fetches the file, ensure that you have set the token or otherwise it will return the same instance.
> 
> Returns: `Promise`<[`File`](./File.md)>

#### parse( )

> Returns the id of the file or the attach of the attached file.
> 
> Returns: `string`

#### setToken( token )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `token` | `string` | The token to set, this is exclusive to this class. |
> Sets the token for fetching and downloading.
> 
> Returns: [`File`](./File.md)
