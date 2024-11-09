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
| `revoke_messages?` | `boolean` | Delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. |
| `until_date?` | `number` | Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. |
> Ban the current member.
> 
> Returns: `Promise`<`boolean`>

#### $asyncboosts( )

> Get the list of boosts added to a chat by the user. Requires administrator rights in the chat.
> 
> Returns: `Promise`<`boolean` \| [`ChatBoost[]`](./ChatBoost.md)>

#### $asyncfetch( )

> Fetches the member.
> 
> Returns: `Promise`<`false` \| [`Member`](./Member.md)>

#### $asyncpromote( permissions )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `permissions` | [`ChatAdministratorRights`](./ChatAdministratorRights.md) | The administrative permissions to give the current member. |
> Promote the current member.
> 
> Returns: `Promise`<`boolean`>

#### $asyncrestrict( permissions, use_independent_chat_permissions, until_date )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `permissions` | [`ChatPermissions`](./ChatPermissions.md) | The new permissions of the member. |
| `use_independent_chat_permissions?` | `boolean` | Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. |
| `until_date?` | `number` | Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever |
> Restrict the current member.
> 
> Returns: `Promise`<`boolean`>

#### $asyncunban( only_if_banned )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `only_if_banned` | `boolean` | Do nothing if the user is not banned |
> Unban the current member.
> 
> Returns: `Promise`<`boolean`>
