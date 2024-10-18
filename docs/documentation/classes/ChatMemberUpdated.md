---

outline: [1,4]

next: false

prev: false

---

export Class
# ChatMemberUpdated
#### extends
 `BaseClass`\<[`ChatMemberUpdated`](./ChatMemberUpdated.md), [`ChatMemberUpdatedPacket`](../interfaces/ChatMemberUpdatedPacket.md)\>
#### implements
 [`ChatMemberUpdatedPacket`](../interfaces/ChatMemberUpdatedPacket.md)

## Constructor
 ```ts
 new ChatMemberUpdated( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatMemberUpdatedPacket`](../interfaces/ChatMemberUpdatedPacket.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get member : [`Member`](./Member.md)

#### $readonly client : [`Client`](./Client.md)

#### date : `number`

#### invite_link? : `ChatInviteLink`

#### new_chat_member : [`ChatMember`](../type-aliases/ChatMember.md)

#### old_chat_member : [`ChatMember`](../type-aliases/ChatMember.md)

#### via_chat_folder_invite_link? : `boolean`

#### via_join_request? : `boolean`
