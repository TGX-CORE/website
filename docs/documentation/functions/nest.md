---

outline: [1,4]

next: false

prev: false

---

export Function
# nest

Reads an object including nested objects but ignores classes, Return the duplicated and modified object.

## Constructor
```ts
 nest( object, additional, fn )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `object` = `{}` | `any` | The object to read and nest. |
| `additional` | [`Nesting`](../interfaces/Nesting.md) | Additional options on how to read the object. |
| `fn` | [`NestCallback`](../type-aliases/NestCallback.md) | The callback function to call whenever a key and value has been read. Additional information is available. |

Return: T
