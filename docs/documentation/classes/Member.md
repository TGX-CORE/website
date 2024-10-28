---

outline: [1,4]

next: false

prev: false

---

export Class
# Member
#### extends
 `BaseClass`<[`Member`](./Member.md), [`ChatMember`](../type-aliases/ChatMember.md)>
#### implements
 `Partial`<[`ChatMemberOwner`](../interfaces/ChatMemberOwner.md)>,`Partial`<[`ChatMemberMember`](../interfaces/ChatMemberMember.md)>,`Partial`<[`ChatMemberAdministrator`](../interfaces/ChatMemberAdministrator.md)>,`Partial`<[`ChatMemberBanned`](../interfaces/ChatMemberBanned.md)>,`Partial`<[`ChatMemberLeft`](../interfaces/ChatMemberLeft.md)>,`Partial`<[`ChatMemberRestricted`](../interfaces/ChatMemberRestricted.md)>

## Constructor
 ```ts
 new Member( client, packet )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `client` | [`Client`](./Client.md) | |
| `packet` | [`ChatMember`](../type-aliases/ChatMember.md) | |

## Properties

#### $get chat : [`Chat`](../type-aliases/Chat.md)

#### $get id : `number`

#### $get manager : [`MembersManager`](./MembersManager.md)

#### $get partial : `boolean`

#### $get user : [`User`](./User.md)

#### can_add_web_page_previews : `boolean`

#### can_be_edited : `boolean`

#### can_change_info : `boolean`

#### can_delete_messages : `boolean`

#### can_delete_stories : `boolean`

#### can_edit_messages? : `boolean`

#### can_edit_stories : `boolean`

#### can_invite_users : `boolean`

#### can_manage_chat : `boolean`

#### can_manage_topics? : `boolean`

#### can_manage_video_chats : `boolean`

#### can_pin_messages? : `boolean`

#### can_post_messages? : `boolean`

#### can_post_stories : `boolean`

#### can_promote_members : `boolean`

#### can_restrict_members : `boolean`

#### can_send_audios : `boolean`

#### can_send_documents : `boolean`

#### can_send_messages : `boolean`

#### can_send_other_messages : `boolean`

#### can_send_photos : `boolean`

#### can_send_polls : `boolean`

#### can_send_video_notes : `boolean`

#### can_send_videos : `boolean`

#### can_send_voice_notes : `boolean`

#### $readonly client : [`Client`](./Client.md)

#### custom_title? : `string`

#### is_anonymous? : `boolean`

#### is_member : `boolean`

#### status : `any`

#### until_date? : `number`

## Methods

#### $asyncban( revoke_messages, until_date )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `revoke_messages?` | `boolean` | |
| `until_date?` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncboosts( )

> 
> 
> Returns: `Promise`<`boolean` \| [`ChatBoost[]`](./ChatBoost.md)>

#### $asyncfetch( )

> 
> 
> Returns: `Promise`<[`Member`](./Member.md)>

#### $asyncpromote( is_anonymous, permissions )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `is_anonymous` | `boolean` | |
| `permissions` | [`AdminPermissions`](../interfaces/AdminPermissions.md) | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncrestrict( permissions, use_independent_chat_permissions, until_date )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `permissions` | [`ChatPermissions`](./ChatPermissions.md) | |
| `use_independent_chat_permissions?` | `boolean` | |
| `until_date?` | `number` | |
> 
> 
> Returns: `Promise`<`boolean`>

#### $asyncunban( only_if_banned )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `only_if_banned` | `boolean` | |
> 
> 
> Returns: `Promise`<`boolean`>
