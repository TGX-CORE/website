---

outline: [1,4]

next: false

prev: false

---

export Class
# FormDataBuilder
#### extends
 `Builder`

FormData as a builder for sending files.

## Constructor
```ts
 new FormDataBuilder( ...append_datas )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...append_datas` | [`FormAppendData[]`](../type-aliases/FormAppendData.md) | An array of FormAppendData to append to the form. |

## Methods

#### append( file )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `file` | [`File`](./File.md) | The class File with an attached file to append to the form.. |
> Append a file to the form.
> 
> Returns: `this`
#### append( name, path, options )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | The name the file will be attached as. |
| `path` | `string` \| `"fs".ReadStream` | Absolute path to the file or a ReadStream. |
| `options?` | `string` \| `FormData.AppendOptions` | Additional options or the name of the file. |
> Append a file to the form with a name, path or a read stream, and append options.
> 
> Returns: `this`
