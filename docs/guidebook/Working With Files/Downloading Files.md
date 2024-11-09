---
outline: 'deep'
---
# Downloading Files
`tgx-core` exports a [`File`](../../documentation/classes/File) class that you can use to download files.

::: info

Before you can download a file, you need to fetch it first according to the Telegram API.
> When fetching a file, it generates a `file_path`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling `File.fetch()`.

Calling the `File.download()` method will also call `File.fetch()` so you don't need to fetch it for downloading.
:::

### Downloading
To download a file, you may call the method [`File.download()`](../../documentation/classes/File#asyncdownload-path) with a path to where you want to download the file.

If the class `File` belongs to the client, it is already passed with the rest from the client itself. Otherwise, you'll need to set the token for the class to be able to acccess the api for fetching and downloading the file.

::: info
If there is no token set for the class `File`, it will read your environment variables.

`File.token = token or process.env['TELEGRAM_TOKEN']`
:::

```js
new File('<file-id>')
    .setToken('<token>')
    .download()
```

## Reference
The information was provided by Telegram's bot API documentation, [`TelegramAPI#file`](https://core.telegram.org/bots/api#file).