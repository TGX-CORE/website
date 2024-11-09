---
outline: 'deep'
prev: false
next: false
---
# Commands Setup

Once you have created a registry and loaded that registry, the client will load it up for you.

In this instance, the command registry. The client will load all the registries, update your command, and will listen to the commands on Telegram's API.

## Setup
Here is an example code of what a command registry would look like.
```js
class TestCommand extends Command {

    public constructor(context, metadata){
        super(context, {
            ...metadata

            /**
             * Place the additional options here.
             */

        })

        run(message){

            /**
             * Your code after receiving the command.
             */

        }

    }
}
```

## Additional Options
Here are additional options and scopes to modify your commands.

### Command & Description
You have two methods to set the command and description.

- Single language_code.
```js
command: "command", // also as 'name'
description: "This is a command!"
```

- Multiple language_code.

You must set a unique name for the command class.
```js
name: 'name'
```

Head to this [section](#multiple-language-code) to know more about multiple language codes.

### Scope
Describing the scope of users for which the commands are relevant, if this scope is empty it is aplied to all users or defaults to `CommandScopeDefault`.

To set the relevance of the command you set the scope of the registry.
```js
/** 
 * For scopes 
 *  - CommandScopeType.AllChatAdministrators
 *  - CommandScopeType.AllPrivateChats 
 *  - CommandScopeType.AllGroupChats.
 *  - CommandScopeType.Default
*/
scope: CommandScopeType.Default
```
```js
/** 
 * For scopes 
 *  - CommandScopeType.Chat 
 *  - CommandScopeType.ChatAdministrators.
 *  
 * You must specify which chats by their ids that are relevant.
*/

chat_ids: [ 000, 000 ]
```
```js
/**
 * For scopes
 *  - CommandScopeType.ChatMember
 * 
 * You must specify which chats and members by their ids are relevant.
 */

chat_groups: {
    [ <chat-id> ]: [ <user_ids> ],
    [ -000 ]: [ 000, 000 ]
    [ 000 ]: [ 000, 000 ]
} 
    
```

### Language Code
A two-letter [ISO 639-1](https://simple.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.

The language code can be set to a string 'undefined' for users who do not have their language set.

```js
language_code: undefined
```

#### Multiple Language Code
```js
language_code: {
    "undefined": {
        command: "command",
        description: "<command_description>"
    },
    "en": {
        command: "command_en",
        description: "<command_description>"
    }
}
```

### Ignore
This will ignore the command, registering it to the registry but not to the Telegram's API. It can be dynamically changed within your process, you just need to invoke the update method on the commands manager to update the commands.

- Single language_code.
```js
ignore: false
```

- Multiple lanuage_code.
```ts
language_code: {
    "undefined": {
        command: "command",
        description: "<command_description>"
    },
    "en": {
        command: "command_en",
        description: "<command_description>",
        ignore: true
    }
}
```