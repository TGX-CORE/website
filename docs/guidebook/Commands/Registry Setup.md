# Commands Setup

Once you have created a registry and loaded that registry, the client will load it up for you.

In this instance, the command registry. The client will load all the registries, update your command, and will listen to the commands on Telegram's API.

## Setup
Here is an example code of what a command registry would look like.
```js
class TestCommand extends Command {

    public constructor(context, metadata){
        super(context, {
            ...metadata,
            command: 'test'
            description: 'This is a test command.',

            /**
             * Place the additional options here.
             */

        })

        run(message){

            /**
             * Your code after receiving a command.
             */

        }

    }
}
```

## Scope
Describing the scope of users for which the commands are relevant, if this scope is empty it is aplied to all users or defaults to `CommandScopeDefault`.

To set the relevance of the command you set the scope of the registry.
```js
scope: CommandScopeType.??
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

## Language Code
A two-letter [ISO 639-1](https://simple.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.
```js
language_code: '??'
```

## Ignore
For every initialization of the client, the commands are updated on the Telegram API. Thus, increasing the usage of your system's resources. If you have ran and updated the command, we recommend you indicate the client to ignore it on the next run.
```js
ignore: true
```