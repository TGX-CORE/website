---

outline: [1,4]

next: false

prev: false

---

export Interface
# MessageCollectorOptions
#### extends
 [`CollectorOptions`](./CollectorOptions.md)

## Properties

#### dispose? : `boolean`
 > Wether to emit 'dispose' event when a collected data is disposed or removed.

#### filter? : [`CollectorFilter`](../type-aliases/CollectorFilter.md)
 > The filter of the collector.

#### idle? : `number`
 > The maximum time for the collector to wait after a collection in milliseconds.

#### max? : `number`
 > The maximum count to collect.

#### maxProcess? : `number`
 > The maximum count of received datas.

#### time? : `number`
 > The maximum time for the collector to wait in milliseconds.
