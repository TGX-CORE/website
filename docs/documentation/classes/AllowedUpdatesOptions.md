---

outline: [1,4]

next: false

prev: false

---

export Class
# AllowedUpdatesOptions
#### extends
 `Builder`

## Constructor
```ts
 new AllowedUpdatesOptions( ...allowed_updates )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...allowed_updates` | [`AllowedUpdates[]`](../enumerations/AllowedUpdates.md) | The updates the client will receive. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. |
