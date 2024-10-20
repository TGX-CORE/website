---

outline: [1,4]

next: false

prev: false

---

export Interface
# ClientOptions

## Properties

#### actions? : [`ClientAction.All`](../enumerations/ClientAction.md#all) \| [`ClientAction[]`](../enumerations/ClientAction.md)

#### api? : [`APIManagerOptions`](./APIManagerOptions.md)

#### endpoint? : [`Endpoint`](../enumerations/Endpoint.md)
 The method for receiving updates from Telegram.

#### logger? : [`LoggerOptions`](./LoggerOptions.md)

#### parseables? : [`Parseables[]`](../enumerations/Parseables.md)

#### partials? : [`PartialTypes[]`](../enumerations/PartialTypes.md)

#### poll? : [`PollManagerOptions`](./PollManagerOptions.md)

#### registries? : [`Registries.All`](../enumerations/Registries.md#all) \| [`Registries[]`](../enumerations/Registries.md)
 Set to 
`Registries.All`
 to load all registries or an array of specific registries.

#### sweep? : `string` \| `boolean`
 Set to *true* to sweep main directory or set to an absolute path to sweep a specific path.
