---
outline: 'deep'
---
# Sending a file

There are three ways to send files (photos, stickers, audio, media, etc.):

- If the file is already stored somewhere on the Telegram servers, you don't need to reupload it: each file object has a file_id field, simply pass this `file_id` as a parameter instead of uploading. There are no limits for files sent this way.
- Provide Telegram with an HTTP URL for the file to be sent. Telegram will download and send the file. 5 MB max size for photos and 20 MB max for other types of content.
- Post the file using `multipart/form-data` or `FormDataBuilder` in the usual way that files are uploaded via the browser. 10 MB max size for photos, 50 MB for other files.

## Sending by multipart/form-data

- `tgx-core` provides a [`FormDataBuilder`](../../documentation/classes/FormDataBuilder) to attach to a query to send a file.
- Here's an example of sending a photo.
    ```ts
    message.reply(
        MessagePayloadMethod.Photo,
        {
            photo: new File('C:/../../../media/photo.png')

            // OR

            photo: new File('C:/../../../media/photo.png', FormData.AppendOptions)
        }
    )
    ```
- Here's an example of sending a photo with advanced configuration.
    ```ts
    message.reply(
        MessagePayloadMethod.Photo,
        {
            photo: 'attach://photo_name'
        },
        new FormdataBuilder()
            .append('photo_name', 'C:/../../../media/photo.png', FormData.AppendOptions)
            .append(File.form)
    )
    ```

## Sending by file_id

- It is not possible to change the file type when resending by `file_id`. I.e. a video can't be sent as a photo, a photo can't be sent as a document, etc.
- It is not possible to resend thumbnails.
- Resending a photo by file_id will send all of its sizes.
- `file_id` is unique for each individual bot and can't be transferred from one bot to another.
- `file_id` uniquely identifies a file, but a file can have different valid file_ids even for the same bot.

```ts
message.reply(MessagePayloadMethod.Photo, {
    photo: '<file_id>'
})
```

## Sending by URL

- When sending by URL the file must have the correct MIME type (e.g., audio/mpeg for sendAudio, etc.).
- In sendDocument, sending by URL will currently only work for GIF, PDF and ZIP files.
- To use sendVoice, the file must have the type audio/ogg and be no more than 1MB in size. 1-20MB voice notes will be sent as files.
- Other configurations may work but we can't guarantee that they will.

## Reference
The information was provided by Telegram's bot API documentation, [`TelegramAPI#sending-files`](https://core.telegram.org/bots/api#sending-files).