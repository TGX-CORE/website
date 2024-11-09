---

outline: [1,4]

next: false

prev: false

---

export Class
# CommandsScopeBuilder
#### extends
 [`Builder`](./Builder.md)

## Constructor
```ts
 new CommandsScopeBuilder( type, chat_id, user_id )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `type` | [`CommandScopeType`](../enumerations/CommandScopeType.md) | The type of the scope. |
| `chat_id?` | `string` \| `number` | The id of the chat that is relevant. |
| `user_id?` | `number` | The id of the user that is relevent. |

## Methods

#### setChat( chat_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat_id` | `string` \| `number` | The id of the chat that is relevant. |
> 
> 
> Returns: [`CommandsScopeBuilder`](./CommandsScopeBuilder.md)

#### setType( type )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `type` | [`CommandScopeType`](../enumerations/CommandScopeType.md) | The type of the command. |
> 
> 
> Returns: [`CommandsScopeBuilder`](./CommandsScopeBuilder.md)

#### setUser( user_id )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `user_id` | `number` | The id of the user that is relevant. |
> 
> 
> Returns: [`CommandsScopeBuilder`](./CommandsScopeBuilder.md)
