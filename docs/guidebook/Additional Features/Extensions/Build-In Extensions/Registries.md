---
outline: 'deep'
---
# Registries

First let's set up our root folder, from your working directory or where your project resides. This is also the location of our `index.js` and `package.json`.

#### Root Folder

We have two ways to set our root folder for our registries.
- __Extension Options__

    We can also set independed folders for each registry by setting the `path` option for the registry. If it is not set it is read from the root, e.g `root + /command`.
    ```js
    extensions: {
        [Extensions.Registry, {
            root: 'C:/../../path/to/index',

    //      commands: {
    //         path: 'C:/../../path/to/commands'
    //      }

        }]
    }
    ``` 
- __package.json__

    You can set the `main` property of your package.json and the client will set it as the default root path.

::: danger Non-Existent Folder
Before actually loading the registry, make sure the folder of your designated path exists. Otherwise the client will throw an error as it cannot find the folder.
:::

## PreRequisites
Before continuing, ensure you have properly set up your root folder and designated folders. Within each designated folders, you can add folders and files to further organize your files.

Here's an __example__ directory with `root: 'C:/../../src/'` or `main: './index.js'`.

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

## Commands

Let's create an example `ping` command.

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


#### Relevant Links
- ##### Class: [`Command`](../../../../../documentation/classes/Command)
- ##### Guide: [`Registry Setup`](../../../Client/Commands/)<br>
    Refer to this guide on how to setup command registries with scope and language codes.

## Events 

Let's create an example `ready` event.

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

#### Relevant Links
- ##### Class: [`Event`](../../../../../documentation/classes/Event)
- ##### Guide: [`Events`](../../../Client/Events/)<br>


## Auxiliaries
Each `auxiliary` may have unique load methods from each other, but their structures are similar. See the guide from the relevant links from below.

An example is provided in the guide.

#### Relevant Links
- ##### Class: [`Auxiliary`](../../../../../documentation/classes/Auxiliary)
- ##### Guide: [`Auxiliaries`](../../../Client/Auxiliaries/)