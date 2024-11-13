---

outline: [1,4]

next: false

prev: false

---

export Class
# CommandsBuilder
#### extends
 `Builder`

## Constructor
```ts
 new CommandsBuilder( ...commands )
 ```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...commands` | `[string, string]` | An array of commands as [command, description]. |

## Methods

#### add( command, description )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `command` | `string` | The command, must be lower cased. |
| `description` | `string` | The description of the command. |
> Add a command to the current builder.
> 
> Returns: `void`
