---
outline: 'deep'
prev: false
next: false
---

# Handling Inline Queries

## Pre Requisite
Before continuing, please read this [documentation](https://core.telegram.org/bots/inline) from Telegram API on how inline mode works. You'll need to enable inline mode in order to receive the following update.


## Receiving queries
In this case for this documentation, we have set the name of our bot to 'Teleflaxbot'. Whenever a user typed your bot's name in the text box and inline queries are enabled.

```
@Teleflaxbot Ducks wearing shorts
```

We receive [`ClientEvent#InlineQuery`](../../documentation/enumerations/ClientEvent#inlinequery-inline-query) event whenever the user change their query or sends a new one.

## Anwering The Query
After receiving the query, we need to answer it or send results.

To answer an inline query, we call the [`answer()`](http://localhost:5173/documentation/classes/InlineQuery.html#asyncanswer-results-button-next-offset-is-personal-cache-time) method.

### Example Results
Here is a list of example results, according to the api; you can send 100 results to a single query.

```js
client.on(ClientEvent.InlineQuery, async (inlinequery) => {
    inlineQuery.answer(new InlineQueryResults(
            new QueryResult.Article({
                id: 'article-1',
                title: `Dynamic Article Result - ${inlineQuery.query}`,
                input_message_content: new InputMessage.Text({ message_text: `Your query is ${inlineQuery.query}` })
            }),

            new QueryResult.CachedPhoto({
                id: 'photo-result',
                title: 'Duck wearing short.',
                photo_file_id: new File('C:/../../media/duck_wearing_shorts.jpg')
            })
    ))
})
```

### Relevant Links
- ##### Documentation: [`InlineQuery.answer`](../../../documentation/classes/InlineQuery#asyncanswer-results-button-next-offset-is-personal-cache-time)
- ##### Namespace: [`QueryResult`](../../../documentation/namespaces/QueryResult/README)