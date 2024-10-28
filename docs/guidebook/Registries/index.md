# Registries

Before creating registries, make sure to set your `main` to the entry file of your working directory.

If your `main` would be `src/index.js`, you would put your registries in `src/`:
    
```
src/
├── commands/
├── events/
├── auxiliaries/
├── index.js
└── package.json
```

::: danger
Loading the registries read their correspoding directories, make sure the folder exists or the folder cannot be found and the client will throw an error.
:::

You can also put your registries in a specific path by modifyng [`ClientOptions#sweep`](../../documentation/interfaces/ClientOptions#sweep-string-boolean), make sure to set this to true or set an absolute path.