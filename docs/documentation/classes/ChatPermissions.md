---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatPermissions
#### extends
 [`Builder`](./Builder.md)

## Constructor
```ts
 new ChatPermissions( ...permissions )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...permissions` | [`Permission[]`](../enumerations/Permission.md) | The permissions a non-adminstrator user is allowed. |

## Methods

#### set( permission, allowed )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `permission` | [`Permission`](../enumerations/Permission.md) | The permission to set. |
| `allowed` = `true` | `boolean` | Wether to set to true to allow permission or not. |
> Set a permission.
> 
> Returns: [`ChatPermissions`](./ChatPermissions.md)
