---

outline: [1,4]

next: false

prev: false

---

export Function
# nest

Reads an object including nested objects but ignores classes and arrays.

## Constructor
 ```ts
 nest( object, additional, fn )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `object` | `any` | The object to read. |
| `additional` | [`Nesting`](../interfaces/Nesting.md) | Additional options on how to read the object. |
| `fn` | `Function` | The callback function to call whenever a key and value has been read. |

Return: void
