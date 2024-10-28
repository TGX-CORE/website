---
outline: 'deep'
prev: false
next: false
---

# Events

Since a message may contain a text, photo, document, etc., some events are special cases. For example a message has additional properties as it may contain a text, photo, or a document. When the client will receive a message here's how it will be parsed:

Here's how `tgx-core` handles this:
- Client will emit `message` `ClientEvent.Message`
- If the message is text:
    - Client will emit `text` `ClientEvent.Text`
- If the message is a photo:
    - Client will emit `photo` `ClientEvent.Photo`

And so on.

For events emitted alonside with `ClientEvent.Message`, you can check the events with params (message).

To know what events are emitted by the client, you may visit [`ClientEvent`](../../documentation/enumerations/ClientEvent).

## Listening to Events

`tgx-core` currently offers two methods to listen to your client's events.

### Registry

For more information about registries, please visit [`Introduction`](../Registries/README) [`Event Registry`](../Registries/Events).

### EventEmitter

The client exetends an event emitter, you may directly listen to the client itself.

```ts
Client.on(ClientEvent.Ready, () => {
    console.log('Client is ready!')
})
```

## Stopping an Event
To simply stop listening to an event, you can get the event from the events registry as it stores the registered events.

```js
client.registries.get('events').get('ready').stop()
```
```js
client.registries.get('events').get(ClientEvent.Ready).stop()
```

### Resume
To resume you just invoke the listen method.

```js
client.registries.get('events').get('ready').listen()
```
```js
client.registries.get('events').get(ClientEvent.Ready).listen()
```