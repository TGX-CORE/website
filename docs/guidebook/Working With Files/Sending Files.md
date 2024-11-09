---
outline: 'deep'
---
# Sending Files

::: info
There are three ways to send files (photos, stickers, audio, media, etc.):

- If the file is already stored somewhere on the Telegram servers, you don't need to reupload it: each file object has a file_id field, simply pass this `file_id` as a parameter instead of uploading. There are no limits for files sent this way.
- Provide Telegram with an HTTP URL for the file to be sent. Telegram will download and send the file. 5 MB max size for photos and 20 MB max for other types of content.
- Post the file using `multipart/form-data` or `FormDataBuilder` in the usual way that files are uploaded via the browser. 10 MB max size for photos, 50 MB for other files.
:::

## Sending a File

### multipart/form-data
`tgx-core` offers two methods to upload a file with form-data.

::: info [`FormDataBuilder`](../../documentation/classes/FormDataBuilder)
For more control of the form, you can use the builder.

```js
message.reply(
    MessagePayloadMethod.Photo,
    {
        photo: 'attach://photo_name'
    },
    new FormdataBuilder()
        .append('photo_name', 'C:/../../../media/photo.png', FormData.AppendOptions?)
        .append(new File())
)
```
:::

::: info [`File`](../../documentation/classes/File)
For ease of use, you can use the File class without using or creating a new FormData. The client will serialize the payload for you appending the necessary data to a form.
```js
message.reply(
    MessagePayloadMethod.Photo,
    {
        photo: new File('C:/../../../media/photo.png')

        // OR

        photo: new File('C:/../../../media/photo.png', FormData.AppendOptions?)
    }
)
```
:::

### file_id
If it's already uploaded on Telegram server, you can provide a file id to the InputFile field. Also according to the documentation;

- It is not possible to change the file type when resending by `file_id`. I.e. a video can't be sent as a photo, a photo can't be sent as a document, etc.
- It is not possible to resend thumbnails.
- Resending a photo by file_id will send all of its sizes.
- `file_id` is unique for each individual bot and can't be transferred from one bot to another.
- `file_id` uniquely identifies a file, but a file can have different valid file_ids even for the same bot.

:::info .
```js
message.reply(MessagePayloadMethod.Photo, {
    photo: '<file_id>'

    // OR

    photo: new File('<file_id>')
})
```
:::

### URL
Telegram offers to download the file for you when you provide an URL. Also according to the documentation;

- When sending by URL the file must have the correct MIME type (e.g., audio/mpeg for sendAudio, etc.).
- In sendDocument, sending by URL will currently only work for GIF, PDF and ZIP files.
- To use sendVoice, the file must have the type audio/ogg and be no more than 1MB in size. 1-20MB voice notes will be sent as files.
- Other configurations may work but we can't guarantee that they will.

:::info .
```js
message.reply(MessagePayloadMethod.Photo, {
    photo: 'https:/google.com/photos/example.png'
})
```
:::

## Reference
The information was provided by Telegram's bot API documentation, [`TelegramAPI#sending-files`](https://core.telegram.org/bots/api#sending-files).