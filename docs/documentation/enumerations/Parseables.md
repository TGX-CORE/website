---

outline: [1,4]

next: false

prev: false

---

export Enum
# Parseables

The client will parse the corresponding object for you.

## Properties

| Member | Value | Description |
| :--- | :--- | :--- |
| MessageService | `1` | Parse message services that was sent by telegram e.g: NewChatMembers, ForumTopicCreated, SuccessfulPayment, etc. |
| UnhandledService | `0` | The client will emit 'unhandled' for all events that has been ignored instead of a warning. |
