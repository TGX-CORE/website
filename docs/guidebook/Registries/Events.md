# Event Registries

With event registries, you can organize your code neatly.

- Just create a folder named `events` in your designated working directory.
- You may create or add folders and files.
- Let's create a `ready` listener.

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