---

outline: [1,4]

next: false

prev: false

---

export Class
# MessagesManager
#### extends
 `CachedManager`\<`number`, [`Message`](./Message.md)\>

## Constructor
 ```ts
 new MessagesManager( chat )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `chat` | [`BaseChat`](./BaseChat.md) | |

## Properties

#### $get cache : `Collection`\<`CachedManager.K`, `CachedManager.V`\>

#### chat : [`BaseChat`](./BaseChat.md)

#### $readonly client : [`Client`](./Client.md)

#### $readonly default? : `any`

#### $readonly options : `any`

## Methods

#### _add( data, cache, param2 )
Add data with cache check to the current manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `any` | The data to add to the cache manager. |
| `cache` = `true` | `boolean` | Pass *True* to cache the data. |
| `param2` = `{}` | `any` | Additional data to pass. |

Returns: `any`

#### $asynccopy( payload, ...message_ids )
Copy messages of that belongs to this manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`CopyMessagePayload`](../interfaces/CopyMessagePayload.md) | The payload data of the copy. |
| `...message_ids` | `number[]` | The ids of the messages to forward. |

Returns: `Promise`\<`boolean`\>

#### $asyncdelete( ...message_ids )
Delete or bulk delete messages.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `...message_ids` | `number[]` | |

Returns: `Promise`\<`boolean`\>

#### $asyncedit( payload )
Edits a message that belongs to this manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageEditPayload`](../interfaces/MessageEditPayload.md) | The payload data of the edit. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asynceditCaption( payload )
Edits the caoption of a message that belongs to this manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessagecaptionEditPayload`](../interfaces/MessagecaptionEditPayload.md) | the payload data of the caption. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asynceditMedia( payload )
Edits the media of a message that belongs to this manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageMediaEditPayload`](../interfaces/MessageMediaEditPayload.md) | The payload data of the media. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asynceditReplyMarkup( payload )
Edits the reply markup of a message that belongs to this manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageReplyMarkupEditPayload`](../interfaces/MessageReplyMarkupEditPayload.md) | The payload data of the reply markup. |

Returns: `Promise`\<`boolean` \| [`Message`](./Message.md)\>

#### $asyncforward( payload, ...message_ids )
Forward messages that belongs to this manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`ForwardPayload`](../interfaces/ForwardPayload.md) | The payload data of the forward. |
| `...message_ids` | `string \| number[]` | The ids of the messages to forward. |

Returns: `Promise`\<`boolean` \| `number[]`\>

#### $asyncpin( message_id, disable_notification, business_connection_id )
Pins a message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_id` | `number` | |
| `disable_notification?` | `boolean` | |
| `business_connection_id?` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncsetReaction( payload )
Sets the reaction of a message that belongs to this manager.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | [`MessageReactionPayload`](../interfaces/MessageReactionPayload.md) | The payload data of the reaction. |

Returns: `Promise`\<`boolean`\>

#### $asyncunpin( message_id, business_connection_id )
Unpins a message.
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `message_id` | `number` | |
| `business_connection_id` | `string` | |

Returns: `Promise`\<`boolean`\>

#### $asyncunpinAll( )
Unpin all pinned messages.

Returns: `Promise`\<`boolean`\>
