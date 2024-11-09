---

outline: [1,4]

next: false

prev: false

---

export Class
# MenuButtonBuilder
#### extends
 [`Builder`](./Builder.md)

## Constructor
```ts
 new MenuButtonBuilder( type, web_app )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `type` | `"default"` \| `"web_app"` \| `"commands"` | The type of the button. |
| `web_app?` | [`WebAppInfo`](../interfaces/WebAppInfo.md) | Required for type 'web_app', the information of the webapp. |
