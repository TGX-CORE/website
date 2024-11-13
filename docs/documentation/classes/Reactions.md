---

outline: [1,4]

next: false

prev: false

---

export Class
# Reactions
#### extends
 `Builder`

Represents an array of reactions.

## Constructor
```ts
 new Reactions( ...emojis )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...emojis` | [`Emojis[]`](../type-aliases/Emojis.md) | The emojis of what the payload should contain. |

## Methods

#### add( emoji )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `emoji` | [`Emojis`](../type-aliases/Emojis.md) | The emoji to add to the current payload. |
> Adds an emoji to the current payload.
> 
> Returns: [`Reactions`](./Reactions.md)
