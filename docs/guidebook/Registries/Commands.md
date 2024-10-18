# Command Registries

With command registries, you can organize your commands and code neatly.

- Just create a folder named `commands` in your designated working directory.
- You may create or add folders and files.
- Let's create a `test` command.

```js
const { Command } = ('tgx-core')

class TestCommand extends Command {

    constructor(context, options){
        super(context, { 
            ...options,
            name: 'test',
            description: 'This is a test command.'
        })
    }

    run(command, message){
        message.replyText('Command received!')
    }

}

module.exports = TestCommand
```

## Advance Setup
Refer to this [`Registry Setup`](../Commands/Registry%20Setup) on how to set up command registries with advance scope.