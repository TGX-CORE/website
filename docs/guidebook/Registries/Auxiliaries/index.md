# Auxiliary Registries

With auxiliary registries, you can organize your data and code neatly. These are loaded when you initialize the client.

## Preparation
Before proceeding, read the [introduction](./README).

- Just create a folder named `auxiliaries` in your designated working directory.
- You may create or add folders and files.

This is only an example, change the paths according to your working directory. Here is what your directory would look like.

```
src/
├── auxiliaries/
│   └── invoice.js
├── index.js
└── package.json
```
```
src/
├── auxiliaries/
│   └── client/
│       └── invoice.js
├── index.js
└── package.json
```

## Example

Each auxiliary has unique parameters, visit the folder `Auxiliaries`.

An example auxiliary is [`Auxiliaries.Invoices`](../Auxiliaries/Invoices), to use for sending invoices and start receiving [`payments`](../../Additional%20Features/Payments).

