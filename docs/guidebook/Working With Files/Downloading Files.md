---
outline: 'deep'
---
# Downloading Files

`tgx-core` exports a [`File`](../../documentation/classes/File) class that you can use to download files.

Before you can download a file, you need to fetch it first according to the Telegram API.
> When fetching a file, it generates a `file_path`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling.

### Downloading
Calling the `download()` method will also call `fetch()`.

```js
message.photo[0].download('C:/../../../media/photo.png')
```

### Downloading by file_id
Since `File` is an independent class, you'll need to attach your client to the class. Ensure the id is correct otherwise it will return `false`.

```js
new File('<file_id>')
    .setClient(client)
    .download('C:/../../../media/photo.png')
```

## Reference
The information was provided by Telegram's bot API documentation, [`TelegramAPI#file`](https://core.telegram.org/bots/api#file).