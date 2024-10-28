---

outline: [1,4]

next: false

prev: false

---

export Class
# Invoice
#### extends
 `Builder`
#### implements
 [`StoredInvoice`](../interfaces/StoredInvoice.md)

## Constructor
 ```ts
 new Invoice( title, description, currency, payload )
 ```
 
 | Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The title of the invoice. |
| `description` | `string` | The description of the invoice. |
| `currency` | `string` | The currency you will accept. |
| `payload?` | `string` | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. If left empty it will be set as id in invoices.create, but otherwise it is required. |

## Properties

#### currency : `string`

#### description : `string`

#### disable_notification? : `boolean`

#### is_flexible? : `boolean`

#### max_tip_amount? : `number`

#### message_effect_id? : `string`

#### need_email? : `boolean`

#### need_name? : `boolean`

#### need_phone_number? : `boolean`

#### need_shipping_address? : `boolean`

#### payload : `string`

#### photo_height? : `number`

#### photo_size? : `number`

#### photo_url? : `string`

#### photo_width? : `number`

#### prices : [`LabeledPrices`](./LabeledPrices.md)

#### protect_content? : `boolean`

#### provider_data? : `string`

#### reply_markup? : [`InlineKeyboardMarkup`](./InlineKeyboardMarkup.md)

#### reply_parameters? : [`ReplyParameters`](../interfaces/ReplyParameters.md)

#### send_email_to_provider? : `boolean`

#### send_phone_number_to_provider? : `boolean`

#### start_parameter? : `string`

#### suggested_tip_amounts? : `number[]`

#### title : `string`

## Methods

#### addPrice( label, amount )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `label` | `string` | |
| `amount` | `number` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setCurrency( currency )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `currency` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setDescription( description )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setDisableNotification( disableNotification )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `disableNotification` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setIsFlexible( isFlexible )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `isFlexible` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setMaxTipAmount( maxTipAmount )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `maxTipAmount` | `number` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setMessageEffectId( messageEffectId )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `messageEffectId` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setNeedEmail( needEmail )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `needEmail` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setNeedName( needName )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `needName` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setNeedPhoneNumber( needPhoneNumber )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `needPhoneNumber` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setNeedShippingAddress( needShippingAddress )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `needShippingAddress` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setPayload( payload )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `payload` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setPhotoHeight( photoHeight )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `photoHeight` | `number` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setPhotoSize( photoSize )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `photoSize` | `number` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setPhotoUrl( photoUrl )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `photoUrl` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setPhotoWidth( photoWidth )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `photoWidth` | `number` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setProtectContent( protectContent )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `protectContent` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setProviderData( providerData )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `providerData` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setProviderToken( providerToken )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `providerToken` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setReplyMarkup( replyMarkup )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `replyMarkup` | [`InlineKeyboardMarkup`](./InlineKeyboardMarkup.md) | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setReplyParameters( replyParameters )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `replyParameters` | [`ReplyParameters`](../interfaces/ReplyParameters.md) | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setSendEmailToProvider( sendEmailToProvider )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sendEmailToProvider` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setSendPhoneNumberToProvider( sendPhoneNumberToProvider )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `sendPhoneNumberToProvider` | `boolean` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setStartParameter( startParameter )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `startParameter` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setSuggestedTipAmounts( suggestedTipAmounts )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `suggestedTipAmounts` | `number[]` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)

#### setTitle( title )
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | |
> 
> 
> Returns: [`Invoice`](./Invoice.md)
