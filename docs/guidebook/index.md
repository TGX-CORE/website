# What is tgx-core?
__tgx-core__ is a powerful library for building your Telegram bots. It is customizable, modular and flexible, tailored 
for Telegram server owners to create their bots with little to no knowledge in coding.

<!-- ::: tip Just want to try it out? Skip to [Quickstart](./Quick%20Start/Quickstart).
::: -->


- Object-oriented
- Modular
- Flexible
- 99% Coverage of the Telegram API

## Getting Started
With `node.js` and `tgx-core`, we can start creating your client.

```js
const { Client, ClientEvent, PartialTypes } = require('tgx-core')

const client = new Client({
    partials: [PartialTypes.Chat, PartialTypes.Member]
})

client.once(ClientEvent.Ready, () => {
    console.log('Your imagination is the limit!')
})

client.on(ClientEvent.Text, (message) => {
    message.replyText('Hello there!')
})

client.intialize('<bot-token>')
```