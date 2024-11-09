---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatAdministratorRights
#### extends
 [`Builder`](./Builder.md)

## Constructor
```ts
 new ChatAdministratorRights( ...rights )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...rights` | [`AdministratorRight[]`](../enumerations/AdministratorRight.md) | The required administrator rights of the user in the chat. |

## Methods

#### set( right, allowed )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `right` | [`AdministratorRight`](../enumerations/AdministratorRight.md) | The right to set. |
| `allowed` = `true` | `boolean` | Wether to set to true to allow permission or not. |
> Set a right.
> 
> Returns: [`ChatAdministratorRights`](./ChatAdministratorRights.md)
