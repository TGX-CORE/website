---

outline: [1,4]

next: false

prev: false

---

export Class
# PollAnswers

## Constructor
```ts
 new PollAnswers( options )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [`PollOption[]`](../interfaces/PollOption.md) | |

## Properties

#### records : `Object`
 
 > default: {}

## Methods

#### answered( id, user_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | The id of the answer. |
| `user_id` | `number` | The id of the user to check. |
> Checks if the user has answered an answer with the id.
> 
> Returns: `boolean`

#### update( user_id, ids )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | The id of the user. |
| `ids` | `number[]` | The ids of the answers of the users. |
> Updates the answers of a user.
> 
> Returns: `void`
