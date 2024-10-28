# Event Registries

With event registries, you can organize your code neatly.

## Preparation
Before proceeding, read the [introduction](./README).

- Just create a folder named `events` in your designated working directory.
- You may create or add folders and files.
- Let's create a `ready` listener.

This is only an example, change the paths according to your working directory. Here is what your directory would look like.
```
src/
├── events/
│   └── ready.js
├── index.js
└── package.json
```
```
src/
├── events/
│   └── client/
│       └── ready.js
├── index.js
└── package.json
```

## Example 

```js   
const { Event, ClientEvent } = require('tgx-core')

class Ready extends Event {

    constructor(context, options){
        super(context, {
            ...options,
            name: ClientEvent.Ready,
            once: true
        })
    }

    async run(client) {
        console.log('Client is ready!')
    }

}

module.exports = Ready
```