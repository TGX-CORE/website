---
outline: 'deep'
---
# Extensions

With extensions you can add poweful features to your client, while also offering developers to create their own!

## Loading An Extension
To load an extension, you add it to the [`ClientOptions.extensions`](../../../documentation/interfaces/ClientOptions#extensions-object). You can either provide the built-in extension or a string with the name of the installed npm package, `tgx-core` will require this package for you. See available built-in [`extensions`](#available-built-in-extensions).

Passing an option to the extension is optional unless required by the developer, you can add a string or an array to the array of extensions.
```js
new Client({
    extensions: [
        Extensions.Registries,
        [Extensions.Registries, { options }], // With options
        'extension_package_name',
        ['extension_package_name', { options }]  // With options
    ]
})
```

## Creating An Extension
`tgx-core` exports an `Extension` class that you can import to create your own extension.

```js
const { Extension } = require('tgx-core')

module.exports = class Example extends Extension {

    constructor(client, options = { }){
        super(client)
    }

    async onLoad(){
        return void
    }

}
```

The class is instantiated when the client is created. The onLoad() method will only be called when Client.initialize() is invoked. You must use asynchronous methods to load your class, as they will indicate when the client is fully ready.

## Available Built-In Extensions

> [__`Registries`__](./Build-In%20Extensions/Registries)
>
> Organize your commands, events and auxiliaries with registries.

## Recommended Extensions
There are currently no recommended and trusted extensions from 3rd party developers.