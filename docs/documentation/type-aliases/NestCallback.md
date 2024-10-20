---

outline: [1,4]

next: false

prev: false

---

export TypeAlias
# NestCallback

Returning a value or null will replace the old value, returning void or undefined will skip the current iteration.

if Nesting.array is **true**:

`(type: 'array', index: number, value: any) => any`

`(type: 'json', key: any, value: any) => any`

Otherwise it is:

`(key: any, value: any) => any`

`Function`
