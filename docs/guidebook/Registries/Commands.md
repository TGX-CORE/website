# Command Registries

With command registries, you can organize your commands and code neatly.

## Preparation
Before proceeding, read the [introduction](./README).

- Just create a folder named `commands` in your designated working directory.
- You may create or add folders and files.
- Let's create a `ping` command.

This is only an example, change the paths according to your working directory. Here is what your directory would look like.

```
src/
├── commands/
│   └── ping.js
├── index.js
└── package.json
```
```
src/
├── commands/
│   └── monitoring/
│       └── ping.js
├── index.js
└── package.json
```

## Example

```js
const { Command } = ('tgx-core')

class TestCommand extends Command {

    constructor(context, options){
        super(context, { 
            ...options,
            name: 'ping',
            description: 'Ping the bot.'
        })
    }

    run(command, message){
        message.replyText('pong!')
    }

}

module.exports = TestCommand
```

## Advance Setup
Refer to this [`Registry Setup`](../Commands/Registry%20Setup) on how to set up command registries with scope.