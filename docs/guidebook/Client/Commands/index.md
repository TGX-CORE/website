---
outline: 'deep'
prev: false
next: false
---
# Commands

Telegram allows a single message to contain multiple commands, `tgx-core` handles this by parsing the message and reading the entities the message contains.

Then the client emits every single commands the message contains, for instance a text message was sent `/command /hey /there`.

Here's how `tgx-core` handles this:
- Client will emit `message` `ClientEvent.Message`
- Client will emit `text` `ClientEvent.Text`
- Client will emit `command` `ClientEvent.Command`
- Client commands will emit `command`
- Client commands will emit `hey`
- Client commands will emit `there`

## Listening to Commands

`tgx-core` currently supports two methods on listening to commands.

### Regsitries

Please refer to the [`Introduction`](../../Additional%20Features/Extensions/Build-In%20Extensions/Registries) [`Registries.Commands`](../../Additional%20Features/Extensions/Build-In%20Extensions/Registries#commands) on how to create command registries.

Once you have created a registry please refer to the [`Registry Setup`](./Registry%20Setup).

### EventEmitter

The client has a manager called command which can be accessed via `Client.commands`. Whenever a command was received and parsed, you can listen to this manager.

::: warning Registries
We recomment using the registries for at the moment since there are no other ways of updating the command.

But the usage of the event emitter is not limited, even if the command is not in the registry it is still emitted by the client for text message with command entities.
:::

```js
Client.commands.on('command', (message) => {
    message.replyText('Command received!')
})
```

## Stopping a Command
To simply stop listening to a command, you can get the command from the commands registry as it stores the registered commands.

```js
client.extensions.registries.commands.get('command').stop()
```

### Resume
To resume you just invoke the listen method.

```js
client.extensions.registries.commands.get('command').listen()
```