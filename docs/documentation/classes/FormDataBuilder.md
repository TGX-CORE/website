---

outline: [1,4]

next: false

prev: false

---

export Class
# FormDataBuilder
#### extends
 `Builder`

## Constructor
 ```ts
 new FormDataBuilder( ...append_datas )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `...append_datas` | [`FormAppendData[]`](../type-aliases/FormAppendData.md) | |

## Methods

#### append( name, path, options )
Append a file to the form.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | The name the file will be attached as. |
| `path` | `string` \| `"fs".ReadStream` | Absolute path to the file or a readstream. |
| `options?` | `string` \| `FormData.AppendOptions` | Additional options or the name of the file. |

Returns: [`FormDataBuilder`](./FormDataBuilder.md)
