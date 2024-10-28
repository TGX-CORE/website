---

outline: [1,4]

next: false

prev: false

---

export Class
# PollAnswer
#### extends
 `BaseClass`<[`PollAnswer`](./PollAnswer.md), [`PollAnswerPacket`](../interfaces/PollAnswerPacket.md)>
#### implements
 [`PollAnswerPacket`](../interfaces/PollAnswerPacket.md)

## Constructor
 ```ts
 new PollAnswer( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`PollAnswerPacket`](../interfaces/PollAnswerPacket.md) | |

## Properties

#### $get id : `number`

#### $get poll : [`Poll`](./Poll.md)

#### $get user : `undefined` \| [`User`](./User.md)

#### $get voter_chat : `undefined` \| [`SuperGroupChat`](./SuperGroupChat.md) \| [`GroupChat`](./GroupChat.md) \| [`ChannelChat`](./ChannelChat.md) \| [`PrivateChat`](./PrivateChat.md)

#### $readonly client : [`Client`](./Client.md)

#### option_ids : `number[]`

#### poll_id : `string`
