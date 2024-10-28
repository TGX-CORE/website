---
outline: 'deep'
prev: false
next: false
---
# Updating Commands

To update your commands, you send an array of commands to the Telegram API along with a scope, with tgx-core the client will read a specific path and will update your commands for you.

#### When are the commands updated?
- Whenever the client is initialized.

- Whenever the [`CommandsManager.update`](../../documentation/classes/CommandsManager#asyncupdate) update is invoke.

## Deleting Commands

To simply delete a command, you can just remove them from your registry.

By setting [`Command.ignore`](./Registry%20Setup#ignore) to true, the registry will skip this command and not register it whenever you intialize your client.